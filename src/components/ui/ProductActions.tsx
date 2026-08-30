"use client";

import Link from "next/link";
import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { detectDownloadPlatform, type DownloadPlatform } from "@/lib/downloads";
import { site } from "@/lib/site";

type ProductActionsProps = {
  centered?: boolean;
};

const downloadOptions: Array<{
  platform: DownloadPlatform;
  label: string;
  detail: string;
  href: string;
}> = [
  {
    platform: "windows",
    label: "Windows",
    detail: "64-bit · EXE",
    href: site.downloads.windows,
  },
  {
    platform: "macos",
    label: "macOS",
    detail: "Apple Silicon · DMG",
    href: site.downloads.macos,
  },
  {
    platform: "linux",
    label: "Linux",
    detail: "64-bit · AppImage",
    href: site.downloads.linux,
  },
  {
    platform: "linux-deb",
    label: "Debian / Ubuntu",
    detail: "64-bit · DEB",
    href: site.downloads.linuxDeb,
  },
];

function detectedLabel(platform: DownloadPlatform | null) {
  if (platform === "windows") return "Download for Windows";
  if (platform === "macos") return "Download macOS · Apple Silicon";
  if (platform === "linux" || platform === "linux-deb") {
    return "Download for Linux";
  }
  return "Download OpsWarden";
}

function detectedHref(platform: DownloadPlatform | null) {
  return (
    downloadOptions.find((option) => option.platform === platform)?.href ??
    site.releases
  );
}

function subscribeToPlatform() {
  return () => undefined;
}

function getBrowserPlatform() {
  const browserNavigator = navigator as Navigator & {
    userAgentData?: { platform?: string };
  };

  return detectDownloadPlatform({
    userAgentDataPlatform: browserNavigator.userAgentData?.platform,
    platform: browserNavigator.platform,
    userAgent: browserNavigator.userAgent,
    maxTouchPoints: browserNavigator.maxTouchPoints,
  });
}

export function ProductActions({ centered = false }: ProductActionsProps) {
  const platform = useSyncExternalStore(
    subscribeToPlatform,
    getBrowserPlatform,
    () => null,
  );
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function closeOnOutsideClick(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className={`flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
      <div ref={containerRef} className="relative inline-flex">
        <Link
          href={detectedHref(platform)}
          className="inline-flex h-10 min-w-48 items-center justify-center gap-2 rounded-l-full bg-gold px-5 text-sm font-bold text-bg transition-colors hover:bg-gold-hover"
        >
          <PlatformIcon platform={platform} className="size-4" />
          {detectedLabel(platform)}
        </Link>
        <button
          ref={triggerRef}
          type="button"
          aria-label="Choose another operating system"
          aria-expanded={open}
          aria-controls={menuId}
          className="inline-flex size-10 items-center justify-center rounded-r-full border-l border-bg/25 bg-gold text-bg transition-colors hover:bg-gold-hover"
          onClick={() => setOpen((current) => !current)}
        >
          <ChevronDown
            aria-hidden="true"
            className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open ? (
          <div
            id={menuId}
            className="absolute top-12 left-0 z-30 w-[min(18rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-white/10 bg-panel-strong p-2 text-left shadow-2xl"
          >
            <ul>
              {downloadOptions.map((option) => (
                <li key={option.platform}>
                  <Link
                    href={option.href}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-text transition-colors hover:bg-white/[0.06]"
                    onClick={() => setOpen(false)}
                  >
                    <PlatformIcon
                      platform={option.platform}
                      className="size-5 shrink-0 text-white"
                    />
                    <span className="min-w-0 flex-1">
                      <strong className="block text-sm font-semibold">
                        {option.label}
                      </strong>
                      <span className="mt-0.5 block text-xs text-muted">
                        {option.detail}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-1 border-t border-white/10 pt-1">
              <Link
                href={site.releases}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-text transition-colors hover:bg-white/[0.06]"
                onClick={() => setOpen(false)}
              >
                Release notes and checksums
                <ExternalLink
                  aria-hidden="true"
                  className="size-4 text-muted"
                />
              </Link>
            </div>
          </div>
        ) : null}
      </div>
      <Link
        href={site.github}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-bg/25 px-5 text-sm font-semibold text-text backdrop-blur-sm transition-colors hover:bg-white/[0.07]"
      >
        <GitHubIcon className="size-4" />
        View on GitHub
      </Link>
    </div>
  );
}
