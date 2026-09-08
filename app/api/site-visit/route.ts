import { NextRequest, NextResponse } from 'next/server';
import {
  createLead,
  escapeHtml,
  isHoneypotFilled,
  isValidFutureDate,
} from '@/lib/leads';
import {
  BaseLeadPayload,
  guardLeadRequest,
  saveNotificationResult,
  validateBaseLead,
} from '@/lib/leadRequest';
import { sendEmailWithRetry } from '@/lib/email';

export const runtime = 'nodejs';

interface SiteVisitPayload extends BaseLeadPayload {
  preferredDate?: string;
  alternateDate?: string;
  pickupLocation?: string;
  numberOfVisitors?: string;
}

export async function POST(request: NextRequest) {
  const blocked = guardLeadRequest(request);
  if (blocked) return blocked;

  try {
    const body = await request.json() as SiteVisitPayload;
    if (isHoneypotFilled(body.website)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }
    const validationError = validateBaseLead(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }
    if (!body.preferredDate || !isValidFutureDate(body.preferredDate)) {
      return NextResponse.json(
        { error: 'Choose a valid future date for your visit.' },
        { status: 400 }
      );
    }
    if (body.alternateDate && !isValidFutureDate(body.alternateDate)) {
      return NextResponse.json(
        { error: 'Choose a valid future alternate date.' },
        { status: 400 }
      );
    }
    const visitors = Number.parseInt(body.numberOfVisitors || '1', 10);
    if (!Number.isInteger(visitors) || visitors < 1 || visitors > 20) {
      return NextResponse.json(
        { error: 'Number of visitors must be between 1 and 20.' },
        { status: 400 }
      );
    }

    const result = await createLead({
      submissionId: body.submissionId,
      name: body.name!,
      email: body.email!,
      phone: body.phone!,
      city: body.city,
      country: body.country,
      intent: 'site_visit',
      message: body.message,
      source: body.source || 'website',
      landingPage: body.landingPage || '/projects/coffee-prince/',
      utmSource: body.utmSource,
      utmMedium: body.utmMedium,
      utmCampaign: body.utmCampaign,
      utmTerm: body.utmTerm,
      utmContent: body.utmContent,
      referrer: body.referrer,
      formType: 'site_visit',
      consentGiven: true,
      siteVisitDate: body.preferredDate,
      siteVisitAlternateDate: body.alternateDate,
      siteVisitPickupLocation: body.pickupLocation,
      siteVisitVisitors: visitors,
    });
    const lead = result.lead;

    if (result.created) {
      const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;
      const adminResult = notificationEmail
        ? await sendEmailWithRetry({
            to: notificationEmail,
            subject: `Site visit request - ${lead.name} - ${lead.siteVisitDate}`,
            text: `Lead ${lead.id}\nName: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nDate: ${lead.siteVisitDate}\nAlternate: ${lead.siteVisitAlternateDate || 'None'}\nPickup: ${lead.siteVisitPickupLocation || 'Not requested'}\nVisitors: ${lead.siteVisitVisitors}`,
            html: `<h2>Site visit request</h2><p>Lead ID: ${lead.id}</p><p><strong>Name:</strong> ${escapeHtml(lead.name)}</p><p><strong>Email:</strong> ${escapeHtml(lead.email)}</p><p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p><p><strong>Date:</strong> ${escapeHtml(lead.siteVisitDate || '')}</p><p><strong>Alternate:</strong> ${escapeHtml(lead.siteVisitAlternateDate || 'None')}</p><p><strong>Pickup:</strong> ${escapeHtml(lead.siteVisitPickupLocation || 'Not requested')}</p><p><strong>Visitors:</strong> ${lead.siteVisitVisitors}</p>`,
          })
        : { sent: false, attempts: 0, error: 'Lead notification recipient is not configured' };
      await saveNotificationResult(lead, adminResult);

      await sendEmailWithRetry({
        to: lead.email,
        subject: 'We received your Coffee Prince site-visit request',
        text: `Dear ${lead.name},\n\nWe recorded your preferred visit date of ${lead.siteVisitDate}. This is a request, not a confirmed appointment. Our team will contact you to confirm availability and route details.\n\nMother Properties`,
        html: `<p>Dear ${escapeHtml(lead.name)},</p><p>We recorded your preferred visit date of <strong>${escapeHtml(lead.siteVisitDate || '')}</strong>.</p><p>This is a request, not a confirmed appointment. Our team will contact you to confirm availability and route details.</p><p>Mother Properties</p>`,
      });
    }

    return NextResponse.json({
      success: true,
      duplicate: !result.created,
      leadId: lead.id,
      message: 'Your site-visit request has been recorded for confirmation.',
    });
  } catch (error) {
    console.error('[SITE-VISIT] Request failed:', error);
    return NextResponse.json(
      { error: 'We could not record your request. Please call or WhatsApp us.' },
      { status: 500 }
    );
  }
}
