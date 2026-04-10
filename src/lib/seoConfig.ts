/**
 * Configuración centralizada de SEO para TECNA CORP
 */

export const siteConfig = {
  title: "TECNA CORP",
  description:
    "TECNA CORP: Holding especializado en Tecnología, Ingeniería, Puesta en Marcha y Operación y Mantenimiento en los sectores de Oil & Gas, Minería y Energía, con más de 20 años de experiencia en Latinoamérica.",
  url: "https://www.tecna-corp.com",
  image: "https://www.tecna-corp.com/assets/images/og-image.webp",
  author: "TECNA CORP",
  twitterHandle: "@tecnacorp",
  keywords: [
    "TECNA CORP",
    "Ingeniería",
    "Oil & Gas",
    "Minería",
    "Energía",
    "Puesta en Marcha",
    "Operación y Mantenimiento",
    "Proyectos Llave en Mano",
    "Plantas Modulares",
    "Automatización y Control",
  ],
};

export const pageMetadata = {
  home: {
    title: "TECNA CORP | Soluciones en Ingeniería Industrial",
    description:
      "Soluciones integrales en ingeniería, puesta en marcha y operación para Oil & Gas, Minería y Energía en Latinoamérica.",
  },
  servicios: {
    title: "Servicios | TECNA CORP",
    description:
      "Descubre nuestros servicios de ingeniería, puesta en marcha, operación y mantenimiento en sectores clave.",
  },
  sobrenosotros: {
    title: "Sobre Nosotros | TECNA CORP",
    description:
      "Conoce la historia, misión y equipo de TECNA CORP. Más de 20 años de experiencia en Latinoamérica.",
  },
  clientes: {
    title: "Nuestros Clientes | TECNA CORP",
    description:
      "Conozca las empresas que confían en TECNA CORP para sus proyectos de ingeniería e implementación.",
  },
  certificaciones: {
    title: "Certificaciones | TECNA CORP",
    description:
      "Certificaciones internacionales y acreditaciones que validan nuestra experiencia y competencia.",
  },
  contacto: {
    title: "Contacto | TECNA CORP",
    description:
      "Ponte en contacto con nosotros. Estamos disponibles en Bolivia, Perú, Ecuador, Argentina y España.",
  },
  proyectos: {
    title: "Proyectos | TECNA CORP",
    description:
      "Casos de éxito y proyectos realizados en Oil & Gas, Minería y Energía.",
  },
};

/**
 * Structured Data (Schema.org) para la organización
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TECNA CORP",
  url: "https://www.tecna-corp.com",
  logo: "https://www.tecna-corp.com/assets/images/logo.png",
  description:
    "TECNA CORP: Holding especializado en Ingeniería, Tecnología y Operación en los sectores de Oil & Gas, Minería y Energía.",
  sameAs: [
    "https://www.linkedin.com/company/tecna-corp",
    "https://www.facebook.com/tecna.corp",
    "https://twitter.com/tecnacorp",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+591 3 336 2263",
    email: "contacto@tecna-corp.com",
    contactType: "customer service",
    areaServed: ["Bolivia", "Perú", "Ecuador", "Argentina", "España"],
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Av. Las Ramblas, Piso 10",
      addressLocality: "Santa Cruz de la Sierra",
      addressRegion: "Equipetrol Norte",
      addressCountry: "BO",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Calle La Habana 192",
      addressLocality: "San Isidro, Lima",
      addressCountry: "PE",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Av Luis Cordero E12-182 y Valladolid",
      addressLocality: "Quito",
      addressCountry: "EC",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Avª Alicia Moreau de Justo 2030, 1er piso Of. 120",
      addressLocality: "CABA",
      postalCode: "1107",
      addressCountry: "AR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Paseo de la Castellana, num 144 ESC. 1, planta 6",
      addressLocality: "Madrid",
      postalCode: "28046",
      addressCountry: "ES",
    },
  ],
};

/**
 * BreadcrumbList para navegación estructurada
 */
export const createBreadcrumb = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};
