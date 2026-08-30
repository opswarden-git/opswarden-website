import { NextResponse } from "next/server";
import {
  isDownloadPlatform,
  selectReleaseAsset,
  type ReleaseAsset,
} from "@/lib/downloads";
import { site } from "@/lib/site";

type LatestRelease = {
  assets?: ReleaseAsset[];
};

export async function GET(
  _request: Request,
  context: { params: Promise<{ platform: string }> },
) {
  const { platform } = await context.params;

  if (!isDownloadPlatform(platform)) {
    return NextResponse.redirect(site.releases, 307);
  }

  try {
    const response = await fetch(site.latestReleaseApi, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "opswarden-website",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return NextResponse.redirect(site.releases, 307);
    }

    const release = (await response.json()) as LatestRelease;
    const asset = selectReleaseAsset(platform, release.assets ?? []);

    return NextResponse.redirect(
      asset?.browser_download_url ?? site.releases,
      307,
    );
  } catch {
    return NextResponse.redirect(site.releases, 307);
  }
}
