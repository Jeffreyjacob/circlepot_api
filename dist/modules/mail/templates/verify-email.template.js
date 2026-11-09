"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmailTemplate = verifyEmailTemplate;
const brand_1 = require("./brand");
const layout_1 = require("./layout");
function verifyEmailTemplate(params) {
    const html = (0, layout_1.renderLayout)({
        preheader: "Confirm your email to start using Circlepot.",
        heading: "Confirm your email",
        bodyHtml: `
      <p style="margin:0 0 8px 0;">Hi ${(0, layout_1.escapeHtml)(params.name)},</p>
      <p style="margin:0;">Welcome to ${brand_1.brand.name}. Please confirm your email address to finish setting up your account.</p>
      ${(0, layout_1.button)("Confirm email", params.url)}
      <p style="margin:0;color:${brand_1.brand.muted};font-size:14px;">This link expires in 24 hours. If you didn't create an account, you can ignore this email.</p>`,
    });
    const text = `Hi ${params.name},\n\nConfirm your email: ${params.url}\n\nThis link expires in 24 hours. If you didn't create an account, ignore this email.`;
    return { subject: "Confirm your email", html, text };
}
//# sourceMappingURL=verify-email.template.js.map