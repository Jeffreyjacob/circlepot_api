function tokens(value: string): string[] {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents
    .toUpperCase()
    .replace(/[^A-Z\s]/g, " ") // drop punctuation and digits
    .split(/\s+/)
    .filter(Boolean);
}

export function namesMatch(profileName: string, accountName: string): boolean {
  const account = new Set(tokens(accountName));
  const profile = tokens(profileName);
  return profile.length > 0 && profile.every((t) => account.has(t));
}
