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
      name: "Facebook",
      href: "#",
      icon: "mdi:facebook", // Usaremos Iconify para los íconos
    },
    {
      name: "Instagram",
      href: "#",
      icon: "mdi:instagram",
    },
    {
      name: "X",
      href: "#",
      icon: "mdi:twitter", // 'X' es el nuevo nombre de Twitter
    },
    {
      name: "GitHub",
      href: "#",
      icon: "mdi:github",
    },
    {
      name: "YouTube",
      href: "#",
      icon: "mdi:youtube",
    },
  ],
  sections: [
    {
      title: "Soluciones",
      links: [
        { name: "Marketing", href: "#" },
        { name: "Analíticas", href: "#" },
        { name: "Automatización", href: "#" },
        { name: "Comercio", href: "#" },
        { name: "Perspectivas", href: "#" },
      ],
    },
    {
      title: "Soporte",
      links: [
        { name: "Enviar ticket", href: "#" },
        { name: "Documentación", href: "#" },
        { name: "Guías", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Acerca de", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Empleos", href: "#" },
        { name: "Prensa", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Términos de servicio", href: "#" },
        { name: "Política de privacidad", href: "#" },
        { name: "Licencia", href: "#" },
      ],
    },
  ],
  legalText: "© 2024 Tu Empresa, Inc. Todos los derechos reservados.",
};
