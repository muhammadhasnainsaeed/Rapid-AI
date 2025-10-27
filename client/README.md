# Client (frontend) — Rapid-AI

This folder contains the React + Vite frontend application. The frontend consumes the server API endpoints (see `server/`) and requires a few environment variables to run locally.

Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

Quick start (development)

1. Install dependencies

```bash
cd client
npm install
```

2. Set environment variables

Create an `.env.local` (or `.env`) file in `client/` for any environment values you need. Commonly used variables:

```env
# Backend base URL used by axios (example)
VITE_BASE_URL=http://localhost:3000

# Clerk publishable key (if frontend handles Clerk initialization directly)
VITE_CLERK_PUBLISHABLE_KEY=pk_xxx
```

3. Run the dev server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Notes

- Do not hardcode secrets in the frontend. Only public keys (like Clerk publishable key) may appear in frontend env vars.
- The frontend uses `getToken()` from `@clerk/clerk-react` to call protected server endpoints – ensure Clerk is properly configured and the server has matching secret keys.

Debugging

- If FormData appears empty when submitting files, ensure you pass the FormData instance itself to axios and do NOT manually set `Content-Type` (let the browser set the multipart boundary).

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
