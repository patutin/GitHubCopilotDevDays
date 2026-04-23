# Aviation API — backend

ASP.NET Core Web API on **.NET 10**. Serves the planes/flights data
consumed by the frontend SPA. Data is kept in memory, so there is no
database to install or configure.

---

## For frontend developers — the 30-second version

If you just need the API running so the SPA works, this is all you need:

```sh
# 1. Install the .NET 10 SDK: https://dotnet.microsoft.com/download
# 2. From the repo root:
cd src/backend/AviationApi
dotnet run
```

Leave that terminal open. The API is now on <http://localhost:1903>,
Swagger on <http://localhost:1903/swagger>. You can stop reading here
and go back to the frontend guide.

---

## Prerequisites

- **.NET 10 SDK** — <https://dotnet.microsoft.com/download>.
  Verify with `dotnet --version`; you should see `10.x.y`.

No database, no message broker, no cloud credentials. You're done after
the SDK install.

---

## Project layout

```
src/backend/
├── AviationApi/              ← the web API (this is what you run)
│   ├── Controllers/          FlightsController.cs, PlanesController.cs
│   ├── Models/               Flight, Plane, Airfield
│   ├── Repositories/         In-memory data access
│   ├── Examples/             .http files you can fire from VS / Rider
│   ├── Properties/
│   │   └── launchSettings.json   port + launch URL live here
│   ├── Program.cs            startup, CORS, health, Swagger
│   ├── appsettings.json
│   └── AviationApi.csproj
├── AvationApi.Tests/         ← xUnit test project (see note below)
├── .config/
│   └── dotnet-tools.json     pins CSharpier as a local dotnet tool
└── AviationApi.sln
```

> ⚠ **Known typo**: the test project folder is `AvationApi.Tests`
> (missing an "i"), not `AviationApi.Tests`. This is intentional — not
> a path mistake on your side.

---

## Running the API

```sh
cd src/backend/AviationApi
dotnet run
```

- Listens on **<http://localhost:1903>** (set in
  `Properties/launchSettings.json`).
- Requests to `/` redirect to `/swagger`.
- Hot-reload: use `dotnet watch run` if you prefer rebuild on save.

### Endpoints quick reference

| Path            | What it does                              |
|-----------------|-------------------------------------------|
| `/swagger`      | Swagger UI — full API catalogue           |
| `/health`       | Health probe (see below)                  |
| `/planes`       | Plane CRUD — see `PlanesController.cs`    |
| `/flights`      | Flight queries — see `FlightsController.cs` |

The `AviationApi/Examples/` folder contains `.http` files
(`Planes.http`, `Flights.http`, `Healthcheck.http`) that you can execute
inline from VS Code (with the REST Client extension), Visual Studio, or
JetBrains Rider.

---

## CORS

`Program.cs` registers an **`AllowAll`** policy
(`AllowAnyOrigin`/`AllowAnyMethod`/`AllowAnyHeader`). The frontend at
`http://localhost:5173` works out of the box with no additional
configuration.

---

## Health check

`GET /health` checks one thing: whether the `CRUISING_ALTITUDE`
environment variable is set. It does **not** check a database (there
isn't one).

To get a green probe locally:

```sh
# bash / WSL / Git Bash
CRUISING_ALTITUDE=30000 dotnet run
```

```powershell
# PowerShell
$env:CRUISING_ALTITUDE = "30000"; dotnet run
```

The API serves normal requests regardless of this variable — it only
affects `/health`.

---

## Build

```sh
dotnet build
```

Artifacts land under `AviationApi/bin/`.

---

## Tests

```sh
dotnet test
```

- **Framework**: xUnit
- **Assertions**: FluentAssertions
- **Mocking**: NSubstitute (Moq also available)
- **Location**: `AvationApi.Tests/Controllers/`

Global `using` declarations for xUnit / FluentAssertions / NSubstitute
live in `AvationApi.Tests/Usings.cs`, so individual test files don't
need to import them.

---

## Formatting

The repo uses [CSharpier](https://csharpier.com/) pinned as a local
dotnet tool:

```sh
cd src/backend
dotnet tool restore        # first time only
dotnet csharpier .         # format the whole backend tree
```

---

## Tools and technologies

- **.NET 10** — target framework for both API and tests
- **Swashbuckle** — Swagger UI at `/swagger`
- **ASP.NET Core Health Checks** — `/health` endpoint
- **xUnit + FluentAssertions + NSubstitute** — test stack
- **CSharpier** — opinionated formatter, pinned as a local tool
