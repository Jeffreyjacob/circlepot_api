import { brand } from "./brand";
import { button, escapeHtml, renderLayout } from "./layout";

export function resetPasswordTemplate(params: { name: string; url: string }) {
  const html = renderLayout({
    preheader: "Use this link to choose a new Circlepot password.",
    heading: "Reset your password",
    bodyHtml: `
      <p style="margin:0 0 8px 0;">Hi ${escapeHtml(params.name)},</p>
      <p style="margin:0;">We received a request to reset the password on your ${brand.name} account. Choose a new one with the button below.</p>
      ${button("Choose a new password", params.url)}
      <p style="margin:0 0 12px 0;color:${brand.muted};font-size:14px;">This link expires in 30 minutes and can be used once.</p>
      <p style="margin:0 0 12px 0;color:${brand.muted};font-size:14px;">If the button doesn't work, copy this address into your browser:<br><span style="word-break:break-all;color:${brand.primary};">${escapeHtml(params.url)}</span></p>
      <p style="margin:0;color:${brand.muted};font-size:14px;">If you didn't ask for this, you can ignore this email. Your password won't change.</p>`,
  });

  const text = [
    `Hi ${params.name},`,
    "",
    `We received a request to reset the password on your ${brand.name} account.`,
    `Choose a new password: ${params.url}`,
    "",
    "This link expires in 30 minutes and can be used once.",
    "If you didn't ask for this, ignore this email. Your password won't change.",
  ].join("\n");

  return { subject: "Reset your password", html, text };
}
