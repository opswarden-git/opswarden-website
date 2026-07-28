<div align="center">
  <img src="https://raw.githubusercontent.com/wiki/opswarden-git/opswarden/assets/opswarden-ops/heroicon.png" alt="OpsWarden" width="120" />
  <h1>OpsWarden - Website</h1>
  <p>
    <a href="https://opswarden.dev">Landing page</a> ·
    <a href="https://github.com/opswarden-git/opswarden">App</a> ·
    <a href="https://opswarden-git.github.io/opswarden/">Documentation</a> ·
    <a href="https://github.com/opswarden-git/opswarden-ops">Deployment</a>
  </p>
  <p>
    <a href="https://github.com/opswarden-git/opswarden-website/actions/workflows/ci.yml"><img src="https://github.com/opswarden-git/opswarden-website/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
    <img src="https://img.shields.io/github/v/release/opswarden-git/opswarden-website?style=flat" alt="Release" />
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue?style=flat" alt="License: Apache 2.0" /></a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel" />
  </p>
</div>

![OpsWarden marketing website hero](https://raw.githubusercontent.com/wiki/opswarden-git/opswarden/assets/opswarden-website/landing-hero.png)

## About

This repository is the public home of OpsWarden, an open-source incident response and
release coordination platform. The website presents the product and connects visitors
to the desktop application, source code and technical documentation while remaining
independent from the core platform.

It deliberately contains no authentication, business logic or infrastructure code.
Those responsibilities belong to the [core platform](https://github.com/opswarden-git/opswarden)
and [deployment repository](https://github.com/opswarden-git/opswarden-ops).

## Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/wiki/opswarden-git/opswarden/assets/opswarden-website/landing-product.png" alt="OpsWarden release coordination section" width="70%" />
  &nbsp;
  <img src="https://raw.githubusercontent.com/wiki/opswarden-git/opswarden/assets/opswarden-website/landing-mobile.png" alt="OpsWarden website on mobile" width="22.5%" />
</p>

## Visual language

| Token      | Value     | Purpose                   |
| ---------- | --------- | ------------------------- |
| Background | `#15161A` | Primary canvas            |
| Surface    | `#1B1C20` | Cards and navigation      |
| Elevated   | `#212228` | Raised controls           |
| Text       | `#E7E7EA` | Primary content           |
| Muted      | `#989BA1` | Supporting content        |
| Accent     | `#FBC02D` | Brand and primary actions |

The interface uses **Inter** for editorial content and **JetBrains Mono** for technical
labels.

## Technology

The website is a statically rendered Next.js application. Its small client surface keeps
the landing page fast, accessible and straightforward to maintain.

The same toolchain covers implementation and delivery: TypeScript protects content and
component contracts, Tailwind CSS consumes the visual tokens, and GitHub Actions checks
every change before Vercel serves it.

|                                                                                            | Technology         | Responsibility                                 |
| ------------------------------------------------------------------------------------------ | ------------------ | ---------------------------------------------- |
| <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" width="34" />               | **Next.js 16**     | Static rendering, metadata and asset delivery  |
| <img src="https://skillicons.dev/icons?i=react" alt="React" width="34" />                  | **React 19**       | Component composition and interactive behavior |
| <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" width="34" />                | **TypeScript 6**   | Typed content, configuration and UI contracts  |
| <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" width="34" />        | **Tailwind CSS 4** | Responsive layout and visual styling           |
| <img src="https://skillicons.dev/icons?i=vercel" alt="Vercel" width="34" />                | **Vercel**         | Preview and production hosting                 |
| <img src="https://skillicons.dev/icons?i=githubactions" alt="GitHub Actions" width="34" /> | **GitHub Actions** | Quality gates and continuous integration       |

## Development

Node.js 24 and npm are required.

```sh
npm ci
npm run dev
```

The development server starts on `http://localhost:3000`. The product actions target
`https://app.opswarden.dev`; set `NEXT_PUBLIC_APP_URL` to override that destination.

```sh
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
```

## Contributing

Work from a short-lived branch and keep changes focused on the public marketing surface.
Formatting, linting, type checks, tests and the production build must pass before a
squash merge into `main`.

## License

[Apache License 2.0](LICENSE)
