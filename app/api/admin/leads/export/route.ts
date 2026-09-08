import { NextRequest, NextResponse } from 'next/server';
import { listLeads } from '@/lib/leads';
import { isLeadAdminAuthorized } from '@/lib/adminAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function csvCell(value: unknown): string {
  let text = value === undefined || value === null ? '' : String(value);
  if (/^[=+\-@]/.test(text)) text = `'${text}`;
  const quote = String.fromCharCode(34);
  return `${quote}${text.split(quote).join(quote + quote)}${quote}`;
}

export async function GET(request: NextRequest) {
  if (!isLeadAdminAuthorized(request)) {
    return NextResponse.json({ error: 'Not found.' }, { status: 404 });
  }

  const leads = (await listLeads()).sort((a, b) =>
    b.timestamp.localeCompare(a.timestamp)
  );
  const columns = [
    'id', 'timestamp', 'name', 'email', 'phone', 'city', 'country', 'intent',
    'projectInterest', 'preferredContactMethod', 'preferredCallTime',
    'budgetRange', 'formType', 'source', 'landingPage', 'utmSource',
    'utmMedium', 'utmCampaign', 'referrer', 'consentGiven', 'status',
    'notificationStatus', 'siteVisitDate', 'siteVisitAlternateDate',
    'siteVisitPickupLocation', 'siteVisitVisitors', 'message',
  ];
  const rows = leads.map((lead) => [
    lead.id, lead.timestamp, lead.name, lead.email, lead.phone, lead.city,
    lead.country, lead.intent, lead.projectInterest, lead.preferredContactMethod,
    lead.preferredCallTime, lead.budgetRange, lead.formType, lead.source,
    lead.landingPage, lead.utmSource, lead.utmMedium, lead.utmCampaign,
    lead.referrer, lead.consentGiven, lead.status, lead.notification.status,
    lead.siteVisitDate, lead.siteVisitAlternateDate,
    lead.siteVisitPickupLocation, lead.siteVisitVisitors, lead.message,
  ]);
  const csv = [columns, ...rows].map((row) => row.map(csvCell).join(',')).join('\r\n');

  return new NextResponse(csv, {
    headers: {
      'Cache-Control': 'no-store',
      'Content-Disposition': `attachment; filename=mother-properties-leads-${new Date().toISOString().slice(0, 10)}.csv`,
      'Content-Type': 'text/csv; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
