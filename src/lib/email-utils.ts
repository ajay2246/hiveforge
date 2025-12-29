/**
 * Email utility functions for sanitization and validation
 */

/**
 * Sanitizes a string to prevent XSS attacks in HTML emails
 */
export function sanitizeHtml(text: string): string {
  if (typeof text !== "string") return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates date is not in the past and not too far in the future (max 1 year)
 */
export function isValidBookingDate(dateString: string): { valid: boolean; error?: string } {
  if (!dateString) {
    return { valid: false, error: "Date is required" };
  }

  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

  if (isNaN(date.getTime())) {
    return { valid: false, error: "Invalid date format" };
  }

  if (date < today) {
    return { valid: false, error: "Date cannot be in the past" };
  }

  if (date > oneYearFromNow) {
    return { valid: false, error: "Date cannot be more than 1 year in the future" };
  }

  return { valid: true };
}

/**
 * Generates HTML email template for booking requests
 */
export function generateBookingEmailHtml(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  topic: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  message?: string;
}): string {
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
  } = data;

  // Sanitize all user inputs
  const safeName = sanitizeHtml(name);
  const safeEmail = sanitizeHtml(email);
  const safePhone = phone ? sanitizeHtml(phone) : "";
  const safeCompany = company ? sanitizeHtml(company) : "";
  const safeTopic = sanitizeHtml(topic || "N/A");
  const safeDate = sanitizeHtml(preferredDate);
  const safeTime = sanitizeHtml(preferredTime);
  const safeTimezone = sanitizeHtml(timezone || "N/A");
  const safeMessage = message ? sanitizeHtml(message).replace(/\n/g, "<br/>") : "";

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #f59e0b;">New Call Booking Request</h2>
      <div style="background: #fffaf0; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ""}
        ${safeCompany ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ""}
      </div>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
      <div>
        <p><strong>Topic:</strong> ${safeTopic}</p>
        <p><strong>Preferred Date:</strong> ${safeDate}</p>
        <p><strong>Preferred Time:</strong> ${safeTime}</p>
        <p><strong>Timezone:</strong> ${safeTimezone}</p>
      </div>
      ${
        safeMessage
          ? `<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
             <div>
               <p><strong>Message:</strong></p>
               <p style="white-space: pre-wrap;">${safeMessage}</p>
             </div>`
          : ""
      }
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
      <p style="color: #6b7280; font-size: 12px;">Sent from <strong>HiveForge.dev</strong></p>
    </div>
  `;
}

/**
 * Generates plain text email for booking requests
 */
export function generateBookingEmailText(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  topic: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  message?: string;
}): string {
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
  } = data;

  return `New booking request:
Name: ${name}
Email: ${email}
Phone: ${phone || ""}
Company: ${company || ""}
Topic: ${topic || ""}
Date: ${preferredDate}
Time: ${preferredTime}
Timezone: ${timezone || ""}
Message: ${message || ""}`;
}

