import { describe, expect, it } from 'vitest';
import { validateBaseLead } from '../leadRequest';

const validPayload = {
  submissionId: '40aa4888-4465-4b55-b85c-bf4e978bd552',
  name: 'Test User',
  email: 'test@example.com',
  phone: '+919845042789',
  consent: true,
};

describe('validateBaseLead', () => {
  it('accepts a complete consented request', () => {
    expect(validateBaseLead(validPayload)).toBeNull();
  });

  it('requires explicit consent', () => {
    expect(validateBaseLead({ ...validPayload, consent: false })).toMatch(/Consent/);
  });

  it('requires a valid idempotency identifier', () => {
    expect(validateBaseLead({ ...validPayload, submissionId: 'invalid' })).toMatch(/identifier/);
  });

  it('rejects invalid contact details', () => {
    expect(validateBaseLead({ ...validPayload, email: 'bad-email' })).toMatch(/email/);
    expect(validateBaseLead({ ...validPayload, phone: '123' })).toMatch(/phone/);
  });
});
