import { timingSafeEqual } from 'crypto';
import type { NextRequest } from 'next/server';

export function isLeadAdminAuthorized(request: NextRequest): boolean {
  const expected = process.env.LEADS_EXPORT_TOKEN;
  const supplied = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  if (!expected || !supplied) return false;
  const expectedBytes = Buffer.from(expected);
  const suppliedBytes = Buffer.from(supplied);
  return expectedBytes.length === suppliedBytes.length
    && timingSafeEqual(expectedBytes, suppliedBytes);
}
