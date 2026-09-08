import { Resend } from 'resend';

export interface EmailMessage {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export interface EmailResult {
  sent: boolean;
  attempts: number;
  error?: string;
}

const wait = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export async function sendEmailWithRetry(
  message: EmailMessage,
  maxAttempts = 3
): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const fromName = process.env.RESEND_FROM_NAME || 'Mother Properties';

  if (!apiKey || !fromEmail) {
    return {
      sent: false,
      attempts: 0,
      error: 'Email service is not fully configured',
    };
  }

  const resend = new Resend(apiKey);
  let lastError = 'Unknown email delivery error';

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const result = await resend.emails.send({
        from: `${fromName} <${fromEmail}>`,
        ...message,
      });
      if (result.error) throw new Error(result.error.message);
      return { sent: true, attempts: attempt };
    } catch (error) {
      lastError = error instanceof Error ? error.message : 'Email delivery failed';
      if (attempt < maxAttempts) await wait(attempt * 250);
    }
  }

  return { sent: false, attempts: maxAttempts, error: lastError.slice(0, 500) };
}
