export const downloadPlatforms = [
  "windows",
  "macos",
  "linux",
  "linux-deb",
] as const;

export type DownloadPlatform = (typeof downloadPlatforms)[number];

export type ReleaseAsset = {
  name: string;
  browser_download_url: string;
};

type PlatformSignals = {
  userAgentDataPlatform?: string;
  platform?: string;
  userAgent?: string;
  maxTouchPoints?: number;
};

const assetPatterns: Record<DownloadPlatform, RegExp> = {
  windows: /^OpsWarden_[0-9]+(?:\.[0-9]+){2}_x64-setup\.exe$/,
  macos: /^OpsWarden_[0-9]+(?:\.[0-9]+){2}_aarch64\.dmg$/,
  linux: /^OpsWarden_[0-9]+(?:\.[0-9]+){2}_amd64\.AppImage$/,
  "linux-deb": /^OpsWarden_[0-9]+(?:\.[0-9]+){2}_amd64\.deb$/,
};

export function isDownloadPlatform(value: string): value is DownloadPlatform {
  return downloadPlatforms.includes(value as DownloadPlatform);
}

export function detectDownloadPlatform({
  userAgentDataPlatform = "",
  platform = "",
  userAgent = "",
  maxTouchPoints = 0,
}: PlatformSignals): DownloadPlatform | null {
  const agent = userAgent.toLowerCase();
  const reportedPlatform = `${userAgentDataPlatform} ${platform}`.toLowerCase();

  if (
    /android|iphone|ipad|ipod|cros|chrome os/.test(
      `${agent} ${reportedPlatform}`,
    ) ||
    (reportedPlatform.includes("mac") && maxTouchPoints > 1)
  ) {
    return null;
  }

  if (
    reportedPlatform.includes("linux") &&
    /arm|aarch64/.test(reportedPlatform)
  ) {
    return null;
  }

  if (reportedPlatform.includes("win")) return "windows";
  if (reportedPlatform.includes("mac")) return "macos";
  if (reportedPlatform.includes("linux")) return "linux";

  return null;
}

export function selectReleaseAsset(
  platform: DownloadPlatform,
  assets: ReleaseAsset[],
): ReleaseAsset | null {
  const asset = assets.find(({ name }) => assetPatterns[platform].test(name));
  if (!asset) return null;

  try {
    const url = new URL(asset.browser_download_url);
    const expectedPrefix = "/opswarden-git/opswarden/releases/download/";

    if (
      url.protocol !== "https:" ||
      url.hostname !== "github.com" ||
      !url.pathname.startsWith(expectedPrefix)
    ) {
      return null;
    }
  } catch {
    return null;
  }

  return asset;
}
