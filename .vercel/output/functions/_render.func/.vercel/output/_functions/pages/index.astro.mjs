/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from '../chunks/astro/server_sBrkleij.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_B7M5m_9k.mjs';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const logos = [
    {
      src: "/assets/img/logos/1.webp",
      alt: "Logo oficial"
    },
    {
      src: "/assets/img/logos/5.webp",
      alt: "logo latinoAmerica"
    },
    {
      src: "/assets/img/logos/7.webp",
      alt: "logo Ecuador"
    },
    {
      src: "/assets/img/logos/9.webp",
      alt: " logo Bolivia"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-2 px-6 lg:px-8"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto max-w-2xl lg:max-w-none"> <div class="mx-auto mt-8 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-4"> ${logos.map((logo) => renderTemplate`<img class="col-span-2 max-h-24 w-full object-contain object-left lg:col-span-1"${addAttribute(logo.src, "src")}${addAttribute(logo.alt, "alt")}>`)} </div> </div> </div> </div>`;
}, "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/components/Logo/Logo.astro", void 0);

const features = [
  {
    name: "Ingeniería",
    description: "Ofrecemos estudios de Ingeniería Conceptual, Básica y de Detalle para la industria O&G, Minería y Energía, además de diagnósticos operacionales.",
    icon: "assets/img/iconos/Ingenieria.webp"
  },
  {
    name: "Plantas Llave en Mano",
    description: " Ejecutamos proyectos desde el diseño e ingeniería hasta la construcción y puesta en marcha bajo diversas modalidades contractuales.",
    icon: "assets/img/iconos/planta _llave_en_mano.webp"
  },
  {
    name: "Plantas Modulares",
    description: "Proveemos plantas modulares con menores costos, tiempos de construcción reducidos, alta calidad, y posibilidad de traslado y reubicación.",
    icon: "assets/img/iconos/Plantas_Modulares.webp"
  },
  {
    name: "Gerenciamiento de Proyectos",
    description: "Gestionamos la ingeniería, procura y contratación de la constructora, supervisando la correcta ejecución de la obra.",
    icon: "assets/img/iconos/gerenciamiento_de_proyectos.webp"
  },
  {
    name: "Fiscalización de Proyectos",
    description: "Supervisamos la ejecución constructiva para asegurar el cumplimiento técnico y de normas en representación del cliente.",
    icon: "assets/img/iconos/fiscalizacion_del_proyecto.webp"
  },
  {
    name: "Inspección",
    description: "Verificamos el cumplimiento de especificaciones técnicas y normas en materiales para transporte de hidrocarburos mediante procedimientos certificados.",
    icon: "assets/img/iconos/inspeccion.webp"
  },
  {
    name: "Automatización y Control",
    description: " Proveemos sistemas de control y seguridad de procesos, integrando marcas líderes y desarrollando soluciones de gestión de información.",
    icon: "assets/img/iconos/automatizacion_y_control.webp"
  },
  {
    name: "Operación y Mantenimiento",
    description: "Ofrecemos operación integral y mantenimiento especializado de instalaciones industriales, incluyendo servicios preventivos y correctivos.",
    icon: "assets/img/iconos/OPERACIÓN_Y_MANTENIMIENTO.webp"
  },
  {
    name: "Abandono de Facilidades",
    description: "Ofrecemos servicios de ingeniería, gestión de proyectos y mantenimiento de sistemas de transporte de hidrocarburos.",
    icon: "assets/img/iconos/Abandono_de_Facilidades.webp"
  }
];
const Feature = () => {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-base font-semibold leading-7 text-indigo-700", children: "Todo lo que necesitas" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: "Una plataforma integral de soluciones" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-7 text-gray-600", children: "En TECNA CORP, ofrecemos una amplia gama de servicios especializados para los sectores de Energía, Oil & Gas y Minería. Desde la ingeniería conceptual hasta la operación y mantenimiento, brindamos soluciones integrales que se adaptan a las necesidades de cada proyecto, asegurando calidad, eficiencia y un alto estándar técnico." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-3 lg:gap-y-16", children: features.map((feature) => /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: feature.icon,
          className: "h-12 w-12 flex-shrink-0",
          alt: feature.name
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900", children: feature.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: feature.description })
      ] })
    ] }, feature.name)) })
  ] });
};

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-gray-900"> <div class="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2"> <img class="h-full w-full object-cover" src="/assets/img/RH.webp" alt=""> <svg viewBox="0 0 926 676" aria-hidden="true" class="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"> <path fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)" fill-opacity=".4" d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"></path> <defs> <linearGradient id="60c3c621-93e0-4a09-a0e6-4c228a0116d8" x1="926.392" x2="-109.635" y1=".176" y2="321.024" gradientUnits="userSpaceOnUse"> <stop stop-color="#776FFF"></stop> <stop offset="1" stop-color="#FF4694"></stop> </linearGradient> </defs> </svg> </div> <div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40"> <div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32"> <h2 class="text-base/7 font-semibold text-indigo-400">
Soporte galardonado
</h2> <p class="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
Estamos aquí para ayudarte
</p> <p class="mt-6 text-base/7 text-gray-300">
En TECNA CORP, entendemos la importancia de un soporte confiable y
        eficiente. Nuestro equipo de expertos está listo para atender tus
        consultas y brindarte la asistencia que necesitas en cada fase de tus
        proyectos. Con una sólida experiencia en los sectores de Oil & Gas,
        Energía y Minería, estamos comprometidos en ofrecer soluciones
        personalizadas y efectivas para tus desafíos técnicos.
</p> <div class="mt-8"> <a href="/contacto" class="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Contáctanos</a> </div> </div> </div> </div>`;
}, "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/components/Contact/Contact.astro", void 0);

