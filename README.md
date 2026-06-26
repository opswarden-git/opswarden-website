<p align="center">
  <img src="public/assets/heroicon.png" alt="OpsWarden" width="130" />
</p>

<h1 align="center">OpsWarden — Website</h1>

<p align="center">
  <a href="https://github.com/opswarden-git/opswarden-website/actions/workflows/ci.yml"><img src="https://github.com/opswarden-git/opswarden-website/actions/workflows/ci.yml/badge.svg?branch=main" alt="Website CI" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-F4C430?style=flat-square" alt="License: Apache 2.0" /></a>
  <img src="https://img.shields.io/badge/status-wip-2F2F2F?style=flat-square" alt="Status: wip" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Lucide-F56565?style=flat-square&logo=lucide&logoColor=white" alt="Lucide" />
</p>

---

- [Introduction](#introduction) — what this repo is
- [Scope](#scope) — what ships, and what deliberately does not
- [How it works](#how-it-works) — install and run locally
- [Architecture](#architecture) — single landing, where things live
- [Design](#design) — the shared OpsWarden visual language
- [Contributing](#contributing) — workflow
- Sibling repos: [`opswarden-app`](https://github.com/opswarden-git/opswarden) (product) and [`opswarden-ops`](https://github.com/opswarden-git/opswarden-ops) (infra)

## Introduction

**OpsWarden — Website** is the **public marketing surface** for OpsWarden: the
landing page that introduces the product (real-time **Incident** & **Release**
coordination with an **AI SRE** investigation agent) and routes visitors into the
application to **Log in** or **Sign Up**.

It is **separate from the product** (`opswarden-app`) and from the **cloud/ops
layer** (`opswarden-ops`), and **deliberately thin**: no business logic, no API,
no data. It renders, it explains, and it hands off to the app. All product
behavior lives server-side in `opswarden-app` (Rust/Axum, hexagonal); this repo
only displays and relays.

> Status: **work in progress**. The landing is a single scrollable page; copy and
> visuals are placeholders refined alongside the product.

## Scope

**Ships here**

- A single landing page (hero + `About` / `Install` / `Ressources` / `Community`
  sections reachable by anchor)
- A glass top bar (logo + `Log in` / `Sign Up`) and a glass footer
- The shared OpsWarden visual language: Inter type, gradient background, unified
  `.glass` surfaces, gold accent — no borders, no business logic

**Deliberately not here**

- Authentication, sessions, RBAC, incidents, releases, WebSockets &rarr; `opswarden-app`
- Kubernetes / Terraform / DOKS / Traefik deployment &rarr; `opswarden-ops`

> The site must never be a prerequisite to run or grade the product. It is the
> **front door**, not the building.

## How it works

### Installation

```bash
# 1. Clone
git clone https://github.com/opswarden-git/opswarden-website.git   # HTTPS
git clone git@github.com:opswarden-git/opswarden-website.git        # SSH
cd opswarden-website

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev -- -p 3002        # http://localhost:3002
```

> The `Log in` / `Sign Up` actions point at the application
> (`opswarden-app` client, expected on `http://localhost:4242`). Run the app
> alongside if you want those links to resolve locally.

### The project at a glance

```text
opswarden-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # root layout: Inter font, Header + Footer, gradient bg
│   │   ├── page.tsx         # single landing — hero + About/Install/Ressources/Community
│   │   ├── globals.css      # Tailwind v4 theme + .glass surface + page gradient
│   │   └── icon.png         # favicon
│   ├── components/
│   │   └── layout/
│   │       ├── Header.tsx   # glass top bar (logo + Log in / Sign Up)
│   │       └── Footer.tsx   # glass footer (Explore / Account / Connect)
│   └── lib/
│       └── utils.ts         # cn() helper (clsx + tailwind-merge)
├── public/assets/           # brand kit (hero icon, logos)
├── next.config.ts
├── package.json
└── README.md
```

### Build

```bash
npm run build                 # production build
npm run start                 # serve the build
npm run lint                  # ESLint
```

## Architecture

There is intentionally **no application architecture** here — the site is one
Next.js App Router route rendered statically.

```text
layout.tsx (Header + Footer + fonts + bg)  ->  page.tsx (hero + sections)
                                               |
                          anchors (#about / #install / #ressources / #community)
                                               |
                       Header / Footer  ->  hand-off to opswarden-app (Log in / Sign Up)
```

- **Where the page lives**: `src/app/page.tsx` (single landing, section anchors).
- **Where chrome lives**: `src/components/layout/` (`Header`, `Footer`).
- **Where the visual language lives**: `src/app/globals.css` (theme tokens,
  `.glass` surface, page gradient) — see [Design](#design).

## Design

The site shares OpsWarden's visual language so the marketing surface and the
product feel like one system:

- **Type**: Inter (display + body), via `next/font`.
- **Background**: a single subtle gradient applied globally — unified across the
  site and the app.
- **Surfaces**: one `.glass` material (translucent fill + `backdrop-blur`, no
  border) for the header, footer and panels — lightened, consistent chrome.
- **Accent**: a single gold tone; otherwise a restrained dark palette.

## Contributing

Trunk-based workflow: short-lived branches (`feat/`, `fix/`, `chore/`, `docs/`),
conventional commits, squash-merge into a protected `main`. Keep the site thin —
no business logic, no API calls; product behavior belongs in `opswarden-app`.
Before opening a PR: `npm run lint` and `npm run build` green.

## License

OpsWarden is distributed under the **Apache License 2.0**. See [LICENSE](LICENSE).
