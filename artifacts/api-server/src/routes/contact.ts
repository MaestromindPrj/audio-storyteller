import { Router, type IRouter } from "express";
import { z } from "zod";
import { Resend } from "resend";
import { logger } from "../lib/logger.js";

const router: IRouter = Router();

const ContactSchema = z.object({
  fullName: z.string().min(2),
  companyName: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(6),
  service: z.string().min(1),
  budget: z.string().min(1),
  timeline: z.string().min(1),
  description: z.string().min(10),
});

// Human-readable labels for dropdown values
const SERVICE_LABELS: Record<string, string> = {
  "music": "Music Production",
  "sound-design": "Sound Design",
  "dubbing": "Dubbing",
  "mixing": "Mixing & Mastering",
  "dialogue": "Dialogue Editing",
  "podcast": "Podcast Production",
  "audiobook": "Audiobook Production",
  "ott": "OTT Audio Post",
  "video-production": "Complete Video Production",
  "ai-filmmaking": "AI Film Making",
  "training": "Training Program",
  "multiple": "Multiple Services",
};

const BUDGET_LABELS: Record<string, string> = {
  "not-sure": "Not sure / Let's discuss",
  "1l-3l": "₹1L – ₹3L",
  "3l-5l": "₹3L – ₹5L",
  "5l-10l": "₹5L – ₹10L",
  "10l-plus": "₹10L+",
};

const TIMELINE_LABELS: Record<string, string> = {
  "asap": "ASAP",
  "1-2-weeks": "1–2 weeks",
  "1-month": "1 month",
  "3-months-plus": "3+ months",
};

