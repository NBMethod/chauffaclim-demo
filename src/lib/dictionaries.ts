import type { Locale, ServiceSlug } from "./site";

type Service = { name: string; short: string; intro: string; items: string[] };

export type Dict = {
  meta: { title: string; description: string };
  nav: { home: string; services: string; contact: string; quote: string; menu: string };
  hero: { eyebrow: string; title: [string, string, string]; sub: string; cta: string; call: string };
  facts: { label: string; value: string }[];
  servicesSection: { eyebrow: string; title: string; sub: string; more: string; all: string };
  services: Record<ServiceSlug, Service>;
  why: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  trust: { certs: string; partners: string };
  cta: { title: string; text: string };
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
    maintenance: string;
    follow: string;
  };
  footer: { tagline: string; rights: string; demo: string };
};

const fr: Dict = {
  meta: {
    title: "Chauffaclim Luxembourg — Chauffage, climatisation, plomberie",
    description:
      "Installation, rénovation et entretien de vos équipements de chauffage, climatisation et plomberie. Entreprise certifiée RGE, QualiPAC et Qualibat.",
  },
  nav: { home: "Accueil", services: "Services", contact: "Contact", quote: "Demander un devis", menu: "Menu" },
  hero: {
    eyebrow: "Chauffage · Climatisation · Plomberie",
    title: ["Le confort", "thermique,", "toute l'année."],
    sub: "Installation, rénovation et entretien de vos équipements. Une équipe certifiée qui intervient chez vous, été comme hiver.",
    cta: "Demander un devis",
    call: "Appeler",
  },
  facts: [
    { label: "Certifications", value: "RGE · QualiPAC · Qualibat" },
    { label: "Savoir-faire", value: "Installation, rénovation, entretien" },
    { label: "Disponibilité", value: "Toute l'année, sur rendez-vous" },
  ],
  servicesSection: {
    eyebrow: "Nos métiers",
    title: "Un seul interlocuteur pour tout votre confort",
    sub: "De la chaudière à la salle de bains, nous concevons, installons et entretenons vos équipements.",
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
    plomberie: {
      name: "Plomberie",
      short: "Sanitaires, chauffe-eau, robinetterie, fuites et canalisations.",
      intro:
        "De la robinetterie au chauffe-eau, nous prenons en charge l'installation et la réparation de l'ensemble de vos équipements sanitaires.",
      items: [
        "Chauffe-eau",
        "Lavabos et robinetterie",
        "Baignoires, douches et toilettes",
        "Réparation de fuites",
        "Débouchage de canalisations",
        "Adoucisseurs d'eau",
      ],
    },
    "salles-de-bains": {
      name: "Salles de bains",
      short: "Rénovation complète, du mobilier aux finitions.",
      intro:
        "Nous rénovons votre salle de bains de A à Z : plomberie, sanitaires, mobilier et finitions, pour un espace à votre image.",
      items: [
        "Rénovation complète de salle de bains",
        "Meubles et étagères",
        "Colonnes en bois",
        "Miroirs",
        "Douches, baignoires et sanitaires",
      ],
    },
    "entretien-depannage": {
      name: "Entretien & dépannage",
      short: "Chauffaclim Services : l'entretien et le dépannage de vos équipements.",
      intro:
        "Chauffaclim Services assure l'entretien et le dépannage de vos installations pour prolonger leur durée de vie et garantir leur sécurité.",
      items: [
        "Chaudières",
        "Chauffe-eau gaz",
        "Climatisation",
        "Pompes à chaleur air/air et air/eau",
        "VMC",
        "Adoucisseurs",
        "Désembouage",
      ],
    },
  },
  why: {
    eyebrow: "Pourquoi nous choisir",
    title: "Des installations bien pensées, bien posées, bien suivies",
    items: [
      { title: "Une entreprise certifiée", text: "Qualifications RGE, QualiPAC et Qualibat pour des travaux réalisés dans les règles de l'art." },
      { title: "Du neuf à la rénovation", text: "Nous intervenons aussi bien sur des installations neuves que sur la remise à niveau de l'existant." },
      { title: "Un suivi dans la durée", text: "Avec Chauffaclim Services, l'entretien et le dépannage restent entre les mêmes mains." },
    ],
  },
  trust: { certs: "Qualifications", partners: "Partenaires" },
  cta: { title: "Un projet, une panne, une question ?", text: "Décrivez-nous votre besoin, nous vous recontactons pour convenir d'un rendez-vous." },
  servicePage: { included: "Nos prestations", others: "Autres services", back: "Tous les services" },
  contact: {
    eyebrow: "Contact",
    title: "Parlons de votre projet",
    sub: "Nous intervenons sur rendez-vous. Écrivez-nous ou appelez-nous directement.",
    name: "Nom",
    email: "E-mail",
    phone: "Téléphone",
    service: "Service concerné",
    message: "Votre message",
    send: "Envoyer la demande",
    address: "Adresse",
    hours: "Horaires",
    hoursValue: "Sur rendez-vous",
    maintenance: "Entretien & dépannage",
    follow: "Nous suivre",
  },
  footer: {
    tagline: "Chauffage, climatisation et plomberie.",
    rights: "Tous droits réservés.",
    demo: "Maquette de démonstration",
  },
};

