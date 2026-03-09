import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, organization, subject, message } = body;

    await resend.emails.send({
      from: 'Lucid Pharmatech Enquiry <onboarding@resend.dev>',
      to: 'vipulpatelras@gmail.com',
      replyTo: email,
      subject: `[Enquiry] ${subject || 'General'} — ${first_name} ${last_name}`,
      text: `
Name: ${first_name} ${last_name}
Email: ${email}
Organization: ${organization || 'Not provided'}
Topic: ${subject || 'Not selected'}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}