import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface CatalogueDownloadRequest {
  name: string;
  email: string;
  phone: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body: CatalogueDownloadRequest = await request.json();

    // Validate input
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Log the request
    console.log('Catalogue Download Request:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      timestamp: new Date().toISOString(),
    });

    // Send email to Mother Properties
    try {
      await resend.emails.send({
        from: 'Coffee Prince Catalogue <onboarding@resend.dev>',
        to: 'motherpropertiesblr@gmail.com',
        subject: `New Catalogue Download Request - ${body.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e5631; margin-bottom: 20px;">New Catalogue Download Request</h2>
            
            <div style="background-color: #f8f5f0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${body.name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${body.phone}">${body.phone}</a></p>
              <p style="margin: 10px 0;"><strong>Request Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
            
            <p style="color: #666; font-size: 14px;">
              This is an automated notification. The user requested to download the Coffee Prince Catalogue.
              You may follow up with them for further information.
            </p>
          </div>
        `,
      });

      console.log(`Email sent to Mother Properties for user: ${body.name}`);
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Don't fail the request if email fails - the download already happened
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Catalogue download request received. Check your email for confirmation.',
        data: {
          name: body.name,
          email: body.email,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Catalogue download error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