const de: Dict = {
  meta: {
    title: "Chauffaclim Luxembourg — Heizung, Klima, Sanitär",
    description:
      "Installation, Renovierung und Wartung Ihrer Heizungs-, Klima- und Sanitäranlagen. Zertifiziert nach RGE, QualiPAC und Qualibat.",
  },
  nav: { home: "Startseite", services: "Leistungen", contact: "Kontakt", quote: "Angebot anfragen", menu: "Menü" },
  hero: {
    eyebrow: "Heizung · Klima · Sanitär",
    title: ["Wohlfühlklima,", "zu jeder", "Jahreszeit."],
    sub: "Installation, Renovierung und Wartung Ihrer Anlagen. Ein zertifiziertes Team, das im Sommer wie im Winter für Sie da ist.",
    cta: "Angebot anfragen",
    call: "Anrufen",
  },
  facts: [
    { label: "Zertifizierungen", value: "RGE · QualiPAC · Qualibat" },
    { label: "Kompetenz", value: "Installation, Renovierung, Wartung" },
    { label: "Verfügbarkeit", value: "Ganzjährig, nach Vereinbarung" },
  ],
  servicesSection: {
    eyebrow: "Unsere Leistungen",
    title: "Ein Ansprechpartner für Ihren gesamten Wohnkomfort",
    sub: "Vom Heizkessel bis zum Badezimmer: Wir planen, installieren und warten Ihre Anlagen.",
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
    plomberie: {
      name: "Sanitär",
      short: "Sanitäranlagen, Warmwasserbereiter, Armaturen, Lecks und Rohre.",
      intro:
        "Von der Armatur bis zum Warmwasserbereiter übernehmen wir Installation und Reparatur Ihrer gesamten Sanitärausstattung.",
      items: [
        "Warmwasserbereiter",
        "Waschbecken und Armaturen",
        "Badewannen, Duschen und WCs",
        "Reparatur von Lecks",
        "Rohrreinigung",
        "Wasserenthärter",
      ],
    },
    "salles-de-bains": {
      name: "Badezimmer",
      short: "Komplettrenovierung, von den Möbeln bis zum letzten Detail.",
      intro:
        "Wir renovieren Ihr Badezimmer von A bis Z: Sanitärinstallation, Ausstattung, Möbel und Feinarbeiten, ganz nach Ihren Vorstellungen.",
      items: [
        "Komplettrenovierung von Badezimmern",
        "Möbel und Regale",
        "Hochschränke aus Holz",
        "Spiegel",
        "Duschen, Badewannen und Sanitärobjekte",
      ],
    },
    "entretien-depannage": {
      name: "Wartung & Notdienst",
      short: "Chauffaclim Services: Wartung und Reparatur Ihrer Anlagen.",
      intro:
        "Chauffaclim Services übernimmt Wartung und Reparatur Ihrer Anlagen, um deren Lebensdauer zu verlängern und ihre Sicherheit zu gewährleisten.",
      items: [
        "Heizkessel",
        "Gas-Warmwasserbereiter",
        "Klimaanlagen",
        "Luft/Luft- und Luft/Wasser-Wärmepumpen",
        "Lüftungsanlagen",
        "Wasserenthärter",
        "Heizkreisspülung",
      ],
    },
  },
  why: {
    eyebrow: "Warum wir",
    title: "Gut geplant, sauber montiert, zuverlässig betreut",
    items: [
      { title: "Ein zertifizierter Betrieb", text: "Qualifikationen RGE, QualiPAC und Qualibat für fachgerecht ausgeführte Arbeiten." },
      { title: "Neubau und Renovierung", text: "Wir arbeiten an neuen Anlagen ebenso wie an der Modernisierung bestehender Systeme." },
      { title: "Langfristige Betreuung", text: "Mit Chauffaclim Services bleiben Wartung und Reparatur in denselben Händen." },
    ],
  },
  trust: { certs: "Qualifikationen", partners: "Partner" },
  cta: { title: "Ein Projekt, eine Störung, eine Frage?", text: "Schildern Sie uns Ihr Anliegen, wir melden uns für eine Terminvereinbarung." },
  servicePage: { included: "Unsere Leistungen", others: "Weitere Leistungen", back: "Alle Leistungen" },
  contact: {
    eyebrow: "Kontakt",
    title: "Sprechen wir über Ihr Projekt",
    sub: "Wir arbeiten nach Terminvereinbarung. Schreiben Sie uns oder rufen Sie uns direkt an.",
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    service: "Gewünschte Leistung",
    message: "Ihre Nachricht",
    send: "Anfrage senden",
    address: "Adresse",
    hours: "Öffnungszeiten",
    hoursValue: "Nach Vereinbarung",
    maintenance: "Wartung & Notdienst",
    follow: "Folgen Sie uns",
  },
  footer: {
    tagline: "Heizung, Klima und Sanitär.",
    rights: "Alle Rechte vorbehalten.",
    demo: "Demo-Entwurf",
  },
};

