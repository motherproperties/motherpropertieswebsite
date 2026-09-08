import { NextRequest, NextResponse } from 'next/server';
import { isLeadAdminAuthorized } from '@/lib/adminAuth';
import { listLeads, sanitize, updateLead } from '@/lib/leads';
import type { LeadStatus } from '@/lib/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const statuses: LeadStatus[] = [
  'new',
  'contacted',
  'qualified',
  'site_visit_proposed',
  'site_visit_confirmed',
  'visited',
  'nurture',
  'converted',
  'lost',
  'invalid',
];

export async function GET(request: NextRequest) {
  if (!isLeadAdminAuthorized(request)) {
    return NextResponse.json({ error: 'Not found.' }, { status: 404 });
  }
  const leads = (await listLeads()).sort((a, b) => b.timestamp.localeCompare(a.timestamp));
  const byStatus = Object.fromEntries(
    statuses.map((status) => [status, leads.filter((lead) => lead.status === status).length])
  );
  return NextResponse.json(
    {
      leads,
      summary: {
        total: leads.length,
        byStatus,
        siteVisits: leads.filter((lead) => lead.formType === 'site_visit').length,
        failedNotifications: leads.filter((lead) => lead.notification.status === 'failed').length,
      },
    },
    { headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } }
  );
}

export async function PATCH(request: NextRequest) {
  if (!isLeadAdminAuthorized(request)) {
    return NextResponse.json({ error: 'Not found.' }, { status: 404 });
  }
  const body = await request.json() as {
    id?: string;
    status?: LeadStatus;
    owner?: string;
    nextAction?: string;
    note?: string;
    channel?: string;
  };
  if (!body.id || !body.status || !statuses.includes(body.status)) {
    return NextResponse.json({ error: 'A valid lead and status are required.' }, { status: 400 });
  }
  const leads = await listLeads();
  const lead = leads.find((item) => item.id === body.id);
  if (!lead) return NextResponse.json({ error: 'Lead not found.' }, { status: 404 });

  lead.status = body.status;
  lead.owner = body.owner ? sanitize(body.owner, 120) : undefined;
  lead.nextAction = body.nextAction ? sanitize(body.nextAction, 300) : undefined;
  if (body.note?.trim()) {
    lead.contactHistory.push({
      timestamp: new Date().toISOString(),
      channel: sanitize(body.channel || 'admin', 40),
      note: sanitize(body.note, 1_000),
    });
  }
  await updateLead(lead);
  return NextResponse.json({ lead }, { headers: { 'Cache-Control': 'no-store' } });
}
