import Image from "next/image";
import { site } from "@/lib/site";

export function IncidentPreview() {
  return (
    <section
      aria-label="OpsWarden incident workspace"
      className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12"
    >
      <div className="hero-preview-enter mx-auto max-w-[96rem] overflow-hidden rounded-3xl border border-white/10 bg-panel p-1.5 shadow-2xl shadow-black/20 sm:p-2">
        <Image
          src={site.screenshots.incidents}
          alt="OpsWarden incident queue showing severity, state, assignee and live activity"
          width={2560}
          height={1600}
          priority
          sizes="(max-width: 768px) 100vw, 1500px"
          className="h-auto w-full rounded-[1.25rem]"
        />
      </div>
    </section>
  );
}
