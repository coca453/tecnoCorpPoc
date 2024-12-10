// src/data/footerData.ts

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface SectionLink {
  name: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: SectionLink[];
}

export interface FooterData {
  companyInfo: {
    logo: string;
    description: string;
  };
  socialLinks: SocialLink[];
  sections: FooterSection[];
  legalText: string;
}

export const footerData: FooterData = {
  companyInfo: {
    logo: "/assets/img/logo.webp",
    description:
      "Haciendo del mundo un lugar mejor a través de construir jerarquías elegantes.",
  },
  socialLinks: [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/company/tecna-corp/",
      icon: "mdi:linkedin", // Usaremos Iconify para los íconos
    },
  ],
  sections: [
    {
      title: "Sobre Nosotros",
      links: [
        {
          name: "Nuestra Empresa",
          href: "/sobrenosotros#about",
        },
        {
          name: "Trabaja con nosotros",
          href: "/sobrenosotros/trabajaconnosotros",
        },
      ],
    },
    {
      title: "Servicios",
      links: [
        {
          name: "Nuestros servicios",
          href: "/servicios",
        },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Clientes", href: "/clientes" },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          name: "Términos de servicio",
          href: "#",
        },
        {
          name: "Política de privacidad",
          href: "#",
        },
        { name: "Licencia", href: "#" },
      ],
    },
  ],
  legalText:
    "© 2024 Tecna Corp, Inc. Todos los derechos reservados.",
};
