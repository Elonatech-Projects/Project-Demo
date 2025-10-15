// src/app/api/contact/route.js

import nodemailer from 'nodemailer';
import { getDb } from '@/lib/mongodb';

export async function POST(req) {
  try {
    const body = await req.json();

    // Basic validation — add more rules as needed
    const required = ['surname', 'otherNames', 'email', 'number', 'company'];
    const missing = required.filter((k) => !body[k] || String(body[k]).trim() === '');
    if (missing.length) {
      return new Response(JSON.stringify({ success: false, error: 'missing_fields', missing }), { status: 400 });
    }

    // Save to MongoDB (if configured)
    try {
      const db = await getDb(process.env.MONGODB_DB || undefined);
      const contacts = db.collection('contacts');
      await contacts.insertOne({ ...body, createdAt: new Date() });
    } catch (dbErr) {
      console.warn('Could not save to MongoDB:', dbErr.message || dbErr);
      // continue — email still attempted
    }

    // Configure transporter — prefer service or host/port
    const transporterOpts = {};
    if (process.env.EMAIL_SERVICE) {
      transporterOpts.service = process.env.EMAIL_SERVICE;
      transporterOpts.auth = { user: process.env.EMAIL_USERNAME, pass: process.env.EMAIL_PASSWORD };
    } else if (process.env.EMAIL_HOST) {
      transporterOpts.host = process.env.EMAIL_HOST;
      transporterOpts.port = process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT, 10) : 587;
      transporterOpts.secure = process.env.EMAIL_SECURE === 'true';
      transporterOpts.auth = { user: process.env.EMAIL_USERNAME, pass: process.env.EMAIL_PASSWORD };
    } else {
      // Fallback to direct (not recommended)
      transporterOpts.sendmail = true;
    }

    const transporter = nodemailer.createTransport(transporterOpts);

    const mailOptions = {
      from: process.env.EMAIL_USERNAME || 'no-reply@example.com',
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USERNAME,
      subject: `New contact submission from ${body.surname} ${body.otherNames}`,
      text: `You have a new contact submission:\n\n${JSON.stringify(body, null, 2)}`,
      html: `<pre style="white-space:pre-wrap">${JSON.stringify(body, null, 2)}</pre>`,
    };

    // Attempt to send
    try {
      await transporter.sendMail(mailOptions);
    } catch (mailErr) {
      console.error('Mail send error:', mailErr);
      // still return success if saved to DB — but inform client
      return new Response(JSON.stringify({ success: false, error: 'mail_error' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('API error:', err);
    return new Response(JSON.stringify({ success: false, error: 'server_error' }), { status: 500 });
  }
}
