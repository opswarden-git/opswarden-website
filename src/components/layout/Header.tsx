import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass text-text">
      <div className="w-full mx-auto px-6 sm:px-10 md:px-16 h-24 md:h-28 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 transition-opacity hover:opacity-80">
          <Image src="/assets/logo-icon.png" alt="Icon" width={40} height={40} className="h-8 md:h-10 w-auto object-contain" />
          <Image src="/assets/logo-text-light.png" alt="OpsWarden" width={240} height={48} className="h-6 md:h-8 w-auto object-contain object-left" />
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 shrink-0">
          <Link 
            href="http://localhost:4242/en/login" 
            className="text-muted hover:text-text font-medium transition-colors text-base md:text-lg"
          >
            Log in
          </Link>
          <Link 
            href="http://localhost:4242/en/signup" 
            className="text-gold hover:text-gold-hover font-bold transition-colors text-base md:text-lg"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}
