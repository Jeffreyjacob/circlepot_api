import { brand } from "./brand";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function button(label: string, url: string): string {
  return `
  <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0;">
    <tr><td style="background:${brand.primary};border-radius:8px;">
      <a href="${url}" style="display:inline-block;padding:12px 24px;font-family:${brand.font};font-size:16px;font-weight:600;color:#ffffff;text-decoration:none;">${escapeHtml(label)}</a>
    </td></tr>
  </table>`;
}

export function renderLayout(opts: {
  preheader: string;
  heading: string;
  bodyHtml: string;
}): string {
  return `<!doctype html>
<html lang="en">
<body style="margin:0;padding:0;background:${brand.background};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(opts.preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.background};padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border:1px solid ${brand.border};border-radius:12px;">
        <tr><td style="padding:24px 32px 0 32px;font-family:${brand.font};font-size:18px;font-weight:700;color:${brand.primary};">${brand.name}</td></tr>
        <tr><td style="padding:16px 32px 32px 32px;font-family:${brand.font};color:${brand.ink};font-size:16px;line-height:1.6;">
          <h1 style="margin:0 0 16px 0;font-size:22px;line-height:1.3;color:${brand.ink};">${escapeHtml(opts.heading)}</h1>
          ${opts.bodyHtml}
        </td></tr>
      </table>
      <p style="font-family:${brand.font};font-size:12px;color:${brand.muted};margin:16px 0 0 0;">You received this email because of activity on your ${brand.name} account.</p>
    </td></tr>
  </table>
</body></html>`;
}
