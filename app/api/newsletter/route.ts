import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Notify the team of a new subscriber.
      await resend.emails.send({
        from: "DreamDo Website <noreply@dreamdo.africa>",
        to: process.env.CONTACT_EMAIL || "hello@dreamdo.africa",
        subject: `[Newsletter] New subscriber: ${email}`,
        html: `<p>New newsletter subscriber: <strong>${email}</strong></p>`,
      });
    } else {
      console.log("[Newsletter Signup]", { email });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