function buildInquiryEmail(data: z.infer<typeof ContactSchema>): string {
  const service = SERVICE_LABELS[data.service] ?? data.service;
  const budget = BUDGET_LABELS[data.budget] ?? data.budget;
  const timeline = TIMELINE_LABELS[data.timeline] ?? data.timeline;
  const company = data.companyName ? `<b>Company:</b> ${data.companyName}<br>` : "";

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 0; }
        .wrapper { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
        .header { background: #1a6bb5; padding: 32px 40px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.3px; }
        .header p { color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 14px; }
        .badge { display: inline-block; background: rgba(255,255,255,0.15); color: #fff; border-radius: 20px; padding: 4px 14px; font-size: 12px; font-weight: 600; margin-top: 12px; letter-spacing: 0.5px; text-transform: uppercase; }
        .body { padding: 36px 40px; }
        .field { margin-bottom: 20px; }
        .label { font-size: 11px; font-weight: 700; color: #8b9ab0; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 4px; }
        .value { font-size: 15px; color: #1a202c; line-height: 1.5; }
        .divider { border: none; border-top: 1px solid #eef0f4; margin: 24px 0; }
        .description-box { background: #f8fafd; border-left: 4px solid #1a6bb5; border-radius: 0 8px 8px 0; padding: 16px 20px; }
        .description-box .value { color: #374151; }
        .footer { background: #f8fafd; padding: 20px 40px; text-align: center; border-top: 1px solid #eef0f4; }
        .footer p { color: #9aa5b4; font-size: 12px; margin: 0; }
        .cta { margin: 8px 0 0; }
        .cta a { color: #1a6bb5; font-weight: 600; text-decoration: none; font-size: 13px; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>New Client Inquiry</h1>
          <p>Received via staratlanticproductions.com</p>
          <span class="badge">${service}</span>
        </div>
        <div class="body">
          <div class="field">
            <div class="label">Full Name</div>
            <div class="value">${data.fullName}</div>
          </div>
          ${company ? `<div class="field"><div class="label">Company</div><div class="value">${data.companyName}</div></div>` : ""}
          <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${data.email}" style="color:#1a6bb5;text-decoration:none;">${data.email}</a></div>
          </div>
          <div class="field">
            <div class="label">Phone</div>
            <div class="value"><a href="tel:${data.phone}" style="color:#1a6bb5;text-decoration:none;">${data.phone}</a></div>
          </div>
          <hr class="divider" />
          <div class="field">
            <div class="label">Service Required</div>
            <div class="value">${service}</div>
          </div>
          <div class="field">
            <div class="label">Estimated Budget</div>
            <div class="value">${budget}</div>
          </div>
          <div class="field">
            <div class="label">Project Timeline</div>
            <div class="value">${timeline}</div>
          </div>
          <hr class="divider" />
          <div class="field">
            <div class="label">Project Description</div>
            <div class="description-box">
              <div class="value">${data.description.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
        </div>
        <div class="footer">
          <p>Reply directly to <b>${data.email}</b> to respond to this inquiry.</p>
          <p class="cta"><a href="mailto:${data.email}?subject=Re: Your inquiry to Star Atlantic Productions">Click here to reply →</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function buildAutoReplyEmail(name: string, service: string): string {
  const serviceLabel = SERVICE_LABELS[service] ?? service;
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 0; }
        .wrapper { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
        .header { background: #1a6bb5; padding: 40px; text-align: center; }
        .header h1 { color: #fff; margin: 0; font-size: 24px; font-weight: 700; }
        .body { padding: 36px 40px; color: #374151; line-height: 1.7; font-size: 15px; }
        .highlight { background: #f0f7ff; border-radius: 8px; padding: 16px 20px; margin: 20px 0; color: #1a6bb5; font-weight: 600; }
        .footer { background: #f8fafd; padding: 20px 40px; text-align: center; border-top: 1px solid #eef0f4; }
        .footer p { color: #9aa5b4; font-size: 12px; margin: 4px 0; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>We've received your inquiry!</h1>
        </div>
        <div class="body">
          <p>Hi <b>${name}</b>,</p>
          <p>Thank you for reaching out to <b>Star Atlantic Productions</b>. We've received your inquiry regarding <b>${serviceLabel}</b> and our team will get back to you within <b>24 hours</b>.</p>
          <div class="highlight">📩 Expect a reply at this email address within 24 hours.</div>
          <p>In the meantime, feel free to reach us directly:</p>
          <p>📞 <a href="tel:+919384839644" style="color:#1a6bb5;">+91 93848 39644</a><br>
          💬 <a href="https://wa.me/919384839644" style="color:#1a6bb5;">WhatsApp Us</a></p>
          <p>Warm regards,<br><b>The Star Atlantic Productions Team</b><br>Chennai, India</p>
        </div>
        <div class="footer">
          <p>Star Atlantic Productions · 27/49 Lake View Road, West Mambalam, Chennai 600033</p>
          <p>© 2025 Star Atlantic Productions. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

router.post("/contact", async (req, res) => {
  const result = ContactSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ success: false, error: "Invalid form data", details: result.error.issues });
    return;
  }

  const data = result.data;

  logger.info({ fullName: data.fullName, email: data.email, service: data.service }, "Contact inquiry received");

  const apiKey = process.env["RESEND_API_KEY"];

  if (!apiKey) {
    // Graceful degradation: log the inquiry but don't crash if Resend isn't configured
    logger.warn("RESEND_API_KEY is not set — email not sent. Set it to enable email delivery.");
    res.json({ success: true, message: "Inquiry received. We will get back to you within 24 hours." });
    return;
  }

  try {
    const resend = new Resend(apiKey);

    // Send inquiry notification to the studio
    await resend.emails.send({
      from: "Star Atlantic Website <noreply@staratlantic.com>",
      to: ["info@staratlantic.com"],
      replyTo: data.email,
      subject: `New Inquiry: ${SERVICE_LABELS[data.service] ?? data.service} — ${data.fullName}`,
      html: buildInquiryEmail(data),
    });

    // Send auto-reply confirmation to the client
    await resend.emails.send({
      from: "Star Atlantic Productions <info@staratlantic.com>",
      to: [data.email],
      subject: "We've received your inquiry — Star Atlantic Productions",
      html: buildAutoReplyEmail(data.fullName, data.service),
    });

    logger.info({ to: data.email }, "Contact emails sent successfully");
    res.json({ success: true, message: "Inquiry received. We will get back to you within 24 hours." });
  } catch (err) {
    logger.error({ err }, "Failed to send contact email");
    res.status(500).json({ success: false, error: "Failed to send your inquiry. Please email us directly at info@staratlantic.com." });
  }
});

export default router;
