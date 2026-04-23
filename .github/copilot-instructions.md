# Copilot Instructions

## Project Context

This is an Aviation demo application with a mixed stack:

- **Backend**: ASP.NET Core Web API on .NET 10 (C#)
- **Frontend**: React 19 + Vite 8 + TypeScript + Tailwind v4
- **Data**: In-memory storage (no database)

## Code Review

Use the **ultra-review** agent for all code reviews. This agent runs a multi-pass review pipeline with specialized hunters and an independent reproducer to verify findings:

- **Review Triage** — classifies changed files, scores importance, and produces a batch plan
- **Review Bug Hunter** — targets logic errors, off-by-one mistakes, null/undefined handling, wrong return values, missing error handling
- **Review Security Hunter** — targets injection, authN/authZ gaps, secret exposure, insecure defaults, missing input validation
- **Review Concurrency Hunter** — targets races, deadlocks, missing synchronization, unsafe shared state
- **Review Performance Hunter** — targets N+1 queries, unbounded loops, hot-path allocations, memory leaks, sync I/O in async paths
- **Review Contract Hunter** — targets API contract breakage, response-shape drift, wrong status codes, schema-migration compat breaks
- **Review Standards** — flags maintainability risks, dead code, missing test coverage, convention drift
- **Review Reproducer** — independently verifies all findings; drops unverifiable or contradicted ones
