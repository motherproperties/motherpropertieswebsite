import { createHash, randomUUID } from 'crypto';
import { promises as fs } from 'fs';
import path from 'path';
import { getStore } from '@netlify/blobs';
import type { FormType, Lead, LeadIntent } from './types';

const STORE_NAME = 'mother-properties-leads';

export interface CreateLeadInput {
  submissionId?: string;
  name: string;
  email: string;
  phone: string;
  city?: string;
  country?: string;
  intent: LeadIntent;
  budgetRange?: string;
  preferredContactMethod?: string;
  preferredCallTime?: string;
  projectInterest?: string;
  message?: string;
  source: string;
  landingPage: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
  formType: FormType;
  consentGiven: boolean;
  siteVisitDate?: string;
  siteVisitAlternateDate?: string;
  siteVisitPickupLocation?: string;
  siteVisitVisitors?: number;
}

const usesBlobs = () =>
  process.env.NETLIFY === 'true' || process.env.LEAD_STORAGE === 'netlify-blobs';
const localDir = () =>
  process.env.LEAD_LOCAL_DIR || path.join(process.cwd(), '.data', 'leads');
const leadKey = (id: string) => `leads/${id}.json`;

function buildLead(input: CreateLeadInput): Lead {
  const id = isValidSubmissionId(input.submissionId) ? input.submissionId : randomUUID();
  const timestamp = new Date().toISOString();
  return {
    id,
    submissionId: id,
    timestamp,
    name: sanitize(input.name, 120),
    email: sanitize(input.email, 254).toLowerCase(),
    phone: sanitize(input.phone, 40),
    city: optional(input.city, 120),
    country: optional(input.country, 120),
    intent: input.intent,
    budgetRange: optional(input.budgetRange, 120),
    preferredContactMethod: optional(input.preferredContactMethod, 40),
    preferredCallTime: optional(input.preferredCallTime, 80),
    projectInterest: optional(input.projectInterest, 120),
    message: optional(input.message, 2_000),
    source: sanitize(input.source, 120),
    landingPage: sanitizePath(input.landingPage),
    utmSource: optional(input.utmSource, 120),
    utmMedium: optional(input.utmMedium, 120),
    utmCampaign: optional(input.utmCampaign, 160),
    utmTerm: optional(input.utmTerm, 160),
    utmContent: optional(input.utmContent, 160),
    referrer: sanitizeUrl(input.referrer),
    formType: input.formType,
    consentGiven: input.consentGiven,
    consentTimestamp: input.consentGiven ? timestamp : undefined,
    status: 'new',
    nextAction: 'Review new website enquiry',
    contactHistory: [],
    notification: { status: 'pending', attempts: 0 },
    siteVisitDate: optional(input.siteVisitDate, 20),
    siteVisitAlternateDate: optional(input.siteVisitAlternateDate, 20),
    siteVisitPickupLocation: optional(input.siteVisitPickupLocation, 200),
    siteVisitVisitors: input.siteVisitVisitors,
  };
}

export async function createLead(
  input: CreateLeadInput
): Promise<{ lead: Lead; created: boolean }> {
  const lead = buildLead(input);
  if (usesBlobs()) {
    const store = getStore({ name: STORE_NAME, consistency: 'strong' });
    const result = await store.setJSON(leadKey(lead.id), lead, {
      onlyIfNew: true,
      metadata: { formType: lead.formType, timestamp: lead.timestamp },
    });
    if (result.modified) return { lead, created: true };
    const existing = await store.get(leadKey(lead.id), {
      type: 'json',
      consistency: 'strong',
    }) as Lead | null;
    if (!existing) throw new Error('Existing lead could not be retrieved');
    return { lead: existing, created: false };
  }

  const directory = localDir();
  await fs.mkdir(directory, { recursive: true });
  const file = path.join(directory, `${lead.id}.json`);
  try {
    await fs.writeFile(file, JSON.stringify(lead, null, 2), {
      encoding: 'utf-8',
      flag: 'wx',
    });
    return { lead, created: true };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'EEXIST') throw error;
    return {
      lead: JSON.parse(await fs.readFile(file, 'utf-8')) as Lead,
      created: false,
    };
  }
}

