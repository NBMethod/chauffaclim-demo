import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, ServiceGrid } from "@/components/Blocks";
import { Arrow, ServiceIcon } from "@/components/Icons";
import { getDict } from "@/lib/dictionaries";
import { isLocale, isService, locales, serviceSlugs, site } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () =>
  locales.flatMap((locale) => serviceSlugs.map((slug) => ({ locale, slug })));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isService(slug)) return {};
  const s = getDict(locale).services[slug];
  return { title: s.name, description: s.short };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isService(slug)) notFound();
  const t = getDict(locale);
  const s = t.services[slug];
  const isMaintenance = slug === "entretien-depannage";

  return (
    <>
      <section className="container-x py-16 md:py-24">
        <Link href={`/${locale}/services`} className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
          <Arrow className="h-4 w-4 rotate-180" /> {t.servicePage.back}
        </Link>
        <div className="mt-10 grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <ServiceIcon slug={slug} className="h-12 w-12" />
            <h1 className="mt-6 text-5xl font-medium tracking-tight md:text-7xl">{s.name}</h1>
            <div className="duo mt-8 h-1 w-24 rounded-full" />
            <p className="mt-8 max-w-xl text-lg text-muted">{s.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={`/${locale}/contact`} className="btn btn-dark">
                {t.nav.quote} <Arrow className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="btn btn-ghost">{site.phoneDisplay}</a>
            </div>
            {isMaintenance && (
              <p className="mt-6 text-sm text-muted">
                <a href={`mailto:${site.serviceEmail}`} className="underline underline-offset-4 hover:text-ink">
                  {site.serviceEmail}
                </a>
              </p>
            )}
          </div>
          <div className="rounded-3xl border border-line bg-white p-8 md:p-10">
            <h2 className="eyebrow">{t.servicePage.included}</h2>
            <ul className="mt-4">
              {s.items.map((it, i) => (
                <li key={it} className="flex items-baseline gap-5 border-b border-line py-4 last:border-0">
                  <span className="text-xs tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <h2 className="mb-8 text-2xl font-medium">{t.servicePage.others}</h2>
        <ServiceGrid locale={locale} t={t} exclude={slug} />
      </section>

      <CtaBand locale={locale} t={t} />
    </>
  );
}
