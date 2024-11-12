import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderSlot, a as createAstro, s as spreadAttributes, b as renderComponent, u as unescapeHTML, F as Fragment, g as renderHead } from './astro/server_sBrkleij.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { getIconData, iconToSVG } from '@iconify/utils';

const $$Astro$2 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Container;
  const { pTop = false, pBottom = false } = Astro2.props;
  const paddingClass = pTop && pBottom ? "py-24 sm:py-32" : pTop ? "pt-24 sm:pt-32" : pBottom ? "pb-24 sm:pb-32" : "";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(paddingClass, "class")}> <div class="mx-auto max-w-7xl px-6 lg:px-8"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/components/Container/Container.astro", void 0);

const navigation = [
  { name: "Quiénes somos", href: "about" },
  { name: "Contacto", href: "contacto" }
];
const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-colors duration-300 p-5 ${hasScrolled ? "bg-gray-300 shadow-lg" : "bg-transparent"} `,
      children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0", children: /* @__PURE__ */ jsxs(
          "nav",
          {
            "aria-label": "Global",
            className: "flex items-center justify-between lg:justify-start",
            children: [
              /* @__PURE__ */ jsxs("a", { href: "/", className: "-m-1.5 p-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Your Company" }),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    alt: "tecnaCorp Logo",
                    src: "/assets/img/logo.webp",
                    className: "h-8 w-auto"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setMobileMenuOpen(true),
                  className: "-m-2.5 rounded-md p-2.5  lg:hidden",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
                    /* @__PURE__ */ jsx(Bars3Icon, { "aria-hidden": "true", className: "h-6 w-6" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "hidden lg:ml-12 lg:flex lg:gap-x-14", children: navigation.map((item) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: item.href,
                  className: "text-sm font-semibold leading-6 text-gray-900",
                  children: item.name
                },
                item.name
              )) })
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsxs(
          Dialog,
          {
            open: mobileMenuOpen,
            onClose: setMobileMenuOpen,
            className: "lg:hidden",
            children: [
              /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50" }),
              /* @__PURE__ */ jsxs(DialogPanel, { className: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("a", { href: "#", className: "-m-1.5 p-1.5", children: [
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Your Company" }),
                    /* @__PURE__ */ jsx("img", { alt: "", src: "/assets/img/logo.webp", className: "h-8 w-auto" })
                  ] }),
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setMobileMenuOpen(false),
                      className: "-m-2.5 rounded-md p-2.5 text-gray-700",
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" }),
                        /* @__PURE__ */ jsx(XMarkIcon, { "aria-hidden": "true", className: "h-6 w-6" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ jsxs("div", { className: "-my-6 divide-y divide-gray-500/10", children: [
                  /* @__PURE__ */ jsx("div", { className: "space-y-2 py-6", children: navigation.map((item) => /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: item.href,
                      className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                      children: item.name
                    },
                    item.name
                  )) }),
                  /* @__PURE__ */ jsx("div", { className: "py-6", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#",
                      className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                      children: "Log in"
                    }
                  ) })
                ] }) })
              ] })
            ]
          }
        )
      ]
    }
  );
};

const footerData = {
  companyInfo: {
    logo: "/assets/img/logo.webp",
    description: "Haciendo del mundo un lugar mejor a través de construir jerarquías elegantes."
  },
  socialLinks: [
    {
      name: "Facebook",
      href: "#",
      icon: "mdi:facebook"
      // Usaremos Iconify para los íconos
    },
    {
      name: "Instagram",
      href: "#",
      icon: "mdi:instagram"
    },
    {
      name: "X",
      href: "#",
      icon: "mdi:twitter"
      // 'X' es el nuevo nombre de Twitter
    },
    {
      name: "GitHub",
      href: "#",
      icon: "mdi:github"
    },
    {
      name: "YouTube",
      href: "#",
      icon: "mdi:youtube"
    }
  ],
  sections: [
    {
      title: "Soluciones",
      links: [
        { name: "Marketing", href: "#" },
        { name: "Analíticas", href: "#" },
        { name: "Automatización", href: "#" },
        { name: "Comercio", href: "#" },
        { name: "Perspectivas", href: "#" }
      ]
    },
    {
      title: "Soporte",
      links: [
        { name: "Enviar ticket", href: "#" },
        { name: "Documentación", href: "#" },
        { name: "Guías", href: "#" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Acerca de", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Empleos", href: "#" },
        { name: "Prensa", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Términos de servicio", href: "#" },
        { name: "Política de privacidad", href: "#" },
        { name: "Licencia", href: "#" }
      ]
    }
  ],
  legalText: "© 2024 Tu Empresa, Inc. Todos los derechos reservados."
};


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$1 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const { companyInfo, socialLinks, sections, legalText } = footerData;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-300"> <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32"> <div class="xl:grid xl:grid-cols-3 xl:gap-8"> <!-- Información de la empresa --> <div class="space-y-8"> <img class="h-9"${addAttribute(companyInfo.logo, "src")} alt="Nombre de la empresa"> <p class="text-balance text-sm/6 text-gray-600"> ${companyInfo.description} </p> <!-- Enlaces a redes sociales --> <div class="flex gap-x-6"> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} class="text-gray-600 hover:text-gray-800"> <span class="sr-only">${social.name}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": social.icon, "class": "h-6 w-6", "aria-hidden": "true" })} </a>`)} </div> </div> <!-- Secciones del pie de página --> <div class="mt-16 grid grid-cols-4 gap-8 xl:col-span-2 xl:mt-0"> ${sections.map((section) => renderTemplate`<div class="md:grid md:grid-cols-2 md:gap-8"> <div> <h2 class="text-sm/6 font-semibold text-gray-900"> ${section.title} </h2> <ul role="list" class="mt-6 space-y-4"> ${section.links.map((link) => renderTemplate`<li class="text-nowrap"> <a${addAttribute(link.href, "href")} class="text-sm/6 text-gray-600 hover:text-gray-900"> ${link.name} </a> </li>`)} </ul> </div> </div>`)} </div> </div> <!-- Texto legal --> <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24"> <p class="text-sm/6 text-gray-600"> ${legalText} </p> </div> </div> </footer>`;
}, "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/components/Footer/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="antialiased bg-gray-300"> ${renderComponent($$result, "NavBar", NavBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/components/NavBar/NavBar", "client:component-export": "NavBar" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/layouts/Layout.astro", void 0);

export { $$Container as $, $$Layout as a };