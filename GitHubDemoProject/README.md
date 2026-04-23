# Aviation Demo — GitHub Copilot Certification Course

A small full-stack app used as a teaching project for GitHub Copilot. It
intentionally has a mixed stack so students can practice Copilot prompts in
both a .NET backend and a React frontend.

- **Backend**: ASP.NET Core Web API on **.NET 10**
- **Frontend**: React 19 + Vite 8 + TypeScript + Tailwind v4
- **Data**: in-memory (no database, no migrations, nothing to provision)

If you only want to run the demo prompts, skip to
[GitHub Copilot demo prompts](#github-copilot-demo-prompts) at the bottom.

---

## Repository layout

```
CursorDemo/
├── src/
│   ├── backend/    .NET 10 Web API (AviationApi + test project)
│   └── frontend/   React 19 SPA (Vite + Tailwind)
└── stories/        Copilot demo scripts (user stories, bugs, tasks)
```

---

## Prerequisites

Install these once, regardless of which side you work on. You'll want both
if you ever run the full app end-to-end.

| Tool        | Version        | Check             | Download                                              |
|-------------|----------------|-------------------|-------------------------------------------------------|
| .NET SDK    | **10.0** or newer | `dotnet --version` | <https://dotnet.microsoft.com/download>                |
| Node.js     | **20 LTS** or newer | `node --version`   | <https://nodejs.org/>                                  |
| Git         | any            | `git --version`    | <https://git-scm.com/>                                 |

A terminal that understands standard Unix-style shell syntax (Git Bash,
WSL, PowerShell 7, or macOS/Linux Terminal) is assumed for the commands
below.

---

## Quick start — run the full app

You need two terminals. The frontend talks to the backend over HTTP, so
the backend must be started first (or at least before you try to load a
page).

### Terminal 1 — backend

```sh
cd src/backend/AviationApi
dotnet run
```

The API starts on **<http://localhost:1903>**. Opening that URL in a
browser redirects to the Swagger UI at `/swagger`.

### Terminal 2 — frontend

```sh
cd src/frontend
npm install        # first time only
npm run frontend
```

The Vite dev server starts on **<http://localhost:5173>**. Open it in
a browser — you should see a list of planes loaded from the backend.

---

## Pick your path

- **I'm a frontend developer** — see [`src/frontend/README.md`](src/frontend/README.md).
  The short version: install Node 20+, `npm install`, `npm run frontend`.
  You still need the backend running; the first page load hits
  `http://localhost:1903`.
- **I'm a backend developer** — see [`src/backend/README.md`](src/backend/README.md).
  The short version: install .NET 10 SDK, `dotnet run` from
  `src/backend/AviationApi`. You don't need to touch the frontend unless
  you change API shapes.

---

## Troubleshooting

**`dotnet: command not found`** — .NET SDK isn't installed or isn't on
`PATH`. Install from the link above and restart your terminal.

**`npm: command not found`** — Node isn't installed or isn't on `PATH`.
Install from the link above and restart your terminal.

**Frontend loads but the page shows a network/CORS error** — the backend
isn't running. Start it in another terminal (see Terminal 1 above) and
reload. CORS is open (`AllowAll`) so origin configuration is not the
issue.

**`Port 1903 is already in use`** — another process has the backend port.
Stop the conflicting process, or change the port in
`src/backend/AviationApi/Properties/launchSettings.json` (remember to
update the frontend services if you do — the API URL is hardcoded there).

**`Port 5173 is already in use`** — Vite will offer you the next free
port; accept it, or stop the conflicting process.

**Backend says the app is unhealthy** — the `/health` check requires
a `CRUISING_ALTITUDE` environment variable. Set it before `dotnet run`
(e.g. `CRUISING_ALTITUDE=30000 dotnet run`). The API still serves
requests either way.

---

## GitHub Copilot demo prompts

The repository doubles as the course material for the Copilot
certification. The prompts below are intended to be run in VS Code with
the GitHub Copilot Chat extension enabled.

### Project description
`@workspace describe the solution structure.`

### Inline suggestions
Find the file for plane management:
`@workspace where in this project are planes managed?`

Open the file, copy and paste the text of [`stories/01.Story-for-inline.md`](stories/01.Story-for-inline.md)
and start coding the solution.

### Chat suggestions
Copy the story from [`stories/02.Stroy-for-chat.md`](stories/02.Stroy-for-chat.md)
into chat and start changing the solution.

### Fixing bugs
Open [`stories/01.Bug.md`](stories/01.Bug.md).
`@workspace how to run backend?`
Copy the bug text into a new chat and fix the bug.

### Create unit tests
Open `PlanesControllerTests.cs` and start typing — notice it generates
incorrect tests. Open `PlanesController.cs` in a second tab and start
typing — it now generates correct tests. Open `FlightsController.cs`:

`Create all the unit tests including edge cases for #selection. Use XUnit and FluentAssertions.`

Then set a repo-level instruction: *Use XUnit and FluentAssertions.* and
regenerate. Try another model. Use a file as an example:

`Generate a test class for #file:FlightsController.cs . Use the same coding style as test class #file:PlanesControllerTests.cs`

### Improve accessibility
`@workspace How do I run the frontend project?`
`@workspace Change the subtitle on the homepage to make it easier to read for people with bad eyesight. Show me the exact HTML that I need to change.`

### HTML editing
`@workspace Center the title and subtitle inside the banner. Tell me the exact HTML that I need to change.`
`@workspace Change the list of planes to a grid layout. Make sure that it is responsive for different screen sizes.`

### HTML — add elements
Show [`stories/01.Task-add-button.md`](stories/01.Task-add-button.md).

`@workspace Create a button component and route the button to the add new plane page`

- same style as `#file:PlaneList.tsx`
- text is "Add Plane"
- plus icon to the left of the text
- spacing top and bottom
- respects accessibility guidelines

Add the page:
`@workspace create a new empty page for adding a new plane and make it accessible via the /add-plane route.`
Style it:
`Style #selection to match the design of the #file:PlaneList.tsx component`

### Learning new technologies — CI/CD

Backend pipeline:
`@workspace Create a build pipeline for the backend application. The build pipeline should do the following: install dependencies, run the tests, build the backend project. The backend project is a .NET 10 project.`

Frontend pipeline:
`@workspace Create a build pipeline for the frontend application. The build pipeline should: install dependencies, run the Vitest tests, build the frontend project for production.`
