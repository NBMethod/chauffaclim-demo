import type { Locale, ServiceSlug } from "./site";

type Service = { name: string; short: string; intro: string; items: string[] };

export type Dict = {
  meta: { title: string; description: string };
  nav: { home: string; services: string; contact: string; quote: string; menu: string };
  hero: {
    eyebrow: string;
    title: [string, string, string];
    sub: string;
    cta: string;
    call: string;
    discover: string;
  };
  facts: { label: string; value: string }[];
  servicesSection: { eyebrow: string; title: string; sub: string; more: string; all: string };
  services: Record<ServiceSlug, Service>;
  why: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  trust: { partners: string };
  cta: { title: string; text: string; write: string };
  servicePage: { included: string; others: string; back: string };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    send: string;
    address: string;
    hours: string;
    hoursValue: string;
    follow: string;
  };
  footer: { tagline: string; rights: string; demo: string };
};

const fr: Dict = {
  meta: {
    title: "Chauffaclim Luxembourg — Chauffage et climatisation",
    description:
      "Installation et rénovation de vos équipements de chauffage et de climatisation : chaudières, pompes à chaleur, radiateurs, climatisations.",
  },
  nav: { home: "Accueil", services: "Services", contact: "Contact", quote: "Demander un devis", menu: "Menu" },
  hero: {
    eyebrow: "Chauffage · Climatisation",
    title: ["Le confort", "thermique,", "toute l'année."],
    sub: "Installation et rénovation de vos équipements de chauffage et de climatisation. Une équipe à vos côtés, été comme hiver.",
    cta: "Demander un devis",
    call: "Appeler",
    discover: "Découvrir nos services",
  },
  facts: [
    { label: "Expertise", value: "Chauffage et climatisation" },
    { label: "Savoir-faire", value: "Installation et rénovation" },
    { label: "Horaires", value: "Lun – Ven · 9h–12h, 14h–17h" },
  ],
  servicesSection: {
    eyebrow: "Nos métiers",
    title: "Un seul interlocuteur pour votre confort",
    sub: "De la chaudière à la climatisation, nous concevons et installons vos équipements.",
    more: "En savoir plus",
    all: "Tous les services",
  },
  services: {
    chauffage: {
      name: "Chauffage",
      short: "Chaudières gaz, fioul et bois, pompes à chaleur, radiateurs.",
      intro:
        "Nous installons et rénovons votre système de chauffage : chaudières, pompes à chaleur, radiateurs et tuyauterie, avec un réglage précis pour un confort durable et une consommation maîtrisée.",
      items: [
        "Installation de chaudières gaz, fioul et bois",
        "Pompes à chaleur, dont modèles hybrides",
        "Pose de radiateurs et de tuyauterie",
        "Réglage des débits de gaz",
        "Désembouage des circuits de chauffage",
      ],
    },
    climatisation: {
      name: "Climatisation",
      short: "Installation et maintenance de climatisations et pompes à chaleur.",
      intro:
        "Fraîcheur en été, chaleur en hiver : nous installons et maintenons vos climatisations et pompes à chaleur réversibles pour un fonctionnement fiable et économe.",
      items: [
        "Installation de climatisations et pompes à chaleur",
        "Maintenance régulière des équipements",
        "Nettoyage des filtres",
        "Recherche de fuites",
        "Contrôle d'étanchéité",
      ],
    },
  },
  why: {
    eyebrow: "Pourquoi nous choisir",
    title: "Des installations bien pensées, bien posées",
    items: [
      { title: "Un interlocuteur unique", text: "Du premier échange à la mise en service, vous gardez le même contact tout au long de votre projet." },
      { title: "Du neuf à la rénovation", text: "Nous intervenons aussi bien sur des installations neuves que sur la remise à niveau de l'existant." },
      { title: "Des solutions adaptées", text: "Chaudière, pompe à chaleur ou climatisation : nous vous orientons vers l'équipement adapté à votre logement." },
    ],
  },
  trust: { partners: "Partenaires" },
  cta: {
    title: "Un projet, une question ?",
    text: "Décrivez-nous votre besoin, nous vous recontactons pour convenir d'un rendez-vous.",
    write: "Nous écrire",
  },
  servicePage: { included: "Nos prestations", others: "Autre service", back: "Tous les services" },
  contact: {
    eyebrow: "Contact",
    title: "Parlons de votre projet",
    sub: "Décrivez-nous votre besoin, nous vous répondons du lundi au vendredi.",
    name: "Nom",
    email: "E-mail",
    phone: "Téléphone",
    service: "Service concerné",
    message: "Votre message",
    send: "Envoyer la demande",
    address: "Adresse",
    hours: "Horaires",
    hoursValue: "Du lundi au vendredi\n9h – 12h · 14h – 17h",
    follow: "Nous suivre",
  },
  footer: {
    tagline: "Chauffage et climatisation.",
    rights: "Tous droits réservés.",
    demo: "Maquette de démonstration",
  },
};

