import type { ServiceSlug } from "@/lib/site";

const paths: Record<ServiceSlug, React.ReactNode> = {
  chauffage: (
    <path d="M12 3c.5 3-2.5 4.5-2.5 7.5A2.5 2.5 0 0 0 12 13a2.5 2.5 0 0 0 2.5-2.5c2 1.500 3 3.500 3 5.500a5.500 5.500 0 0 1-11 0C6.500 10.500 11 8.500 12 3Z" />
  ),
  climatisation: (
    <path d="M12 2v20M3.300 7l17.400 10M20.700 7 3.300 17M9.500 3.500 12 6l2.500-2.500M9.500 20.500 12 18l2.500 2.500" />
  ),
};

export function ServiceIcon({ slug, className }: { slug: ServiceSlug; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[slug]}
    </svg>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
