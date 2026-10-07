import type { ServiceSlug } from "@/lib/site";

const paths: Record<ServiceSlug, React.ReactNode> = {
  chauffage: (
    <path d="M12 3c.5 3-2.5 4.5-2.5 7.5A2.5 2.5 0 0 0 12 13a2.5 2.5 0 0 0 2.5-2.5c2 1.500 3 3.500 3 5.500a5.500 5.500 0 0 1-11 0C6.500 10.500 11 8.500 12 3Z" />
  ),
  climatisation: (
    <path d="M12 2v20M3.300 7l17.400 10M20.700 7 3.300 17M9.500 3.500 12 6l2.500-2.500M9.500 20.500 12 18l2.500 2.500" />
  ),
  plomberie: <path d="M12 3s6 6.200 6 11a6 6 0 0 1-12 0c0-4.800 6-11 6-11Z" />,
  "salles-de-bains": (
    <path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Zm3 0V6a2 2 0 0 1 4 0M7 19l-1 2m11-2 1 2" />
  ),
  "entretien-depannage": (
    <path d="M14.500 6.500a4 4 0 0 0-5.300 5.300L3 18l3 3 6.200-6.200a4 4 0 0 0 5.300-5.300L15 12l-3-3 2.500-2.500Z" />
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
