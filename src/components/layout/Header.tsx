import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { appLink, site } from "@/lib/site";

const navigation = [
  { label: "Product", href: "/#product" },
  { label: "Automation", href: "/#automation" },
  { label: "Desktop", href: "/#desktop" },
  { label: "Documentation", href: site.docs },
];

export function Header() {
  const primaryLabel = site.appUrl ? "Get started" : "View source";
  const primaryHref = site.appUrl ? appLink("/en/signup") : site.github;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="OpsWarden home"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <Image
            src="/assets/logo-icon.png"
            alt=""
            width={40}
            height={40}
            className="h-8 w-auto"
          />
          <Image
            src="/assets/logo-text-light.png"
            alt="OpsWarden"
            width={240}
            height={48}
            className="h-6 w-auto"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {site.appUrl ? (
            <Link
              href={appLink("/en/login")}
              className="px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-text"
            >
              Log in
            </Link>
          ) : null}
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-bold text-bg transition-colors hover:bg-gold-hover"
          >
            {primaryLabel}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <details className="group relative md:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-lg border border-white/10 text-text transition-colors hover:bg-white/[0.05]">
            <span className="sr-only">Open navigation</span>
            <Menu aria-hidden="true" className="size-5" />
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-12 w-64 rounded-xl border border-white/10 bg-panel p-2 shadow-2xl"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-muted hover:bg-white/[0.05] hover:text-text"
              >
                {item.label}
              </Link>
            ))}
            {site.appUrl ? (
              <Link
                href={appLink("/en/login")}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-muted hover:bg-white/[0.05] hover:text-text"
              >
                Log in
              </Link>
            ) : null}
            <Link
              href={primaryHref}
              className="mt-1 flex items-center justify-between rounded-lg bg-gold px-4 py-3 text-sm font-bold text-bg"
            >
              {primaryLabel}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
