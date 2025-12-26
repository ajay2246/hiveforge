import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
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

    if (!name || !email || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6">
        <h2>New Call Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <hr />
        <p><strong>Topic:</strong> ${topic || "N/A"}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
        <p><strong>Timezone:</strong> ${timezone || "N/A"}</p>
        ${
          message
            ? `<hr /><p><strong>Message:</strong><br/>${String(message).replace(
                /\n/g,
                "<br/>"
              )}</p>`
            : ""
        }
        <hr />
        <p>Sent from <strong>HiveForge.dev</strong></p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "HiveForge <onboarding@resend.dev>",
      to: ["ajaykancheti99@gmail.com"],
      subject: `📅 New Booking Request from ${name}`,
      replyTo: email,
      html,
      text: `New booking request:
Name: ${name}
Email: ${email}
Phone: ${phone || ""}
Company: ${company || ""}
Topic: ${topic || ""}
Date: ${preferredDate}
Time: ${preferredTime}
Timezone: ${timezone || ""}
Message: ${message || ""}`,
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
