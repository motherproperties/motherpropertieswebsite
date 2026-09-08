import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { promises as fs } from 'fs';
import path from 'path';
import {
  createLead,
  escapeHtml,
  extractUTMParams,
  isAllowedOrigin,
  isHoneypotFilled,
  isRateLimited,
  isValidEmail,
  isValidFutureDate,
  isValidPhone,
} from '../leads';

const testDirectory = path.join(process.cwd(), '.data', 'test-leads');
const submissionId = '40aa4888-4465-4b55-b85c-bf4e978bd552';

beforeAll(async () => {
  process.env.LEAD_STORAGE = 'file';
  process.env.LEAD_LOCAL_DIR = testDirectory;
  await fs.rm(testDirectory, { recursive: true, force: true });
});

afterAll(async () => {
  await fs.rm(testDirectory, { recursive: true, force: true });
  delete process.env.LEAD_LOCAL_DIR;
  delete process.env.LEAD_STORAGE;
});

describe('lead validation', () => {
  it('validates email and phone formats', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidPhone('+919845042789')).toBe(true);
    expect(isValidPhone('123')).toBe(false);
  });

  it('detects honeypot values and escapes HTML', () => {
    expect(isHoneypotFilled('')).toBe(false);
    expect(isHoneypotFilled('bot-input')).toBe(true);
    expect(escapeHtml('<b>A & B</b>')).toBe('&lt;b&gt;A &amp; B&lt;/b&gt;');
  });

  it('extracts attribution parameters', () => {
    const utms = extractUTMParams(
      'utm_source=google&utm_medium=cpc&utm_campaign=coffee_launch'
    );
    expect(utms).toMatchObject({
      utmSource: 'google',
      utmMedium: 'cpc',
      utmCampaign: 'coffee_launch',
    });
  });

  it('enforces request origin and rate limits', () => {
    expect(isAllowedOrigin('https://www.motherproperties.net', 'https://www.motherproperties.net/api/contact')).toBe(true);
    expect(isAllowedOrigin('https://attacker.example', 'https://www.motherproperties.net/api/contact')).toBe(false);
    const identifier = 'test-rate-limit-id';
    for (let index = 0; index < 5; index += 1) expect(isRateLimited(identifier)).toBe(false);
    expect(isRateLimited(identifier)).toBe(true);
  });

  it('validates future calendar dates', () => {
    expect(isValidFutureDate('not-a-date')).toBe(false);
    const future = new Date();
    future.setDate(future.getDate() + 2);
    expect(isValidFutureDate(future.toISOString().slice(0, 10))).toBe(true);
  });
});

describe('lead persistence', () => {
  const input = {
    submissionId,
    name: 'John Doe <script>',
    email: 'John.Doe@Example.com',
    phone: '+919845042789',
    city: 'Bangalore',
    country: 'India',
    intent: 'farmland_ownership' as const,
    source: 'website',
    landingPage: '/contact/',
    formType: 'contact' as const,
    consentGiven: true,
    message: 'Interested in a managed farmland plot',
  };

  it('persists a sanitized lead', async () => {
    const result = await createLead(input);
    expect(result.created).toBe(true);
    expect(result.lead.id).toBe(submissionId);
    expect(result.lead.name).toBe('John Doe');
    expect(result.lead.email).toBe('john.doe@example.com');
    expect(result.lead.notification.status).toBe('pending');
    await expect(fs.access(path.join(testDirectory, `${submissionId}.json`))).resolves.toBeUndefined();
  });

  it('returns the existing lead for an idempotent retry', async () => {
    const result = await createLead({ ...input, name: 'Changed Name' });
    expect(result.created).toBe(false);
    expect(result.lead.name).toBe('John Doe');
  });
});
