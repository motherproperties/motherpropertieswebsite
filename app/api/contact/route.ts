import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Email configuration
const RECIPIENT_EMAIL = 'motherpropertiesblr@gmail.com';
const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interestedIn: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate the data
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using fetch to a third-party service
    // For now, we'll use Resend (free tier available) or a simple in-memory approach
    
    // Option 1: Using a simple approach - store in memory or log
    // In production, integrate with SendGrid, AWS SES, Resend, or similar
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ...body,
    });

    // Prepare email content
    const emailSubject = `New Contact Inquiry from ${body.name}`;
    const emailBody = `
Dear Mother Properties Team,

You have received a new contact inquiry:

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}
Interested In: ${body.interestedIn}

Message:
${body.message}

---
This inquiry was submitted via the website contact form.
Please respond to: ${body.email}
    `.trim();

    // Store submission in a simple way (in production, use a database)
    // For now, log it to console and would be captured in server logs
    
    // Send confirmation email to user
    await sendEmailNotification(
      body.email,
      'Thank you for contacting Mother Properties',
      generateUserConfirmationEmail(body.name)
    );

    // Send notification to admin
    await sendEmailNotification(
      RECIPIENT_EMAIL,
      emailSubject,
      emailBody
    );

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully. We will get back to you soon!' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}

async function sendEmailNotification(
  to: string,
  subject: string,
  body: string
): Promise<void> {
  try {
    const result = await resend.emails.send({
      from: 'Mother Properties <onboarding@resend.dev>',
      to,
      subject,
      text: body,
      html: body.replace(/\n/g, '<br>'),
    });
    console.log(`Email sent successfully to ${to}:`, result);
  } catch (error) {
    console.error(`Failed to send email to ${to}:`, error);
    throw error;
  }
}

function generateUserConfirmationEmail(name: string): string {
  return `
Dear ${name},

Thank you for reaching out to Mother Properties! We have received your inquiry and will get back to you shortly.

Our team typically responds within 24-48 business hours.

In the meantime, feel free to explore our website to learn more about our projects:
- Coffee Prince: https://www.motherproperties.net/coffeeprince
- About Us: https://www.motherproperties.net/about
- All Projects: https://www.motherproperties.net/projects

Best regards,
Mother Properties Team
${'+91 98450 42789 | +91 90350 51133'}
motherpropertiesblr@gmail.com
  `.trim();
}
