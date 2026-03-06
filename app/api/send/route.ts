import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const { data, error } = await resend.emails.send({
    from: 'Arrossetsgo <hola@arrossetsgo.com>',
    to: 'hola@arrossetsgo.com',
    replyTo: email,
    subject: `New booking request from ${name}`,
    html: `
      <h2>New booking request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
