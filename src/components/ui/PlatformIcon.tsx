import Image from "next/image";
import { Download } from "lucide-react";
import type { DownloadPlatform } from "@/lib/downloads";

type PlatformIconProps = {
  platform: DownloadPlatform | null;
  className?: string;
  useAsset?: boolean;
};

export function PlatformIcon({
  platform,
  className = "size-4",
  useAsset = false,
}: PlatformIconProps) {
  if (useAsset && platform) {
    if (platform === "windows") {
      return (
        <Image
          src="/assets/platforms/windows-white-icon.webp"
          alt=""
          width={16}
          height={16}
          className={className}
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
          className={className}
        />
      );
    }
    if (platform === "linux" || platform === "linux-deb") {
      return (
        <Image
          src="/assets/platforms/linux.png"
          alt=""
          width={16}
          height={16}
          className={className}
        />
      );
    }
  }

  if (platform === "windows") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.8" />
      </svg>
    );
  }

  if (platform === "macos") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.63-.76 1.05-1.82.94-2.88-.91.04-2.01.61-2.66 1.37-.58.67-1.09 1.76-.95 2.8.91.07 1.94-.53 2.67-1.29" />
      </svg>
    );
  }

  if (platform === "linux") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.458 0c-3.17 0-5.741 2.57-5.741 5.74 0 .99.255 1.921.7 2.73C5.162 9.61 3.5 12.18 3.5 15.17c0 3.29 2.059 6.09 4.969 7.21C8.169 22.84 8 23.41 8 24h8c0-.59-.169-1.16-.469-1.62 2.91-1.12 4.969-3.92 4.969-7.21 0-2.99-1.662-5.56-3.917-6.7.445-.809.7-1.74.7-2.73 0-3.17-2.571-5.74-5.741-5.74zm-.042 1.78a3.96 3.96 0 0 1 3.96 3.96c0 .88-.29 1.7-.78 2.37a5.71 5.71 0 0 0-3.18-.95c-1.17 0-2.27.35-3.18.95a3.96 3.96 0 0 1-.78-2.37 3.96 3.96 0 0 1 3.96-3.96zM9.46 6.02a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm5.916 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z" />
      </svg>
    );
  }

  if (platform === "linux-deb") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.44 0c-4.48 0-8.1 2.52-9.67 6.13-1.07 2.45-1.13 5.34-.14 7.98 1.48 3.96 5.12 7.02 9.53 7.82.72.13 1.46.19 2.2.19 6.2 0 11.23-4.7 11.62-10.87C26.37 6.27 21.43.08 15.2.01c-.91-.01-1.84.07-2.76.01zm.09 1.83c.78.05 1.56-.02 2.33-.01 5.25.06 9.42 5.28 9.09 10.51-.33 5.23-4.59 9.21-9.83 9.21-.63 0-1.25-.05-1.86-.16-3.74-.68-6.83-3.27-8.08-6.64-.84-2.24-.79-4.69.12-6.77 1.33-3.06 4.4-5.2 8.23-5.2zm-6.2 5.34c-.81 1.76-.79 3.8.03 5.56.96 2.06 2.89 3.51 5.18 3.82.46.06.92.08 1.38.08 3.49 0 6.38-2.61 6.78-6.07.41-3.51-2.07-6.63-5.58-7.01-.52-.06-1.05-.05-1.57.01-2.73.34-4.99 1.94-6.22 3.61zm1.53.72c1.01-1.37 2.85-2.68 5.09-2.96.43-.05.86-.06 1.29-.01 2.88.31 4.92 2.87 4.58 5.75-.33 2.84-2.7 4.98-5.56 4.98-.38 0-.76-.02-1.14-.07-1.88-.25-3.46-1.44-4.25-3.13-.67-1.44-.69-3.11-.01-4.56z" />
      </svg>
    );
  }

  return <Download aria-hidden="true" className={className} />;
}
