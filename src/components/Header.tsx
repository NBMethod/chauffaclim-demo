"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { locales, site, type Locale } from "@/lib/site";
import type { Dict } from "@/lib/dictionaries";

export function Header({ locale, nav }: { locale: Locale; nav: Dict["nav"] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rest = pathname.replace(/^\/(fr|de|en)(?=\/|$)/, "");

  const links = [
    { href: `/${locale}`, label: nav.home },
    { href: `/${locale}/services`, label: nav.services },
    { href: `/${locale}/contact`, label: nav.contact },
  ];
  const active = (href: string) =>
    href === `/${locale}` ? pathname === href : pathname.startsWith(href);

  const langs = (
    <div className="flex items-center gap-1 text-xs tracking-widest">
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest}`}
          hrefLang={l}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded-full px-2.5 py-1.5 uppercase ${
            l === locale ? "bg-ink text-white" : "text-muted hover:text-ink"
          }`}
        >
          {l}
        </Link>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href={`/${locale}`} aria-label={`${site.name} ${site.baseline}`} onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt={`${site.name} ${site.baseline}`} width={1092} height={323} priority className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm ${active(l.href) ? "text-ink" : "text-muted hover:text-ink"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {langs}
          <Link href={`/${locale}/contact`} className="btn btn-dark !py-2.5 text-sm">
            {nav.quote}
          </Link>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden"
          aria-label={nav.menu}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2.5 text-lg">
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between">
              {langs}
              {site.phone && (
                <a href={site.phone.href} className="text-sm font-medium">
                  {site.phone.display}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
