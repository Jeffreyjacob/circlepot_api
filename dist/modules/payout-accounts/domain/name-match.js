"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.namesMatch = namesMatch;
function tokens(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
        .replace(/[^A-Z\s]/g, " ")
        .split(/\s+/)
        .filter(Boolean);
}
function namesMatch(profileName, accountName) {
    const account = new Set(tokens(accountName));
    const profile = tokens(profileName);
    return profile.length > 0 && profile.every((t) => account.has(t));
}
//# sourceMappingURL=name-match.js.map