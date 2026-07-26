# OpsWarden website

The public marketing site for [OpsWarden](https://github.com/opswarden-git/opswarden),
an open-source incident response and release coordination platform.

The site is deliberately separate from the product client. It explains the product,
links to the canonical technical documentation and uses real product screenshots stored
in the OpsWarden wiki.

## Development

Requirements: Node.js 24 and npm.

```sh
npm ci
npm run dev
```

The development server starts on `http://localhost:3000`. Use another port when needed:

```sh
npm run dev -- --port 3002
```

## Configuration

Primary calls to action point to `https://app.opswarden.dev`. `NEXT_PUBLIC_APP_URL` can
override that destination for previews or another deployment; the site never falls back
to a local address.

```sh
NEXT_PUBLIC_APP_URL=https://app.example.com npm run build
```

## Quality checks

```sh
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
```

The content contract rejects placeholder links, local production destinations, retired
product claims and accidental removal of the three product screenshots. CI also audits
production dependencies before building the statically rendered site.

## Structure

```text
src/app/                 page, metadata, manifest and global design tokens
src/components/layout/   site header and footer
src/components/sections/ editorial product sections
src/lib/site.ts          canonical public URLs and deployment configuration
tests/                   marketing content contracts
```

Technical product documentation lives at
[opswarden-git.github.io/opswarden](https://opswarden-git.github.io/opswarden/).

## License

[Apache License 2.0](LICENSE)
