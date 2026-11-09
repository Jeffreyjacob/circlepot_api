"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordChangedTemplate = passwordChangedTemplate;
const brand_1 = require("./brand");
const layout_1 = require("./layout");
function passwordChangedTemplate(params) {
    const html = (0, layout_1.renderLayout)({
        preheader: "Your Circlepot password was just changed.",
        heading: "Your password was changed",
        bodyHtml: `
      <p style="margin:0 0 8px 0;">Hi ${(0, layout_1.escapeHtml)(params.name)},</p>
      <p style="margin:0 0 16px 0;">The password on your ${brand_1.brand.name} account was just changed, and you've been signed out on all devices.</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 16px 0;">
        <tr><td style="background:${brand_1.brand.tint};border-radius:8px;padding:12px 16px;font-size:14px;color:${brand_1.brand.ink};">
          <strong>Wasn't you?</strong> Use "Forgot password" on the login page right away to take your account back.
        </td></tr>
      </table>
      <p style="margin:0;color:${brand_1.brand.muted};font-size:14px;">If you made this change, no action is needed.</p>`,
    });
    const text = [
        `Hi ${params.name},`,
        "",
        `The password on your ${brand_1.brand.name} account was just changed, and you've been signed out on all devices.`,
        "",
        `If this wasn't you, use "Forgot password" on the login page right away.`,
        "If you made this change, no action is needed.",
    ].join("\n");
    return { subject: "Your password was changed", html, text };
}
//# sourceMappingURL=password-changed.template.js.map