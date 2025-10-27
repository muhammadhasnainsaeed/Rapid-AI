# Rapid-AI

Full-stack AI utility app (client + server) that provides a collection of AI-powered features such as image generation, background removal, object removal, resume review, article generation and more. This repository contains two top-level folders: `client/` (frontend) and `server/` (backend).

## Why Rapid-AI

- Quick, opinionated set of AI tools you can run locally or deploy.
- Useful for prototyping AI features (image editing, text generation, resume analysis).
- Structured so you can reuse the backend APIs from other clients (mobile, CLI).

## Repo layout

- `client/` – React + Vite frontend. Contains UI pages and components that call the server APIs.
- `server/` – Node.js (ES module) backend with Express routes and AI controller logic.
- `server/api/` – server entry point used when deploying (Vercel serverless function config).
- `server/config/` – database, cloudinary, multer and other configuration helpers.

## Quickstart (local)

Prerequisites:

- Node.js (v18+ recommended)
- npm or yarn

1. Clone the repo

```bash
git clone https://github.com/muhammadhasnainsaeed/Rapid-AI.git
cd Rapid-AI
```

2. Server setup

```bash
cd server
npm install
# Create a .env file (see the Env section below)
npm run dev
```

Server defaults (from `server/package.json`):

- `npm run dev` → runs `nodemon api/server.js`
- `npm start` → runs `node api/server.js`

3. Client setup

Open a new terminal window/tab:

```bash
cd client
npm install
npm run dev
```

4. Open the app

- Frontend (Vite) will print the dev URL, usually `http://localhost:5173`.
- Backend server will print its port (see `server/api/server.js`).

## Environment variables (templates)

Create a `server/.env` file with the keys below (do NOT commit secrets):

```properties
# Database
DATABASE_URL=postgresql://<user>:<pass>@<host>/<db>?sslmode=require

# Clerk (auth)
CLERK_PUBLISHABLE_KEY=pk_xxx
CLERK_SECRET_KEY=sk_xxx

# Google Gemini / OpenAI (or whichever model key)
GEMINI_API_KEY=your_gemini_or_openai_key

# ClipDrop (image generation/background removal)
CLIP_DROP_API_KEY=your_clipdrop_key

# Cloudinary (image storage)
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

Set the same variables on your hosting platform (Vercel/Render) rather than relying on a local .env.

## API summary (high level)

The server exposes endpoints under `/api/ai/*` and `/api/user/*` for authenticated actions. Example endpoints (check `server/routes/` for exact paths):

- `POST /api/ai/generate-image` – generate image from prompt
- `POST /api/ai/remove-image-background` – upload image and remove background
- `POST /api/ai/review-resume` – upload PDF resume and receive review
- `POST /api/user/toggle-like-creation` – like/unlike published creations
- `GET /api/user/get-published-creations` – list community creations

All protected endpoints expect an Authorization header with a Clerk token (frontend uses `getToken()` from `@clerk/clerk-react`).

## Common issues & quick fixes

- "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream"

  - When sending FormData from the frontend, make sure you pass the FormData instance itself to axios (not an object containing it). Do not set the `Content-Type` header manually; let the browser set the correct multipart boundary.

- `pdf-parse` import / usage errors
  - If you see `does not provide an export named 'default'` or `parsePdf is not a function` or `Class constructor PDFParse cannot be invoked without 'new'`, use the package as follows in an ES module project:

```js
import pdfParse from "pdf-parse";
// then
const data = await pdfParse(buffer);
```

- ClipDrop `402 Payment Required`

  - This indicates account credits or payment required for the API key. Confirm your ClipDrop plan and API key in the provider dashboard.

- Double API calls in React dev

  - React.StrictMode mounts components twice in development. Add guards in `useEffect` (check `isLoaded`/`isSignedIn` from Clerk, or use a ref to prevent duplicate calls), or remove StrictMode (not recommended).

- `argument handler must be a function` when mounting routes
  - Ensure your route imports point to actual functions (named exports) and that you pass functions to `router.get(...)` / `router.post(...)`. Example:

```js
import * as aiController from "../controllers/aiController.js";
router.post("/generate-article", aiController.generateArticle);
```

## Deploying to Vercel (serverless)

- This repo contains a `server/vercel.json` that uses the `@vercel/node` builder for `api/server.js`.
- On Vercel, add the environment variables via the Project Settings → Environment Variables.
- Note: if you keep `builds` in `vercel.json`, Vercel Project Build Settings are ignored. Remove `builds` if you prefer to manage builds via the dashboard.

## Troubleshooting deployment

- If deployments succeed but functions return runtime errors, check Vercel's Function logs (Functions → Select deployment → Logs).
- Make sure any file-system usage (reading a local upload path) is compatible with serverless functions — ephemeral filesystem paths are available, but persistency isn't.

## Testing / Verification

- Use the frontend forms to exercise server endpoints; inspect network requests in devtools to ensure tokens and form bodies are correct.
- For server-only tests, you can use curl or a small script to send requests with an Authorization header.

## Contributing

- Feel free to open issues or PRs. Follow file structure and keep environment secrets out of commits.

## License

This project is provided as-is. Add a license file if you want to open source it officially.

---

If you'd like, I can also:

- add a `README` inside `client/` and `server/` with service-specific run steps,
- create a `.env.example` file (without secrets) to help onboarding.

If you want those, tell me which one to create next and I'll add it.
