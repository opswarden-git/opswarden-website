import Link from "next/link";
import { Download } from "lucide-react";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { site } from "@/lib/site";

type ProductActionsProps = {
  centered?: boolean;
};

export function ProductActions({ centered = false }: ProductActionsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
      <Link
        href={site.releases}
        className="inline-flex h-10 items-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-bg transition-colors hover:bg-gold-hover"
      >
        <Download aria-hidden="true" className="size-4" />
        Download OpsWarden
      </Link>
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
