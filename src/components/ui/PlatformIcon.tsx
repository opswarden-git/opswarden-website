import { Apple, Download, Terminal } from "lucide-react";
import type { DownloadPlatform } from "@/lib/downloads";

type PlatformIconProps = {
  platform: DownloadPlatform | null;
  className?: string;
};

export function PlatformIcon({ platform, className }: PlatformIconProps) {
  if (platform === "windows") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3 4.7 10.6 3.6v7.7H3V4.7Zm8.7-1.3L21 2v9.3h-9.3V3.4ZM3 12.4h7.6v7.7L3 19v-6.6Zm8.7 0H21v9.3l-9.3-1.4v-7.9Z" />
      </svg>
    );
  }

  if (platform === "macos") {
    return <Apple aria-hidden="true" className={className} />;
  }

  if (platform === "linux" || platform === "linux-deb") {
    return <Terminal aria-hidden="true" className={className} />;
  }

  return <Download aria-hidden="true" className={className} />;
}
