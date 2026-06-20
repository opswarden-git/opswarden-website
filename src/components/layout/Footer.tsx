import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Compass, UserPlus, Users, ShieldCheck } from 'lucide-react';

export function Footer() {
  const columns = [
    {
      title: 'Explore',
      icon: Compass,
      links: [
        { label: 'About', href: '/#about' },
        { label: 'Install', href: '/#install' },
        { label: 'Ressources', href: '/#ressources' },
        { label: 'Community', href: '/#community' },
      ],
    },
    {
      title: 'Account',
      icon: UserPlus,
      links: [
        { label: 'Log in', href: 'http://localhost:4242/en/login' },
        { label: 'Sign Up', href: 'http://localhost:4242/en/signup' },
      ],
    },
    {
      title: 'Connect',
      icon: Users,
      links: [
        { label: 'Discord', href: '#' },
        { label: 'GitHub', href: '#' },
        { label: 'X / Twitter', href: '#' },
      ],
    },
  ];

  return (
    <footer className="glass text-text">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">

          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
              <Image src="/assets/logo-icon.png" alt="Icon" width={36} height={36} className="h-8 w-auto object-contain" />
              <Image src="/assets/logo-text-light.png" alt="OpsWarden" width={200} height={40} className="h-6 w-auto object-contain object-left" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Ship fearlessly, resolve instantly. Real-time incident and release coordination for engineering teams.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-text">
                  <col.icon className="h-4 w-4 text-gold" />
                  {col.title}
                </div>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-muted transition-colors hover:text-gold">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-muted">© {new Date().getFullYear()} OpsWarden. All rights reserved.</p>
          <p className="flex items-center gap-2 text-xs text-muted">
            <ShieldCheck className="h-4 w-4 text-gold" />
            Advanced NOC &amp; Incident Management
          </p>
        </div>
      </div>
    </footer>
  );
}
