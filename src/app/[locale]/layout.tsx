import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/RevealObserver";
import { getDict } from "@/lib/dictionaries";
import { isLocale, locales, site } from "@/lib/site";
import "@fontsource-variable/outfit";
import "../globals.css";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDict(locale);
  return {
    metadataBase: new URL(site.url),
    title: { default: t.meta.title, template: "%s — Chauffaclim Luxembourg" },
    description: t.meta.description,
    openGraph: { siteName: "Chauffaclim Luxembourg", locale, type: "website" },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Active les animations d'apparition uniquement si JS tourne : sans JS, tout reste visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('reveal-ready')" }} />
      </head>
      <body className="font-sans">
        {/* Dégradé rouge → bleu réutilisé par les icônes au survol (Entretien & dépannage). */}
        <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
          <defs>
            <linearGradient id="duo-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" style={{ stopColor: "var(--color-heat)" }} />
              <stop offset="1" style={{ stopColor: "var(--color-cool)" }} />
            </linearGradient>
          </defs>
        </svg>
        <Header locale={locale} nav={t.nav} />
        <main>{children}</main>
        <Footer locale={locale} t={t} />
        <RevealObserver />
      </body>
    </html>
  );
}