const $$CompanyHistory = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-900 py-24 sm:py-32"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5"> <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" width="158" height="48"> <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg" alt="Reform" width="158" height="48"> <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" width="158" height="48"> <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" width="158" height="48"> <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg" alt="Statamic" width="158" height="48"> </div> <div class="mt-16 flex justify-center"> <p class="relative rounded-full bg-gray-800 px-4 py-1.5 text-sm/6 text-gray-300"> <span class="hidden md:inline">Over 2500 companies use our tools to better their business.</span> <a href="#" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true"></span> Read our customer
          stories <span aria-hidden="true">&rarr;</span></a> </p> </div> </div> </div>`;
}, "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/components/CompanyHistory/CompanyHistory.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "TECNA Corp - Proyectos Oil&Gas y Energ\xEDa" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="overflow-hidden content-center"> <section> <div class="bg-gray-300"> <div class="relative"> <div class="mx-auto max-w-7xl"> <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl"> <svg class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-gray-300 lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"> <polygon points="0,0 90,0 50,100 0,100"></polygon> </svg> <div class="relative px-6 py-32 sm:py-24 lg:px-8 lg:py-64 lg:pr-0"> <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"> <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
TECNA CORP.
</h1> <p class="mt-6 text-lg leading-8 text-gray-600">
Especialista en ejecucutar proyectos en el sector Oil & Gas,
                    Generacion de Energía y Mineria
</p> <div class="mt-10 flex items-center gap-x-6"> <a href="/about" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sobre Nosotros</a> </div> </div> </div> </div> </div> <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"> <img class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full" src="/assets/img/home.webp" alt=""> </div> </div> </div> </section> ${renderComponent($$result2, "Container", $$Container, { "pBottom": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Logo", $$Logo, {})} ` })} ${renderComponent($$result2, "Container", $$Container, { "pBottom": false, "pTop": false }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Feature", Feature, {})} ` })} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "CompanyHistory", $$CompanyHistory, {})} </main> ` })}`;
}, "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/pages/index.astro", void 0);

const $$file = "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
