import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDict } from "@/lib/dictionaries";
import { isLocale, locales } from "@/lib/site";
import "@fontsource-variable/outfit";
import "../globals.css";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDict(locale);
  return { title: { default: t.meta.title, template: "%s — Chauffaclim Luxembourg" }, description: t.meta.description };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale);
  return (
    <html lang={locale}>
      <body className="font-sans">
        <Header locale={locale} nav={t.nav} />
        <main>{children}</main>
        <Footer locale={locale} t={t} />
      </body>
    </html>
  );
}
