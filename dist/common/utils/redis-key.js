"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revokedSessionKey = void 0;
const revokedSessionKey = (sid) => `auth:revoked:sid:${sid}`;
exports.revokedSessionKey = revokedSessionKey;
//# sourceMappingURL=redis-key.js.map