import Image from "next/image";
import { Download } from "lucide-react";
import type { DownloadPlatform } from "@/lib/downloads";

type PlatformIconProps = {
  platform: DownloadPlatform | null;
  className?: string;
};

export function PlatformIcon({ platform, className = "size-4" }: PlatformIconProps) {
  if (platform === "windows") {
    return (
      <Image
        src="/assets/platforms/windows-white-icon.webp"
        alt=""
        width={16}
        height={16}
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
        className={`${className} object-contain`}
      />
    );
  }

  if (platform === "linux") {
    return (
      <Image
        src="/assets/platforms/linux.png"
        alt=""
        width={16}
        height={16}
        className={`${className} object-contain`}
      />
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
