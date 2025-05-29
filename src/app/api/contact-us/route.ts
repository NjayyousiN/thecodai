import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    // Validate input
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailToOwner = {
      from: `Contact Form <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Contact Form Submission from ${firstName + lastName}`,
      text: `Name: ${
        firstName + lastName
      }\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${
        firstName + lastName
      }</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    };

    const mailToClient = {
      from: `"THECODAI" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting us!",
      text: `Hi ${
        firstName + lastName
      },\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nMoshtriat`,
    };
    // Send email
    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(mailToClient);

    return NextResponse.json({
      message: "Email sent successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email", status: 500 });
  }
}
