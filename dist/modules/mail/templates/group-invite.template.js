"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupInviteTemplate = groupInviteTemplate;
const brand_1 = require("./brand");
const layout_1 = require("./layout");
const money_1 = require("../../../common/utils/money");
const FREQ = {
    DAILY: "daily",
    WEEKLY: "weekly",
    MONTHLY: "monthly",
};
function groupInviteTemplate(p) {
    const row = (label, value) => `<tr><td style="padding:6px 0;color:${brand_1.brand.muted};font-size:14px;">${label}</td>
         <td style="padding:6px 0;text-align:right;font-weight:600;font-size:14px;">${(0, layout_1.escapeHtml)(value)}</td></tr>`;
    const html = (0, layout_1.renderLayout)({
        preheader: `${p.inviterName} invited you to join ${p.groupName}.`,
        heading: "You've been invited to a contribution group",
        bodyHtml: `
      <p style="margin:0 0 16px 0;"><strong>${(0, layout_1.escapeHtml)(p.inviterName)}</strong> invited you to join <strong>${(0, layout_1.escapeHtml)(p.groupName)}</strong> on ${brand_1.brand.name}.</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand_1.brand.tint};border-radius:8px;padding:8px 16px;margin:0 0 8px 0;">
        ${row("Pot per cycle", (0, money_1.formatNaira)(p.potKobo))}
        ${row("Members", String(p.seats))}
        ${row("You pay each cycle", (0, money_1.formatNaira)(p.potKobo / p.seats))}
        ${row("Payment frequency", FREQ[p.frequency] ?? p.frequency)}
      </table>
      ${(0, layout_1.button)("View invite", p.url)}
      <p style="margin:0;color:${brand_1.brand.muted};font-size:14px;">Log in with this email address to see the full terms. Only join groups with people you know personally. The held payout is a limited safeguard, not a guarantee. This invite expires in 7 days.</p>`,
    });
    const text = [
        `${p.inviterName} invited you to join ${p.groupName} on ${brand_1.brand.name}.`,
        `Pot per cycle: ${(0, money_1.formatNaira)(p.potKobo)}, ${p.seats} members, ${FREQ[p.frequency] ?? p.frequency} payments.`,
        `View the invite: ${p.url}`,
        "Only join groups with people you know personally. The held payout is a limited safeguard, not a guarantee.",
    ].join("\n");
    return {
        subject: `${p.inviterName} invited you to ${p.groupName}`,
        html,
        text,
    };
}
//# sourceMappingURL=group-invite.template.js.map