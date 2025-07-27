import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
    try {
        const { name, email, topic, message } = await req.json();

        if (!name || !email || !topic || !message) {
            return NextResponse
                .json({ message: "All fields are required" }, { status: 400 });
        }

        //email to me
        await resend.emails.send({
            from: "Atishay Jain Portfolio <onboarding@resend.dev>",
            to: "atishayjain8807@gmail.com",
            subject: `New message from ${name}`,
            html: `
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Topic:</strong> ${topic}</p>
            <p><strong>Message:</strong> ${message}</p>
            `
        })

        //email to client
        await resend.emails.send({
            from: "Atishay Jain Portfolio <onboarding@resend.dev>",
            to: email,
            subject: "Thanks for reaching out!",
            html: `<p>Hi ${name},</p>
            <p>Thanks for contacting me. I’ll get back to you shortly!</p>`
        })

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
    }
}