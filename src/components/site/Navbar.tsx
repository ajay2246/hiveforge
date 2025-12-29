"use client";

import * as React from "react";
import BookingDialog from "@/components/site/BookingDialog";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    ["Services", "#services"],
    ["Experience", "#work"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/55 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#top"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
            🐝
          </span>
          <span>
            HiveForge<span className="text-muted-foreground">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map(([t, href]) => (
            <a
              key={t}
              href={href}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {t}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" asChild className="hidden rounded-2xl bg-white/70 sm:inline-flex">
            <a href="mailto:ajaykancheti57@gmail.com">Email</a>
          </Button>

          <BookingDialog
            triggerText="Book a Call"
            className="hidden rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-300 text-zinc-900 hover:opacity-95 md:inline-flex"
          />

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 py-4 space-y-3">
            {navItems.map(([t, href]) => (
              <a
                key={t}
                href={href}
                className="block py-2 text-muted-foreground transition hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t}
              </a>
            ))}
            <div className="pt-3 space-y-2 border-t">
              <Button variant="outline" asChild className="w-full rounded-2xl bg-white/70">
                <a href="mailto:ajaykancheti57@gmail.com">Email</a>
              </Button>
              <BookingDialog
                triggerText="Book a Call"
                className="w-full rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-300 text-zinc-900 hover:opacity-95"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
