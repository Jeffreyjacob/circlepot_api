import { brand } from "./brand";
import { button, escapeHtml, renderLayout } from "./layout";

export function verifyEmailTemplate(params: { name: string; url: string }) {
  const html = renderLayout({
    preheader: "Confirm your email to start using Circlepot.",
    heading: "Confirm your email",
    bodyHtml: `
      <p style="margin:0 0 8px 0;">Hi ${escapeHtml(params.name)},</p>
      <p style="margin:0;">Welcome to ${brand.name}. Please confirm your email address to finish setting up your account.</p>
      ${button("Confirm email", params.url)}
      <p style="margin:0;color:${brand.muted};font-size:14px;">This link expires in 24 hours. If you didn't create an account, you can ignore this email.</p>`,
  });
  const text = `Hi ${params.name},\n\nConfirm your email: ${params.url}\n\nThis link expires in 24 hours. If you didn't create an account, ignore this email.`;
  return { subject: "Confirm your email", html, text };
}
