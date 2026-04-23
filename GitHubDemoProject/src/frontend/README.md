# Aviation Frontend

React 19 single-page app, built with Vite 8, TypeScript, and Tailwind v4.
Consumes the Aviation API from `src/backend/`.

---

## For backend developers — the 30-second version

If you just want the UI running to test API changes:

```sh
# 1. Install Node 20 LTS or newer: https://nodejs.org/
# 2. Make sure the backend is already running (port 1903).
# 3. From the repo root:
cd src/frontend
npm install        # first time only — takes a minute
npm run frontend   # starts the Vite dev server
```

Open <http://localhost:5173>. The SPA fetches planes from
`http://localhost:1903`, so **the backend must be running first** or you
will see network errors on the page.

That's the whole story. The sections below are for when you need to
change something on the frontend.

---

## Prerequisites

- **Node.js 20 LTS or newer** — <https://nodejs.org/>.
  Verify with `node --version`; you want `v20.x` or higher. React 19,
  Vite 8, and TypeScript 6 need a modern Node.
- **npm** — ships with Node; verify with `npm --version`.

No global Node packages, no Playwright browsers to download, no `.env`
file to create.

---

## Install and run

```sh
cd src/frontend
npm install
npm run frontend
```

- **Dev server**: <http://localhost:5173> (Vite default).
- **Hot module reload**: edits to `.tsx` / `.css` files refresh the page
  automatically.

---

## Backend dependency

The API base URLs are **hardcoded** (not env-based) in the two service
classes:

| File                                 | Base URL                        |
|--------------------------------------|---------------------------------|
| `src/services/PlaneService.ts`       | `http://localhost:1903/planes/` |
| `src/services/FlightService.ts`      | `http://localhost:1903/flights` |

So running the frontend without the backend gives you a visible app
shell and network errors in the console. Start the backend first — see
[`../backend/README.md`](../backend/README.md).

---

## Project layout

```
src/frontend/
├── src/
│   ├── pages/           HomePage, PlaneDetail
│   ├── components/      Shared UI pieces
│   ├── services/        axios clients + models (Plane.ts, Flight.ts)
│   ├── test/setup.ts    Vitest + jest-dom setup
│   ├── App.tsx          React Router v7 route table
│   ├── main.tsx         entry — React root + TanStack Query client
│   └── index.css        global Tailwind layer
├── public/              static assets served as-is
├── index.html           Vite HTML entry
├── package.json
├── vite.config.ts       Vite + Vitest config
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── eslint.config.js     flat-config ESLint
```

State: TanStack React Query (v5). The QueryClient in `main.tsx` is
configured with `gcTime: 0`, `staleTime: 0`, `retry: false` — caching is
intentionally disabled for this demo so every navigation re-fetches.

---

## Build

```sh
npm run build        # dev mode, tsc + vite build → dist/
npm run build:prod   # production mode → dist/
npm run preview      # serve dist/ locally to sanity-check the prod build
```

---

## Tests

Tests run under **Vitest** with React Testing Library. There is no
Playwright and no E2E suite in this project.

```sh
npm test           # watch mode
npm run test:run   # one-shot (CI style)
npm run test:ui    # Vitest UI in the browser
```

- Place tests as `*.spec.tsx` next to the component under test.
- `src/test/setup.ts` wires up `@testing-library/jest-dom` matchers.
- See [`TESTING.md`](TESTING.md) for examples.

---

## Lint

```sh
npm run lint
```

Uses ESLint 10 flat config (`eslint.config.js`) with `typescript-eslint`,
`react-hooks`, and `react-refresh`. Runs with `--max-warnings 0`, so any
warning fails the command.

---

## Available scripts (cheat sheet)

| Command                | What it does                                         |
|------------------------|------------------------------------------------------|
| `npm run frontend`     | Start the Vite dev server on port 5173               |
| `npm run build`        | Type-check + build to `dist/`                        |
| `npm run build:prod`   | Type-check + production build to `dist/`             |
| `npm run preview`      | Serve the built `dist/` locally                      |
| `npm test`             | Vitest in watch mode                                 |
| `npm run test:run`     | Vitest, one-shot                                     |
| `npm run test:ui`      | Vitest browser UI                                    |
| `npm run lint`         | ESLint, zero-warning policy                          |

---

## Stack notes for .NET developers

A few quick analogies if this is your first time in a React/Vite repo:

- **`package.json`** is the `.csproj` equivalent. `dependencies` ship
  with the app; `devDependencies` are build-time only.
- **`npm install`** is `dotnet restore`. It reads `package.json` and
  `package-lock.json` and populates `node_modules/` (analogous to the
  NuGet cache but project-local).
- **`npm run frontend`** (which just runs `vite`) is the SPA equivalent
  of `dotnet run` — it starts a dev server with hot reload.
- **Tailwind v4** means styles are utility classes applied directly on
  JSX, e.g. `<div className="p-4 text-amber-500 font-bold">`. You rarely
  need to edit a CSS file — change `className` and save.
- **TypeScript** compiles to JavaScript but behaves much like strongly
  typed C#. Type errors are surfaced by `tsc` (part of `npm run build`)
  and by your editor.

---

## Tools and technologies

- **React 19** + **React Router 7** — UI and routing
- **Vite 8** — dev server and bundler
- **TypeScript 6** — type system
- **Tailwind CSS 4** (+ `@tailwindcss/forms`) — styling
- **axios** — HTTP client used by the service layer
- **TanStack Query 5** — server-state fetching
- **Vitest 4** + **React Testing Library** + **jsdom** — tests
- **ESLint 10** — linting with the new flat config
