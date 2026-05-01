# Apostol.dev

Marketing site for Jose Carlo Apostol — fullstack developer for Philippine businesses.

Built with Next.js 16 (App Router), Tailwind CSS v4, React 19, and Resend for the contact form.

## Local development

```bash
npm install
cp .env.example .env.local   # add your RESEND_API_KEY
npm run dev
```

Open http://localhost:3000.

The contact form works without `RESEND_API_KEY` — it logs to the server console and shows the success state. Add the key for real email delivery.

## Environment variables

| Var | Required | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | for email | Create one at https://resend.com |
| `CONTACT_FROM_EMAIL` | optional | Verified sender, e.g. `Apostol.dev <hello@apostol.dev>`. Defaults to Resend's test sender. |

## Deploy to Vercel

```bash
npm i -g vercel        # one-time
vercel                 # link & deploy preview
vercel --prod          # promote to production

vercel env add RESEND_API_KEY production
vercel env add CONTACT_FROM_EMAIL production
```

Then point your `apostol.dev` domain at the Vercel project in the dashboard.
