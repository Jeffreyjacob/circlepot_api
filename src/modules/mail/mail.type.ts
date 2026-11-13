export type MailJob =
  | { template: "verify-email"; to: string; name: string; url: string }
  | { template: "reset-password"; to: string; name: string; url: string }
  | { template: "password-changed"; to: string; name: string }
  | {
      template: "group-invite";
      to: string;
      inviterName: string;
      groupName: string;
      potKobo: number;
      seats: number;
      frequency: string;
      url: string;
    };
