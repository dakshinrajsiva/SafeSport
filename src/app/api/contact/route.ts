import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO = process.env.CONTACT_TO || 'info@safesportindia.com';
const FROM = process.env.CONTACT_FROM || 'SafeSport India <onboarding@resend.dev>';

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
  }

  let body: { name?: string; email?: string; organisation?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = (body.name || '').trim().slice(0, 200);
  const email = (body.email || '').trim().slice(0, 200);
  const organisation = (body.organisation || '').trim().slice(0, 200);
  const message = (body.message || '').trim().slice(0, 5000);

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject: `Safeguarding Inquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organisation: ${organisation || '—'}`,
      '',
      message || '(no message)',
    ].join('\n'),
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#1A1A1A">
        <div style="background:#004AAD;padding:24px;border-radius:12px 12px 0 0">
          <h2 style="color:#fff;margin:0;font-size:20px">New Safeguarding Inquiry</h2>
        </div>
        <div style="border:1px solid #e5e7eb;border-top:none;padding:24px;border-radius:0 0 12px 12px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:8px 0;color:#6b7280;width:120px">Name</td><td style="padding:8px 0;font-weight:bold">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Organisation</td><td style="padding:8px 0">${escapeHtml(organisation) || '—'}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
          <p style="white-space:pre-wrap;font-size:14px;line-height:1.6;margin:0">${escapeHtml(message) || '(no message)'}</p>
        </div>
        <p style="color:#9ca3af;font-size:12px;margin-top:16px">Sent from the safesportindia.com contact form. Reply to this email to respond directly to ${escapeHtml(name)}.</p>
      </div>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'We could not send your message right now. Please email info@safesportindia.com directly.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