const de: Dict = {
  meta: {
    title: "Chauffaclim Luxembourg — Heizung und Klimatisierung",
    description:
      "Installation und Renovierung Ihrer Heizungs- und Klimaanlagen: Heizkessel, Wärmepumpen, Heizkörper, Klimaanlagen.",
  },
  nav: { home: "Startseite", services: "Leistungen", contact: "Kontakt", quote: "Angebot anfragen", menu: "Menü" },
  hero: {
    eyebrow: "Heizung · Klimatisierung",
    title: ["Wohlfühlklima,", "zu jeder", "Jahreszeit."],
    sub: "Installation und Renovierung Ihrer Heizungs- und Klimaanlagen. Ein Team an Ihrer Seite, im Sommer wie im Winter.",
    cta: "Angebot anfragen",
    call: "Anrufen",
    discover: "Unsere Leistungen",
  },
  facts: [
    { label: "Fachgebiet", value: "Heizung und Klimatisierung" },
    { label: "Kompetenz", value: "Installation und Renovierung" },
    { label: "Öffnungszeiten", value: "Mo – Fr · 9–12 Uhr, 14–17 Uhr" },
  ],
  servicesSection: {
    eyebrow: "Unsere Leistungen",
    title: "Ein Ansprechpartner für Ihren Wohnkomfort",
    sub: "Vom Heizkessel bis zur Klimaanlage: Wir planen und installieren Ihre Anlagen.",
    more: "Mehr erfahren",
    all: "Alle Leistungen",
  },
  services: {
    chauffage: {
      name: "Heizung",
      short: "Gas-, Öl- und Holzkessel, Wärmepumpen, Heizkörper.",
      intro:
        "Wir installieren und erneuern Ihre Heizungsanlage: Kessel, Wärmepumpen, Heizkörper und Rohrleitungen, präzise eingestellt für dauerhaften Komfort und einen kontrollierten Verbrauch.",
      items: [
        "Installation von Gas-, Öl- und Holzkesseln",
        "Wärmepumpen, auch Hybridmodelle",
        "Montage von Heizkörpern und Rohrleitungen",
        "Einstellung des Gasdurchflusses",
        "Spülung von Heizkreisläufen",
      ],
    },
    climatisation: {
      name: "Klimatisierung",
      short: "Installation und Wartung von Klimaanlagen und Wärmepumpen.",
      intro:
        "Kühl im Sommer, warm im Winter: Wir installieren und warten Ihre Klimaanlagen und reversiblen Wärmepumpen für einen zuverlässigen und sparsamen Betrieb.",
      items: [
        "Installation von Klimaanlagen und Wärmepumpen",
        "Regelmäßige Wartung der Anlagen",
        "Reinigung der Filter",
        "Lecksuche",
        "Dichtheitsprüfung",
      ],
    },
  },
  why: {
    eyebrow: "Warum wir",
    title: "Gut geplant, sauber montiert",
    items: [
      { title: "Ein fester Ansprechpartner", text: "Vom ersten Gespräch bis zur Inbetriebnahme haben Sie während Ihres gesamten Projekts denselben Kontakt." },
      { title: "Neubau und Renovierung", text: "Wir arbeiten an neuen Anlagen ebenso wie an der Modernisierung bestehender Systeme." },
      { title: "Passende Lösungen", text: "Heizkessel, Wärmepumpe oder Klimaanlage: Wir beraten Sie zur passenden Anlage für Ihr Zuhause." },
    ],
  },
  trust: { partners: "Partner" },
  cta: {
    title: "Ein Projekt, eine Frage?",
    text: "Schildern Sie uns Ihr Anliegen, wir melden uns für eine Terminvereinbarung.",
    write: "Schreiben Sie uns",
  },
  servicePage: { included: "Unsere Leistungen", others: "Weitere Leistung", back: "Alle Leistungen" },
  contact: {
    eyebrow: "Kontakt",
    title: "Sprechen wir über Ihr Projekt",
    sub: "Schildern Sie uns Ihr Anliegen, wir antworten Ihnen von Montag bis Freitag.",
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    service: "Gewünschte Leistung",
    message: "Ihre Nachricht",
    send: "Anfrage senden",
    address: "Adresse",
    hours: "Öffnungszeiten",
    hoursValue: "Montag bis Freitag\n9 – 12 Uhr · 14 – 17 Uhr",
    follow: "Folgen Sie uns",
  },
  footer: {
    tagline: "Heizung und Klimatisierung.",
    rights: "Alle Rechte vorbehalten.",
    demo: "Demo-Entwurf",
  },
};

