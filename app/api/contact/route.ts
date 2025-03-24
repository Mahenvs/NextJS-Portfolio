import { rateLimiter } from "@/utils/rateLimiter";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  const ip =
    req.headers.get("x-forwarded-for") || req.headers.get("remote-addr");

  if (!ip || !rateLimiter(ip)) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Too many requests. Please try again in 24 hours. Thank you for your patience.",
      },
      { status: 429 }
    );
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
