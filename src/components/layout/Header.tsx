import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { appLink, site } from "@/lib/site";

const navigation = [
  { label: "Product", href: "/#product" },
  { label: "Documentation", href: site.docs },
  { label: "GitHub", href: site.github },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-[96rem] items-center justify-between px-5 sm:px-8 lg:px-12">
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
          className="hidden items-center gap-8 md:flex"
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
            <>
              <Link
                href={appLink("/en/login")}
                className="px-3 py-2 text-sm font-semibold text-text transition-opacity hover:opacity-70"
              >
                Log in
              </Link>
              <Link
                href={appLink("/en/signup")}
                className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-bg transition-colors hover:bg-gold-hover"
              >
                Sign up
              </Link>
            </>
          ) : (
            <Link
              href={site.docs}
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-bg transition-colors hover:bg-gold-hover"
            >
              Get started
            </Link>
          )}
        </div>

        <details className="group relative md:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full text-text transition-colors hover:bg-white/[0.06]">
            <span className="sr-only">Open navigation</span>
            <Menu aria-hidden="true" className="size-5" />
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-12 w-64 rounded-xl bg-panel-strong p-2 shadow-2xl"
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
              <>
                <Link
                  href={appLink("/en/login")}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-text hover:bg-white/[0.05]"
                >
                  Log in
                </Link>
                <Link
                  href={appLink("/en/signup")}
                  className="mt-1 block rounded-full bg-gold px-4 py-3 text-center text-sm font-bold text-bg"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <Link
                href={site.docs}
                className="mt-1 block rounded-full bg-gold px-4 py-3 text-center text-sm font-bold text-bg"
              >
                Get started
              </Link>
            )}
          </nav>
        </details>
      </div>
    </header>
  );
}
