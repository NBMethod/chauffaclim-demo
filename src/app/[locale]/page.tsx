import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, ServiceGrid } from "@/components/Blocks";
import { Arrow } from "@/components/Icons";
import { getDict } from "@/lib/dictionaries";
import { reveal } from "@/lib/reveal";
import { isLocale, site } from "@/lib/site";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-heat/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-40 h-[28rem] w-[28rem] rounded-full bg-cool/15 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow" {...reveal(0)}>{t.hero.eyebrow}</p>
            <h1 {...reveal(1)} className="mt-6 text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
              {t.hero.title[0]} <span className="duo-text">{t.hero.title[1]}</span>
              <br />
              {t.hero.title[2]}
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted" {...reveal(2)}>{t.hero.sub}</p>
            <div className="mt-9 flex flex-wrap gap-3" {...reveal(3)}>
              <Link href={`/${locale}/contact`} className="btn btn-dark">
                {t.hero.cta} <Arrow className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="btn btn-ghost">
                {t.hero.call} · {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div {...reveal(2)} className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center rounded-[2.5rem] border border-line bg-white lg:flex">
            <div className="duo absolute inset-x-10 bottom-0 h-1 rounded-full" />
            <Image src="/mark.png" alt="" width={167} height={167} className="h-44 w-auto" />
          </div>
        </div>
        <div className="border-y border-line">
          <dl className="container-x grid divide-line md:grid-cols-3 md:divide-x">
            {t.facts.map((f, i) => (
              <div key={f.label} className="py-6 md:px-8 md:first:pl-0" {...reveal(i + 3)}>
                <dt className="eyebrow">{f.label}</dt>
                <dd className="mt-2 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl" {...reveal()}>
            <p className="eyebrow">{t.servicesSection.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight md:text-5xl">{t.servicesSection.title}</h2>
            <p className="mt-4 text-muted">{t.servicesSection.sub}</p>
          </div>
          <Link href={`/${locale}/services`} className="inline-flex items-center gap-2 text-sm font-medium" {...reveal(1)}>
            {t.servicesSection.all} <Arrow className="h-4 w-4" />
          </Link>
        </div>
        <ServiceGrid locale={locale} t={t} />
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x py-24">
          <div {...reveal()}>
            <p className="eyebrow">{t.why.eyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight md:text-5xl">{t.why.title}</h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {t.why.items.map((it, i) => (
              <div key={it.title} className="border-t border-ink pt-6" {...reveal(i)}>
                <p className="text-sm text-muted">0{i + 1}</p>
                <h3 className="mt-3 text-xl font-medium">{it.title}</h3>
                <p className="mt-3 text-muted">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 md:grid-cols-2">
        {(
          [
            [t.trust.certs, site.certifications],
            [t.trust.partners, site.partners],
          ] as const
        ).map(([title, list], i) => (
          <div key={title} {...reveal(i)}>
            <p className="eyebrow">{title}</p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {list.map((x) => (
                <li key={x} className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <CtaBand locale={locale} t={t} />
    </>
  );
}
