import { Resend } from "resend";
import React from "react";
import { render } from "@react-email/render";
import { supabase } from "@/utils/supabase";
import NewPostEmail from "@/app/api/templates/NewPostEmail";

export async function POST(request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error("RESEND_API_KEY is not set in .env");
            return Response.json({
                success: false,
                message: "Email service not configured",
            }, { status: 500 });
        }

        const resend = new Resend(apiKey);

        let body;
        try {
            body = await request.json();
        } catch {
            return Response.json({
                success: false,
                message: "Invalid or missing request body",
            }, { status: 400 });
        }

        const { title, excerpt, slug, created_at, category, read_time, content } = body;
        
        console.log("Sending publication:", { 
            title, 
            slug, 
            contentLength: content?.length,
            excerptLength: excerpt?.length 
        });

        if (!title || !slug) {
            return Response.json({
                success: false,
                message: "Missing required fields: title and slug",
            }, { status: 400 });
        }

        // Fetch all subscriber emails from Supabase
        const { data: subscribers, error: dbError } = await supabase
            .from("emails")
            .select("email");

        if (dbError) {
            console.error("Supabase error:", dbError.message);
            return Response.json({
                success: false,
                message: "Failed to fetch subscribers",
            }, { status: 500 });
        }

        if (!subscribers || subscribers.length === 0) {
            return Response.json({
                success: true,
                message: "No subscribers to notify",
            });
        }

        // Render the email template
        const emailHtml = await render(
            React.createElement(NewPostEmail, {
                title,
                excerpt,
                slug,
                created_at,
                category,
                read_time,
                content,
                // content: body.content, 
            })
        );

        // Extract email addresses
        const recipientEmails = subscribers.map((s) => s.email);

        // Send to all subscribers (batch via Resend)
        await resend.emails.send({
            from: "Theebayo Blog <blog@theebayo.name.ng>",
            to: recipientEmails,
            subject: `Adebayo just published a post: ${title}`,
            html: emailHtml,
        });

        return Response.json({
            success: true,
            message: `Email successfully sent to ${recipientEmails.length} subscriber(s)`,
        });

    } catch (err) {
        console.error("API Error:", err);
        return Response.json({
            success: false,
            message: "Server error: " + err.message,
        }, { status: 500 });
    }
}