const en: Dict = {
  meta: {
    title: "Chauffaclim Luxembourg — Heating, air conditioning, plumbing",
    description:
      "Installation, renovation and maintenance of your heating, air conditioning and plumbing systems. RGE, QualiPAC and Qualibat certified.",
  },
  nav: { home: "Home", services: "Services", contact: "Contact", quote: "Request a quote", menu: "Menu" },
  hero: {
    eyebrow: "Heating · Air conditioning · Plumbing",
    title: ["Indoor comfort,", "all year", "round."],
    sub: "Installation, renovation and maintenance of your equipment. A certified team at your door, summer and winter alike.",
    cta: "Request a quote",
    call: "Call",
  },
  facts: [
    { label: "Certifications", value: "RGE · QualiPAC · Qualibat" },
    { label: "Expertise", value: "Installation, renovation, maintenance" },
    { label: "Availability", value: "All year, by appointment" },
  ],
  servicesSection: {
    eyebrow: "What we do",
    title: "One contact for all your home comfort",
    sub: "From the boiler to the bathroom, we design, install and maintain your equipment.",
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
    plomberie: {
      name: "Plumbing",
      short: "Sanitary ware, water heaters, taps, leaks and drains.",
      intro:
        "From taps to water heaters, we handle the installation and repair of all your sanitary equipment.",
      items: [
        "Water heaters",
        "Washbasins and taps",
        "Baths, showers and toilets",
        "Leak repair",
        "Drain unblocking",
        "Water softeners",
      ],
    },
    "salles-de-bains": {
      name: "Bathrooms",
      short: "Complete renovation, from furniture to finishing touches.",
      intro:
        "We renovate your bathroom from start to finish: plumbing, sanitary ware, furniture and finishes, for a space that suits you.",
      items: [
        "Complete bathroom renovation",
        "Furniture and shelving",
        "Wooden tall units",
        "Mirrors",
        "Showers, baths and sanitary ware",
      ],
    },
    "entretien-depannage": {
      name: "Maintenance & repairs",
      short: "Chauffaclim Services: maintenance and repair of your equipment.",
      intro:
        "Chauffaclim Services maintains and repairs your installations to extend their lifespan and keep them safe.",
      items: [
        "Boilers",
        "Gas water heaters",
        "Air conditioning",
        "Air-to-air and air-to-water heat pumps",
        "Mechanical ventilation",
        "Water softeners",
        "Circuit flushing",
      ],
    },
  },
  why: {
    eyebrow: "Why choose us",
    title: "Well designed, well fitted, well looked after",
    items: [
      { title: "A certified company", text: "RGE, QualiPAC and Qualibat qualifications for work carried out to professional standards." },
      { title: "New builds and renovations", text: "We work on new installations as well as upgrades to existing systems." },
      { title: "Long-term follow-up", text: "With Chauffaclim Services, maintenance and repairs stay in the same hands." },
    ],
  },
  trust: { certs: "Qualifications", partners: "Partners" },
  cta: { title: "A project, a breakdown, a question?", text: "Tell us what you need and we will get back to you to arrange an appointment." },
  servicePage: { included: "What we do", others: "Other services", back: "All services" },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your project",
    sub: "We work by appointment. Write to us or call us directly.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    service: "Service",
    message: "Your message",
    send: "Send request",
    address: "Address",
    hours: "Opening hours",
    hoursValue: "By appointment",
    maintenance: "Maintenance & repairs",
    follow: "Follow us",
  },
  footer: {
    tagline: "Heating, air conditioning and plumbing.",
    rights: "All rights reserved.",
    demo: "Demo mockup",
  },
};

const dictionaries: Record<Locale, Dict> = { fr, de, en };
export const getDict = (locale: Locale) => dictionaries[locale];
