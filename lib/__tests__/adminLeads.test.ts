import { promises as fs } from 'fs';
import path from 'path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { NextRequest } from 'next/server';
import { GET, PATCH } from '@/app/api/admin/leads/route';
import { createLead } from '../leads';

const directory = path.join(process.cwd(), '.data', 'test-admin-leads');
const token = 'test-admin-token-with-sufficient-length';

beforeAll(async () => {
  process.env.LEAD_STORAGE = 'file';
  process.env.LEAD_LOCAL_DIR = directory;
  process.env.LEADS_EXPORT_TOKEN = token;
  await fs.rm(directory, { recursive: true, force: true });
  await createLead({
    submissionId: 'ee75b3fc-712b-45e8-a3c2-50ee20789ca1',
    name: 'Inbox Test',
    email: 'inbox@example.com',
    phone: '+919845042789',
    intent: 'site_visit',
    source: 'test',
    landingPage: '/site-visit/',
    formType: 'site_visit',
    consentGiven: true,
  });
});

afterAll(async () => {
  await fs.rm(directory, { recursive: true, force: true });
  delete process.env.LEAD_LOCAL_DIR;
  delete process.env.LEAD_STORAGE;
  delete process.env.LEADS_EXPORT_TOKEN;
});

describe('lead inbox API', () => {
  it('conceals the endpoint without authorization', async () => {
    const response = await GET(new NextRequest('http://localhost/api/admin/leads/'));
    expect(response.status).toBe(404);
  });

  it('returns funnel totals with a valid token', async () => {
    const response = await GET(new NextRequest('http://localhost/api/admin/leads/', {
      headers: { Authorization: `Bearer ${token}` },
    }));
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body.summary.total).toBe(1);
    expect(body.summary.siteVisits).toBe(1);
  });

  it('moves a lead through the status workflow', async () => {
    const response = await PATCH(new NextRequest('http://localhost/api/admin/leads/', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 'ee75b3fc-712b-45e8-a3c2-50ee20789ca1',
        status: 'qualified',
        note: 'Qualified in test',
      }),
    }));
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body.lead.status).toBe('qualified');
    expect(body.lead.contactHistory).toHaveLength(1);
  });
});
