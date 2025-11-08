import { inngest } from "@/lib/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, topic, email, message } = await req.json();

        if (!name || !topic || !email || !message) {
            return NextResponse
                .json(
                    { message: "All fields are required" },
                    { status: 400 }
                );
        }

        await inngest.send({
            name: 'app/email.sent',
            data: {
                name,
                email,
                topic,
                message
            }
        })

        return NextResponse.json(
            { success: true },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}