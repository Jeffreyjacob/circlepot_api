"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordTemplate = resetPasswordTemplate;
const brand_1 = require("./brand");
const layout_1 = require("./layout");
function resetPasswordTemplate(params) {
    const html = (0, layout_1.renderLayout)({
        preheader: "Use this link to choose a new Circlepot password.",
        heading: "Reset your password",
        bodyHtml: `
      <p style="margin:0 0 8px 0;">Hi ${(0, layout_1.escapeHtml)(params.name)},</p>
      <p style="margin:0;">We received a request to reset the password on your ${brand_1.brand.name} account. Choose a new one with the button below.</p>
      ${(0, layout_1.button)("Choose a new password", params.url)}
      <p style="margin:0 0 12px 0;color:${brand_1.brand.muted};font-size:14px;">This link expires in 30 minutes and can be used once.</p>
      <p style="margin:0 0 12px 0;color:${brand_1.brand.muted};font-size:14px;">If the button doesn't work, copy this address into your browser:<br><span style="word-break:break-all;color:${brand_1.brand.primary};">${(0, layout_1.escapeHtml)(params.url)}</span></p>
      <p style="margin:0;color:${brand_1.brand.muted};font-size:14px;">If you didn't ask for this, you can ignore this email. Your password won't change.</p>`,
    });
    const text = [
        `Hi ${params.name},`,
        "",
        `We received a request to reset the password on your ${brand_1.brand.name} account.`,
        `Choose a new password: ${params.url}`,
        "",
        "This link expires in 30 minutes and can be used once.",
        "If you didn't ask for this, ignore this email. Your password won't change.",
    ].join("\n");
    return { subject: "Reset your password", html, text };
}
//# sourceMappingURL=reset-password.js.map