import assert from "node:assert/strict";
import test from "node:test";
import {
  detectDownloadPlatform,
  isDownloadPlatform,
  selectReleaseAsset,
} from "../src/lib/downloads.ts";

const releaseAssets = [
  {
    name: "OpsWarden_1.2.3_x64-setup.exe",
    browser_download_url:
      "https://github.com/opswarden-git/opswarden/releases/download/v1.2.3/OpsWarden_1.2.3_x64-setup.exe",
  },
  {
    name: "OpsWarden_1.2.3_aarch64.dmg",
    browser_download_url:
      "https://github.com/opswarden-git/opswarden/releases/download/v1.2.3/OpsWarden_1.2.3_aarch64.dmg",
  },
  {
    name: "OpsWarden_1.2.3_amd64.AppImage",
    browser_download_url:
      "https://github.com/opswarden-git/opswarden/releases/download/v1.2.3/OpsWarden_1.2.3_amd64.AppImage",
  },
  {
    name: "OpsWarden_1.2.3_amd64.deb",
    browser_download_url:
      "https://github.com/opswarden-git/opswarden/releases/download/v1.2.3/OpsWarden_1.2.3_amd64.deb",
  },
];

test("detects supported desktop operating systems", () => {
  assert.equal(
    detectDownloadPlatform({ userAgentDataPlatform: "Windows" }),
    "windows",
  );
  assert.equal(detectDownloadPlatform({ platform: "MacIntel" }), "macos");
  assert.equal(detectDownloadPlatform({ platform: "Linux x86_64" }), "linux");
});

test("does not offer a desktop package to mobile or unknown devices", () => {
  assert.equal(
    detectDownloadPlatform({
      platform: "Linux armv8l",
      userAgent: "Mozilla/5.0 (Linux; Android 15)",
    }),
    null,
  );
  assert.equal(
    detectDownloadPlatform({ platform: "MacIntel", maxTouchPoints: 5 }),
    null,
  );
  assert.equal(
    detectDownloadPlatform({
      userAgentDataPlatform: "Chrome OS",
      platform: "Linux x86_64",
    }),
    null,
  );
  assert.equal(detectDownloadPlatform({ platform: "Linux aarch64" }), null);
});

test("accepts only known download routes", () => {
  assert.equal(isDownloadPlatform("windows"), true);
  assert.equal(isDownloadPlatform("linux-deb"), true);
  assert.equal(isDownloadPlatform("android"), false);
});

test("selects the expected latest-release asset for each platform", () => {
  assert.equal(
    selectReleaseAsset("windows", releaseAssets)?.name,
    releaseAssets[0].name,
  );
  assert.equal(
    selectReleaseAsset("macos", releaseAssets)?.name,
    releaseAssets[1].name,
  );
  assert.equal(
    selectReleaseAsset("linux", releaseAssets)?.name,
    releaseAssets[2].name,
  );
  assert.equal(
    selectReleaseAsset("linux-deb", releaseAssets)?.name,
    releaseAssets[3].name,
  );
});

test("rejects unexpected names and download origins", () => {
  assert.equal(
    selectReleaseAsset("windows", [
      {
        name: "OpsWarden-latest.exe",
        browser_download_url: "https://example.com/OpsWarden-latest.exe",
      },
    ]),
    null,
  );
  assert.equal(
    selectReleaseAsset("windows", [
      {
        name: "OpsWarden_1.2.3_x64-setup.exe",
        browser_download_url:
          "https://example.com/opswarden-git/opswarden/releases/download/v1.2.3/OpsWarden_1.2.3_x64-setup.exe",
      },
    ]),
    null,
  );
});
