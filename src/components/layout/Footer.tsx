import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { label: "Product", href: "/#product" },
  { label: "Documentation", href: site.docs },
  { label: "GitHub", href: site.github },
  { label: "Deployment", href: site.operations },
  { label: "License", href: site.license },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-[90rem] px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link
              href="/"
              aria-label="OpsWarden home"
              className="inline-flex items-center gap-2.5"
            >
              <Image
                src="/assets/logo-icon.png"
                alt=""
                width={32}
                height={32}
                className="h-7 w-auto"
              />
              <Image
                src="/assets/logo-text-light.png"
                alt="OpsWarden"
                width={180}
                height={36}
                className="h-5 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted">
              Open-source incident response and release coordination for
              engineering teams.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OpsWarden.</p>
          <p>Apache License 2.0 · Built in the open.</p>
        </div>
      </div>
    </footer>
  );
}
