import { NextRequest, NextResponse } from 'next/server';
import { createLead, escapeHtml, isHoneypotFilled } from '@/lib/leads';
import {
  BaseLeadPayload,
  guardLeadRequest,
  saveNotificationResult,
  validateBaseLead,
} from '@/lib/leadRequest';
import { sendEmailWithRetry } from '@/lib/email';
import type { FormType, LeadIntent } from '@/lib/types';

export const runtime = 'nodejs';

interface ContactPayload extends BaseLeadPayload {
  formType?: string;
}

const intentMap: Record<string, LeadIntent> = {
  weekend_home: 'weekend_home',
  farmland_ownership: 'farmland_ownership',
  investment_research: 'investment_research',
  nri_enquiry: 'nri_enquiry',
  property_consultancy: 'property_consultancy',
  other: 'other',
};

const formTypeMap: Record<string, FormType> = {
  lead_magnet: 'lead_magnet',
  callback_request: 'callback_request',
  contact: 'contact',
};

export async function POST(request: NextRequest) {
  const blocked = guardLeadRequest(request);
  if (blocked) return blocked;

  try {
    const body = await request.json() as ContactPayload;
    if (isHoneypotFilled(body.website)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }
    const validationError = validateBaseLead(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const formType = formTypeMap[body.formType || ''] || 'contact';
    const intent = intentMap[body.intent || ''] || 'other';
    const result = await createLead({
      submissionId: body.submissionId,
      name: body.name!,
      email: body.email!,
      phone: body.phone!,
      city: body.city,
      country: body.country,
      intent,
      budgetRange: body.budgetRange,
      preferredContactMethod: body.preferredContactMethod,
      preferredCallTime: body.preferredCallTime,
      projectInterest: body.interestedIn,
      message: body.message,
      source: body.source || 'website',
      landingPage: body.landingPage || '/contact/',
      utmSource: body.utmSource,
      utmMedium: body.utmMedium,
      utmCampaign: body.utmCampaign,
      utmTerm: body.utmTerm,
      utmContent: body.utmContent,
      referrer: body.referrer,
      formType,
      consentGiven: true,
    });

    if (!result.created) {
      return NextResponse.json({ success: true, leadId: result.lead.id, duplicate: true });
    }

    const lead = result.lead;
    const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;
    const adminResult = notificationEmail
      ? await sendEmailWithRetry({
          to: notificationEmail,
          subject: `New website enquiry - ${lead.name}`,
          text: `Lead ${lead.id}\nName: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nIntent: ${lead.intent}\nSource: ${lead.source}\nMessage: ${lead.message || '(No message)'}`,
          html: `<h2>New website enquiry</h2><p>Lead ID: ${lead.id}</p><p><strong>Name:</strong> ${escapeHtml(lead.name)}</p><p><strong>Email:</strong> ${escapeHtml(lead.email)}</p><p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p><p><strong>Intent:</strong> ${escapeHtml(lead.intent)}</p><p><strong>Source:</strong> ${escapeHtml(lead.source)}</p><p><strong>Message:</strong> ${escapeHtml(lead.message || '(No message)')}</p>`,
        })
      : { sent: false, attempts: 0, error: 'Lead notification recipient is not configured' };
    await saveNotificationResult(lead, adminResult);

    const isGuide = formType === 'lead_magnet';
    const userText = isGuide
      ? `Dear ${lead.name},\n\nYour managed farmland due-diligence guide is available at https://www.motherproperties.net/buyer-guide/\n\nCoffee Prince catalogue: https://www.motherproperties.net/images/Coffee_Prince_Catalog_Mother_Properties.pdf\n\nMother Properties`
      : `Dear ${lead.name},\n\nWe have recorded your enquiry. A member of the Mother Properties team will contact you using your selected method.\n\nMother Properties`;
    const userResult = await sendEmailWithRetry({
      to: lead.email,
      subject: isGuide
        ? 'Your managed farmland buyer guide'
        : 'We received your Mother Properties enquiry',
      text: userText,
      html: userText.split('\n').map((line) => `<p>${escapeHtml(line)}</p>`).join(''),
    });

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      emailSent: userResult.sent,
      guideUrl: isGuide ? '/buyer-guide/' : undefined,
      catalogueUrl: isGuide
        ? '/images/Coffee_Prince_Catalog_Mother_Properties.pdf'
        : undefined,
      message: 'Your enquiry has been recorded.',
    });
  } catch (error) {
    console.error('[CONTACT] Request failed:', error);
    return NextResponse.json(
      { error: 'We could not record your request. Please call or WhatsApp us.' },
      { status: 500 }
    );
  }
}
