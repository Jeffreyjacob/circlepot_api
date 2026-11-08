export type MailJob =
  | { template: "verify-email"; to: string; name: string; url: string }
  | { template: "reset-password"; to: string; name: string; url: string }
  | { template: "password-changed"; to: string; name: string };
