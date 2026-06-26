import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { parentName, childName, email, phone, preferredDate, program, message } = body;

    if (!parentName || !childName || !email || !phone || !program) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "DreamDo Website <noreply@dreamdo.africa>",
        to: process.env.CONTACT_EMAIL || "hello@dreamdo.africa",
        subject: `[Booking] ${parentName} — ${program}`,
        html: `
          <h2>New Booking Request</h2>
          <p><strong>Parent/Guardian:</strong> ${parentName}</p>
          <p><strong>Child's Name:</strong> ${childName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Program:</strong> ${program}</p>
          <p><strong>Preferred Start Date:</strong> ${preferredDate || "Flexible"}</p>
          <p><strong>Notes:</strong> ${message || "None"}</p>
        `,
      });
    } else {
      console.log("[Booking Form Submission]", { parentName, childName, email, phone, preferredDate, program, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
