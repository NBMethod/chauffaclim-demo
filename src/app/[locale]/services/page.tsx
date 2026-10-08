import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, ServiceGrid } from "@/components/Blocks";
import { getDict } from "@/lib/dictionaries";
import { reveal } from "@/lib/reveal";
import { isLocale } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDict(locale).nav.services } : {};
}

export default async function Services({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale);
  return (
    <>
      <section className="container-x py-20 md:py-24">
        <p className="eyebrow" {...reveal(0)}>{t.servicesSection.eyebrow}</p>
        <h1 {...reveal(1)} className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
          {t.servicesSection.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted" {...reveal(2)}>{t.servicesSection.sub}</p>
        <div className="mt-14">
          <ServiceGrid locale={locale} t={t} />
        </div>
      </section>
      <CtaBand locale={locale} t={t} />
    </>
  );
}