const en: Dict = {
  meta: {
    title: "Chauffaclim Luxembourg — Heating and air conditioning",
    description:
      "Installation and renovation of your heating and air conditioning: boilers, heat pumps, radiators, air conditioning units.",
  },
  nav: { home: "Home", services: "Services", contact: "Contact", quote: "Request a quote", menu: "Menu" },
  hero: {
    eyebrow: "Heating · Air conditioning",
    title: ["Indoor comfort,", "all year", "round."],
    sub: "Installation and renovation of your heating and air conditioning. A team by your side, summer and winter alike.",
    cta: "Request a quote",
    call: "Call",
    discover: "Our services",
  },
  facts: [
    { label: "Expertise", value: "Heating and air conditioning" },
    { label: "Know-how", value: "Installation and renovation" },
    { label: "Opening hours", value: "Mon – Fri · 9am–12pm, 2pm–5pm" },
  ],
  servicesSection: {
    eyebrow: "What we do",
    title: "One contact for your home comfort",
    sub: "From the boiler to air conditioning, we design and install your equipment.",
    more: "Learn more",
    all: "All services",
  },
  services: {
    chauffage: {
      name: "Heating",
      short: "Gas, oil and wood boilers, heat pumps, radiators.",
      intro:
        "We install and renovate your heating system: boilers, heat pumps, radiators and pipework, precisely tuned for lasting comfort and controlled consumption.",
      items: [
        "Gas, oil and wood boiler installation",
        "Heat pumps, including hybrid models",
        "Radiator and pipework fitting",
        "Gas flow adjustment",
        "Heating circuit flushing",
      ],
    },
    climatisation: {
      name: "Air conditioning",
      short: "Installation and maintenance of air conditioning and heat pumps.",
      intro:
        "Cool in summer, warm in winter: we install and maintain your air conditioning and reversible heat pumps for reliable, efficient operation.",
      items: [
        "Air conditioning and heat pump installation",
        "Regular equipment maintenance",
        "Filter cleaning",
        "Leak detection",
        "Tightness testing",
      ],
    },
  },
  why: {
    eyebrow: "Why choose us",
    title: "Well designed, well fitted",
    items: [
      { title: "A single point of contact", text: "From the first conversation to commissioning, you keep the same contact throughout your project." },
      { title: "New builds and renovations", text: "We work on new installations as well as upgrades to existing systems." },
      { title: "The right solution", text: "Boiler, heat pump or air conditioning: we help you choose the equipment that suits your home." },
    ],
  },
  trust: { partners: "Partners" },
  cta: {
    title: "A project, a question?",
    text: "Tell us what you need and we will get back to you to arrange an appointment.",
    write: "Email us",
  },
  servicePage: { included: "What we do", others: "Other service", back: "All services" },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your project",
    sub: "Tell us what you need, we reply Monday to Friday.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    service: "Service",
    message: "Your message",
    send: "Send request",
    address: "Address",
    hours: "Opening hours",
    hoursValue: "Monday to Friday\n9am – 12pm · 2pm – 5pm",
    follow: "Follow us",
  },
  footer: {
    tagline: "Heating and air conditioning.",
    rights: "All rights reserved.",
    demo: "Demo mockup",
  },
};

const dictionaries: Record<Locale, Dict> = { fr, de, en };
export const getDict = (locale: Locale) => dictionaries[locale];
