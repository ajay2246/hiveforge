import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // ensures Node runtime

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY in environment.");
      return NextResponse.json(
        { error: "Server email config missing (RESEND_API_KEY)." },
        { status: 500 }
      );
    }

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

    // Send email
    const { data, error } = await resend.emails.send({
      // NOTE: this often requires domain verification in Resend
      from: "HiveForge <onboarding@resend.dev>",
      to: ["ajaykancheti99@gmail.com"],
      subject: `📅 New Booking Request from ${name}`,
      replyTo: email,
      html: `
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
          ${message ? `<hr /><p><strong>Message:</strong><br/>${String(message).replace(/\n/g, "<br/>")}</p>` : ""}
          <hr />
          <p>Sent from <strong>HiveForge.dev</strong></p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: error.message || "Resend failed to send." },
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
