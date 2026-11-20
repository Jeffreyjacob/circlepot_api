"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNaira = formatNaira;
function formatNaira(kobo) {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
    }).format(kobo / 1000);
}
//# sourceMappingURL=money.js.map