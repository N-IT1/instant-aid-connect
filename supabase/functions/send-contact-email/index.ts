import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, organization, message }: ContactFormData = await req.json();

    console.log("Received contact form submission:", { name, email, organization });

    // Send notification email to INSTANT HELP team
    const notificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "INSTANT HELP <onboarding@resend.dev>",
        to: ["aguelebright300@gmail.com"],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #1c2536; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">INSTANT HELP</h1>
              <p style="color: #e55a3c; margin: 5px 0 0 0;">New Contact Form Submission</p>
            </div>
            
            <div style="padding: 30px; background-color: #f9f9f9;">
              <h2 style="color: #1c2536; margin-top: 0;">Contact Details</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Name:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Email:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                ${organization ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Organization:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${organization}</td>
                </tr>
                ` : ''}
              </table>
              
              <h3 style="color: #1c2536; margin-top: 25px;">Message</h3>
              <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #e55a3c;">
                <p style="color: #333; margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div style="padding: 20px; text-align: center; color: #666; font-size: 12px;">
              <p>This email was sent from the INSTANT HELP website contact form.</p>
            </div>
          </div>
        `,
      }),
    });

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.text();
      console.error("Failed to send notification email:", errorData);
      throw new Error(`Failed to send notification email: ${errorData}`);
    }

    console.log("Notification email sent successfully");

    // Send confirmation email to the person who submitted the form
    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "INSTANT HELP <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for contacting INSTANT HELP",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #1c2536; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">INSTANT HELP</h1>
              <p style="color: #e55a3c; margin: 5px 0 0 0;">Emergency Response & Humanitarian Aid</p>
            </div>
            
            <div style="padding: 30px; background-color: #f9f9f9;">
              <h2 style="color: #1c2536; margin-top: 0;">Thank you for reaching out, ${name}!</h2>
              
              <p style="color: #333; line-height: 1.6;">
                We have received your message and truly appreciate your interest in INSTANT HELP. 
                Our team is committed to revolutionizing emergency response and humanitarian aid, 
                and we're excited to connect with people who share our vision.
              </p>
              
              <p style="color: #333; line-height: 1.6;">
                We will review your message and get back to you as soon as possible. In the meantime, 
                feel free to learn more about our mission and how we're using technology to save lives.
              </p>
              
              <div style="margin-top: 30px; padding: 20px; background-color: white; border-radius: 5px; text-align: center;">
                <p style="color: #666; margin: 0 0 10px 0; font-size: 14px;">Together, we can make emergency response instant.</p>
                <p style="color: #e55a3c; font-weight: bold; margin: 0;">Every second matters.</p>
              </div>
            </div>
            
            <div style="padding: 20px; text-align: center; color: #666; font-size: 12px;">
              <p>© ${new Date().getFullYear()} INSTANT HELP. All rights reserved.</p>
              <p>Saving lives through technology, community, and instant response.</p>
            </div>
          </div>
        `,
      }),
    });

    if (!confirmationResponse.ok) {
      const errorData = await confirmationResponse.text();
      console.error("Failed to send confirmation email:", errorData);
      // Don't throw here - notification was sent successfully
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);