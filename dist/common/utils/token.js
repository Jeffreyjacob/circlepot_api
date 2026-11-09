"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashToken = hashToken;
exports.generateToken = generateToken;
const crypto_1 = require("crypto");
function hashToken(raw) {
    return (0, crypto_1.createHash)("sha256").update(raw).digest("hex");
}
function generateToken(bytes = 32) {
    const raw = (0, crypto_1.randomBytes)(bytes).toString("base64url");
    return { raw, hash: hashToken(raw) };
}
//# sourceMappingURL=token.js.map