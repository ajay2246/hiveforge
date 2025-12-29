import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  isValidEmail,
  isValidBookingDate,
  generateBookingEmailHtml,
  generateBookingEmailText,
} from "@/lib/email-utils";

export const runtime = "nodejs";

// Rate limiting: simple in-memory store (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per window

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

function getClientIP(req: Request): string {
  // Try to get IP from headers (works with Vercel, Cloudflare, etc.)
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIP = req.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  return "unknown";
}

export async function POST(req: Request) {
  try {
    // Rate limiting
    const clientIP = getClientIP(req);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Server email config missing (RESEND_API_KEY)." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();
    const {
      name,
      email,
      phone,
      company,
      topic,
      preferredDate,
      preferredTime,
      timezone,
      message,
    } = body ?? {};

    // Validation
    if (!name || !email || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Validate date
    const dateValidation = isValidBookingDate(preferredDate);
    if (!dateValidation.valid) {
      return NextResponse.json(
        { error: dateValidation.error || "Invalid date." },
        { status: 400 }
      );
    }

    // Validate name length
    if (name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { error: "Name must be between 2 and 100 characters." },
        { status: 400 }
      );
    }

    // Validate message length if provided
    if (message && message.length > 2000) {
      return NextResponse.json(
        { error: "Message must be less than 2000 characters." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.BOOKING_RECIPIENT_EMAIL || "ajaykancheti99@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "HiveForge <onboarding@resend.dev>";

    const emailData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim(),
      company: company?.trim(),
      topic: topic || "Website",
      preferredDate,
      preferredTime,
      timezone: timezone || "America/New_York",
      message: message?.trim(),
    };

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      subject: `📅 New Booking Request from ${emailData.name}`,
      replyTo: emailData.email,
      html: generateBookingEmailHtml(emailData),
      text: generateBookingEmailText(emailData),
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    console.log("Resend sent ok:", data);
    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Booking route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