export async function updateLead(lead: Lead): Promise<void> {
  if (usesBlobs()) {
    const store = getStore({ name: STORE_NAME, consistency: 'strong' });
    await store.setJSON(leadKey(lead.id), lead, {
      metadata: { formType: lead.formType, timestamp: lead.timestamp },
    });
    return;
  }
  await fs.mkdir(localDir(), { recursive: true });
  await fs.writeFile(
    path.join(localDir(), `${lead.id}.json`),
    JSON.stringify(lead, null, 2),
    'utf-8'
  );
}

export async function listLeads(): Promise<Lead[]> {
  if (usesBlobs()) {
    const store = getStore({ name: STORE_NAME, consistency: 'strong' });
    const result = await store.list({ prefix: 'leads/' });
    const leads = await Promise.all(result.blobs.map((blob) =>
      store.get(blob.key, { type: 'json', consistency: 'strong' }) as Promise<Lead | null>
    ));
    return leads.filter((lead): lead is Lead => lead !== null);
  }
  try {
    const files = (await fs.readdir(/* turbopackIgnore: true */ localDir())).filter((file) =>
      file.endsWith('.json') && file !== 'index.json'
    );
    const leads = await Promise.all(files.map(async (file) =>
      JSON.parse(
        await fs.readFile(
          path.join(/* turbopackIgnore: true */ localDir(), file),
          'utf-8'
        )
      ) as Lead
    ));
    return leads.filter((lead) =>
      !!lead && typeof lead.id === 'string' && typeof lead.timestamp === 'string'
    );
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw error;
  }
}

export function sanitize(input: string, maxLength = 2_000): string {
  return input.replace(/<[^>]*>/g, '').replace(/[<>]/g, '').trim().slice(0, maxLength);
}

function optional(value: string | undefined, maxLength: number): string | undefined {
  const clean = value ? sanitize(value, maxLength) : '';
  return clean || undefined;
}

function sanitizePath(value: string): string {
  const clean = sanitize(value || '/', 500);
  return clean.startsWith('/') && !clean.startsWith('//') ? clean : '/';
}

function sanitizeUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol)
      ? url.toString().slice(0, 1_000)
      : undefined;
  } catch {
    return undefined;
  }
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(new RegExp(String.fromCharCode(34), 'g'), '&quot;')
    .replace(/'/g, '&#39;');
}

export function isValidEmail(email: string): boolean {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10
    && digits.length <= 15
    && /^[\d\s+()-]+$/.test(phone);
}

export function isValidSubmissionId(value: string | undefined): value is string {
  return !!value
    && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

export function isValidFutureDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date.getTime() > today.getTime();
}

export function isHoneypotFilled(value: string | undefined): boolean {
  return !!value?.trim();
}

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function hashRequestIdentifier(value: string): string {
  return createHash('sha256')
    .update(`${process.env.RATE_LIMIT_SALT || 'local'}:${value}`)
    .digest('hex');
}

export function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + 60_000 });
    return false;
  }
  entry.count += 1;
  return entry.count > 5;
}

export function isAllowedOrigin(origin: string | null, requestUrl: string): boolean {
  if (!origin) return true;
  try {
    const request = new URL(requestUrl);
    const submitted = new URL(origin);
    return submitted.host === request.host
      || submitted.origin === 'https://www.motherproperties.net'
      || submitted.origin === 'https://motherproperties.net';
  } catch {
    return false;
  }
}

export function extractUTMParams(searchParams: string) {
  const params = new URLSearchParams(searchParams);
  return {
    utmSource: params.get('utm_source') || undefined,
    utmMedium: params.get('utm_medium') || undefined,
    utmCampaign: params.get('utm_campaign') || undefined,
    utmTerm: params.get('utm_term') || undefined,
    utmContent: params.get('utm_content') || undefined,
  };
}
