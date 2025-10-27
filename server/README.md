# Server (backend) — Rapid-AI

This folder contains the Node.js Express backend that serves AI endpoints used by the client. The backend is written as ES modules and uses `server/api/server.js` as the entry point (also used by Vercel serverless config).

Prerequisites

- Node.js (v18+ recommended)
- npm

Quick start (development)

1. Install dependencies

```bash
cd server
npm install
```

2. Create `.env` from `.env.example`

```bash
cp .env.example .env
# Edit .env and fill real secrets
```

3. Run the server

```bash
npm run dev   # uses nodemon api/server.js
```

Production start

```bash
npm start     # node api/server.js
```

Environment variables

Fill values in `.env` (see `.env.example`). Important variables include:

- `DATABASE_URL` — Postgres connection (Neon or other)
- `CLERK_PUBLISHABLE_KEY` / `CLERK_SECRET_KEY` — Clerk auth
- `GEMINI_API_KEY` — AI model key (Gemini/OpenAI)
- `CLIP_DROP_API_KEY` — ClipDrop (image APIs)
- `CLOUDINARY_*` — Cloudinary for image hosting

API Endpoints (examples)

- `POST /api/ai/generate-image` — generate an image from a prompt
- `POST /api/ai/remove-image-background` — remove background from uploaded image
- `POST /api/ai/review-resume` — upload a PDF and get resume review
- `GET /api/user/get-published-creations` — get community creations

Deployment notes (Vercel)

- This repo includes `server/vercel.json` to build `api/server.js` as a serverless function.
- Add the same environment variables in the Vercel Project Settings (Environment Variables). Vercel does not read your local `.env`.
- If you keep the `builds` section in `vercel.json`, note that Vercel Project Build Settings will be ignored.

Common troubleshooting

- `pdf-parse` import errors: use `import pdfParse from 'pdf-parse'` and call `await pdfParse(buffer)`.
- `Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream`: when sending files, pass the FormData instance to axios and let the browser set `Content-Type`.
- 402 from ClipDrop: indicates billing/credits issue on provider side.
