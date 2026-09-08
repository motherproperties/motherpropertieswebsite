import { NextRequest, NextResponse } from 'next/server';
import type { Lead } from './types';
import type { EmailResult } from './email';
import {
  hashRequestIdentifier,
  isAllowedOrigin,
  isRateLimited,
  isValidEmail,
  isValidPhone,
  isValidSubmissionId,
  updateLead,
} from './leads';

export interface BaseLeadPayload {
  submissionId?: string;
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  country?: string;
  intent?: string;
  budgetRange?: string;
  preferredContactMethod?: string;
  preferredCallTime?: string;
  interestedIn?: string;
  message?: string;
  website?: string;
  source?: string;
  landingPage?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
  consent?: boolean;
}

export function guardLeadRequest(request: NextRequest): NextResponse | null {
  const length = Number(request.headers.get('content-length') || 0);
  if (length > 50_000) {
    return NextResponse.json({ error: 'Request is too large.' }, { status: 413 });
  }
  if (!isAllowedOrigin(request.headers.get('origin'), request.url)) {
    return NextResponse.json({ error: 'Request origin is not allowed.' }, { status: 403 });
  }
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'unknown';
  if (isRateLimited(hashRequestIdentifier(ip))) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }
  return null;
}

export function validateBaseLead(body: BaseLeadPayload): string | null {
  if (!body.name?.trim() || !body.email?.trim() || !body.phone?.trim()) {
    return 'Name, email and phone are required.';
  }
  if (!isValidEmail(body.email)) return 'Please provide a valid email address.';
  if (!isValidPhone(body.phone)) return 'Please provide a valid phone number.';
  if (!body.consent) return 'Consent is required to process your request.';
  if (!isValidSubmissionId(body.submissionId)) return 'Invalid submission identifier.';
  return null;
}

export async function saveNotificationResult(
  lead: Lead,
  result: EmailResult
): Promise<void> {
  lead.notification = result.sent
    ? {
        status: 'sent',
        attempts: result.attempts,
        sentAt: new Date().toISOString(),
      }
    : {
        status: 'failed',
        attempts: result.attempts,
        lastError: result.error,
      };
  await updateLead(lead);
}
