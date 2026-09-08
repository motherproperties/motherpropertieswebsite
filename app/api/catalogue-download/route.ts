import { NextRequest, NextResponse } from 'next/server';
import { createLead, escapeHtml, isHoneypotFilled } from '@/lib/leads';
import {
  BaseLeadPayload,
  guardLeadRequest,
  saveNotificationResult,
  validateBaseLead,
} from '@/lib/leadRequest';
import { sendEmailWithRetry } from '@/lib/email';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const blocked = guardLeadRequest(request);
  if (blocked) return blocked;

  try {
    const body = await request.json() as BaseLeadPayload;
    if (isHoneypotFilled(body.website)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }
    const validationError = validateBaseLead(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const result = await createLead({
      submissionId: body.submissionId,
      name: body.name!,
      email: body.email!,
      phone: body.phone!,
      city: body.city,
      country: body.country,
      intent: 'catalogue_download',
      source: body.source || 'website',
      landingPage: body.landingPage || '/projects/coffee-prince/',
      utmSource: body.utmSource,
      utmMedium: body.utmMedium,
      utmCampaign: body.utmCampaign,
      utmTerm: body.utmTerm,
      utmContent: body.utmContent,
      referrer: body.referrer,
      formType: 'catalogue_download',
      consentGiven: true,
    });
    const lead = result.lead;

    if (result.created) {
      const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;
      const adminResult = notificationEmail
        ? await sendEmailWithRetry({
            to: notificationEmail,
            subject: `Coffee Prince catalogue request - ${lead.name}`,
            text: `Lead ${lead.id}\nName: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nSource: ${lead.source}`,
            html: `<h2>Catalogue request</h2><p>Lead ID: ${lead.id}</p><p><strong>Name:</strong> ${escapeHtml(lead.name)}</p><p><strong>Email:</strong> ${escapeHtml(lead.email)}</p><p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p><p><strong>Source:</strong> ${escapeHtml(lead.source)}</p>`,
          })
        : { sent: false, attempts: 0, error: 'Lead notification recipient is not configured' };
      await saveNotificationResult(lead, adminResult);

      const catalogueUrl =
        'https://www.motherproperties.net/images/Coffee_Prince_Catalog_Mother_Properties.pdf';
      await sendEmailWithRetry({
        to: lead.email,
        subject: 'Your Coffee Prince catalogue',
        text: `Dear ${lead.name},\n\nDownload the Coffee Prince catalogue: ${catalogueUrl}\n\nProject details and availability should be independently confirmed before purchase.\n\nMother Properties`,
        html: `<p>Dear ${escapeHtml(lead.name)},</p><p><a href='${catalogueUrl}'>Download the Coffee Prince catalogue</a>.</p><p>Project details and availability should be independently confirmed before purchase.</p><p>Mother Properties</p>`,
      });
    }

    return NextResponse.json({
      success: true,
      duplicate: !result.created,
      leadId: lead.id,
      catalogueUrl: '/images/Coffee_Prince_Catalog_Mother_Properties.pdf',
      message: 'Your catalogue request has been recorded.',
    });
  } catch (error) {
    console.error('[CATALOGUE] Request failed:', error);
    return NextResponse.json(
      { error: 'We could not record your request. Please call or WhatsApp us.' },
      { status: 500 }
    );
  }
}
