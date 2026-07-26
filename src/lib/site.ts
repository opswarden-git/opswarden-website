const appUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/+$/, "") || null;

const wikiAssets =
  "https://raw.githubusercontent.com/wiki/opswarden-git/opswarden/assets";

export const site = {
  appUrl,
  github: "https://github.com/opswarden-git/opswarden",
  websiteGithub: "https://github.com/opswarden-git/opswarden-website",
  operations: "https://github.com/opswarden-git/opswarden-ops",
  docs: "https://opswarden-git.github.io/opswarden/",
  releases: "https://github.com/opswarden-git/opswarden/releases/latest",
  license: "https://github.com/opswarden-git/opswarden/blob/main/LICENSE",
  screenshots: {
    incidents: `${wikiAssets}/readme/incidents.png`,
    releases: `${wikiAssets}/readme/releases.png`,
    teams: `${wikiAssets}/readme/teams.png`,
  },
} as const;

export function appLink(path: string) {
  return appUrl ? `${appUrl}${path}` : site.github;
}
