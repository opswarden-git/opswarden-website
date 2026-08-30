import Image from "next/image";
import { Download } from "lucide-react";
import type { DownloadPlatform } from "@/lib/downloads";

type PlatformIconProps = {
  platform: DownloadPlatform | null;
  className?: string;
};

export function PlatformIcon({
  platform,
  className = "size-4",
}: PlatformIconProps) {
  if (platform === "windows") {
    return (
      <Image
        src="/assets/platforms/windows-white-icon.webp"
        alt=""
        width={16}
        height={16}
        unoptimized
        className={`${className} object-contain`}
      />
    );
  }

  if (platform === "macos") {
    return (
      <Image
        src="/assets/platforms/Apple_logo_white.svg.webp"
        alt=""
        width={16}
        height={16}
        unoptimized
        className={`${className} object-contain`}
      />
    );
  }

  if (platform === "linux") {
    return (
      <Image
        src="/assets/platforms/tux-bw.svg.webp"
        alt=""
        width={16}
        height={16}
        unoptimized
        className={`${className} object-contain`}
      />
    );
  }

  if (platform === "linux-deb") {
    return (
      <Image
        src="/assets/platforms/debian-symbolic.svg.webp"
        alt=""
        width={16}
        height={16}
        unoptimized
        className={`${className} object-contain`}
      />
    );
  }

  return <Download aria-hidden="true" className={className} />;
}
