import Link from "next/link";
import { reveal } from "@/lib/reveal";
import { serviceSlugs, serviceTone, site, type Locale, type ServiceSlug } from "@/lib/site";
import type { Dict } from "@/lib/dictionaries";
import { Arrow, ServiceIcon } from "./Icons";

export function ServiceGrid({ locale, t, exclude }: { locale: Locale; t: Dict; exclude?: ServiceSlug }) {
  const list = serviceSlugs.filter((s) => s !== exclude);
  return (
    <div
      className={`grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 ${
        exclude ? "lg:grid-cols-4" : "lg:grid-cols-3"
      }`}
    >
      {list.map((slug, i) => (
        <Link
          key={slug}
          href={`/${locale}/services/${slug}`}
          className={`svc svc-${serviceTone[slug]} group flex min-h-60 flex-col bg-paper p-8 outline-none transition-colors hover:bg-white focus-visible:bg-white ${
            !exclude && i === list.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""
          }`}
        >
          <div className="flex flex-1 flex-col" {...reveal(i)}>
            <ServiceIcon slug={slug} className="svc-icon h-9 w-9 origin-bottom-left" />
            <h3 className="svc-title mt-auto self-start pt-10 text-2xl font-medium">{t.services[slug].name}</h3>
            <p className="mt-2 max-w-md text-sm text-muted">{t.services[slug].short}</p>
            <span className="svc-more mt-5 inline-flex items-center gap-2 self-start text-sm font-medium">
              <span className="svc-more-label">{t.servicesSection.more}</span>
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function CtaBand({ locale, t }: { locale: Locale; t: Dict }) {
  return (
    <section className="container-x pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-white md:px-14 md:py-20" {...reveal()}>
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-heat/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cool/40 blur-3xl" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium leading-tight md:text-5xl">{t.cta.title}</h2>
            <p className="mt-4 text-white/70">{t.cta.text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={`/${locale}/contact`} className="btn btn-light">
              {t.nav.quote}
            </Link>
            <a href={site.phoneHref} className="btn border border-white/30 hover:bg-white/10">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
