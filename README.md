# Circlepot API

Backend for **Circlepot**, a rotating savings (ajo/esusu) platform where a group pools money each cycle and one member collects the pot. Built with NestJS, PostgreSQL, Redis, BullMQ and Paystack.

> **Status:** in development. Runs in Paystack **test mode** only. No real money moves.

## How it works

A host creates a group with a pot, a number of seats, a start and end date, and a payment frequency.

- Cycle length = main duration / seats
- Each member owes pot / seats per cycle, split into installments by payment frequency
- When a cycle is fully funded, that cycle's recipient is paid automatically
- A percentage of each payout is held until the group ends, and it shrinks as payout position gets later (earlier collectors have paid in less, so they hold more)
- Only the host can set the payout order, and it locks after the first payout

Example: 600,000 pot, 6 seats, 6 months, weekly payments gives 1-month cycles, 100,000 owed per member per cycle, and roughly 4 installments each.

## What this project focuses on

- [ ] Idempotent Paystack webhook handling (signature check, event dedupe)
- [ ] Concurrency-safe writes (row locks, transactions) for seat claims and order changes
- [ ] Append-only ledger with money stored as integer kobo
- [ ] Payout state machine with retries and exponential backoff
- [ ] Scheduled cycle processing and email reminders (BullMQ)
- [ ] Redis-cached cycle board (who paid, target, remaining)
- [ ] Rate limiting, audit log, signed invite links
- [ ] Integration tests for duplicate webhooks and concurrent requests

## Tech stack

NestJS, TypeScript, PostgreSQL, Prisma, Redis, BullMQ, Paystack, Swagger (OpenAPI), Jest.

## Modules

| Module | Responsibility |
| --- | --- |
| auth / users | Sign up, login, profile, payout account verification |
| groups | Create groups, invites, seats, payout order rules |
| payments | Paystack checkout and webhook ingestion |
| ledger | Immutable money movement records |
| cycles | Cycle schedule, funding status, payouts, held amounts |
| notifications | Email reminders and receipts |

## Getting started

```bash
git clone https://github.com/<you>/circlepot-api.git
cd circlepot-api
npm install
cp .env.example .env      # fill in the values below
npx prisma migrate dev
npm run start:dev
```

Requires Node 20+, PostgreSQL and Redis.

## Environment variables

| Name | Description |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis connection string |
| `JWT_SECRET` | Secret for signing access tokens |
| `PAYSTACK_SECRET_KEY` | Paystack **test** secret key |
| `APP_URL` | Public URL of this API |
| `FRONTEND_URL` | URL of the web app (for CORS and links) |

Never commit `.env`.

## Testing

```bash
npm run test
npm run test:e2e
```

## API docs

Swagger UI at `/docs` when the server is running.

## Roadmap

See the checklist above. Planned for later: strike system, random payout draw, activity feed.

## Disclaimer

Portfolio project running in test mode. Not a licensed financial service. Holding real pooled funds is regulated and would need legal and compliance work first.

## Related

- Frontend: `circlepot-web`
