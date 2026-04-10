/* empty css                                           */
import { f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_BoBkTzjS.mjs';
import { $ as $$Container } from '../chunks/Container_CN5ZOm2H.mjs';
import { $ as $$TopSection } from '../chunks/TopSection_CFtEwMGB.mjs';
import { $ as $$Layout } from '../chunks/Layout_Dq3QovKq.mjs';
export { renderers } from '../renderers.mjs';

const $$CertificacionesBlog = createComponent(($$result, $$props, $$slots) => {
  const posts = [
    {
      date: "2024-04-24",
      category: "Certificacion",
      image: "assets/img/certificaciones/3.webp",
      title: "Certificado ISO-9001",
      description: "ISO 9001 es una norma internacional que especifica los requisitos para un sistema de gesti\xF3n de la calidad, enfoc\xE1ndose en la eficiencia de los procesos y la satisfacci\xF3n del cliente.",
      file: "assets/docs/9001.pdf"
    },
    {
      date: "2024-04-24",
      category: "Certificacion",
      image: "assets/img/certificaciones/1.webp",
      title: "Certificado ISO-14001",
      description: "ISO 14001 establece los requisitos para un sistema de gesti\xF3n ambiental, ayudando a las organizaciones a mejorar su desempe\xF1o ambiental y reducir el impacto negativo en el medio ambiente.",
      file: "assets/docs/14001.pdf"
    },
    {
      date: "2024-04-24",
      category: "Certificacion",
      image: "assets/img/certificaciones/2.webp",
      title: "Certificado ISO-45001",
      description: "ISO 45001 es una norma internacional que especifica los requisitos para un sistema de gesti\xF3n de la salud y seguridad en el trabajo, destinada a mejorar la seguridad de los trabajadores y reducir riesgos laborales.",
      file: "assets/docs/45001.pdf"
    }
    // Agrega más objetos de post aquí
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"> ${posts.map((post) => renderTemplate`<article class="flex flex-col items-start justify-between"> <div class="relative w-full"> <a${addAttribute(post.file, "href")}> <img${addAttribute(post.image, "src")} alt="" class=""> <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div> </a> </div> <div class="max-w-xl"> <div class="mt-8 flex items-center gap-x-4 text-xs"> <time${addAttribute(post.date, "datetime")} class="text-gray-700"> ${post.date} </time> <a${addAttribute(post.file, "href")} class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"> ${post.category} </a> </div> <div class="group relative"> <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600"> <a${addAttribute(post.file, "href")}> <span class="absolute inset-0"></span> ${post.title} </a> </h3> <p class="mt-5 text-justify text-sm/6 text-gray-600 "> ${post.description} </p> </div> </div> </article>`)} </div> </div>`;
}, "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/components/Certificaciones/CertificacionesBlog.astro", void 0);

const $$Cssa = createComponent(($$result, $$props, $$slots) => {
  const gestionCSSA = [
    [
      {
        titulo: "Compromiso Integral en Gesti\xF3n CSSA",
        descripcion: "TECNA CORP observa primordialmente la Calidad, Seguridad, Salud y Medio Ambiente en la prestaci\xF3n de sus servicios, entendiendo que es la base para una buena gesti\xF3n y con ello estar\xE1 en la capacidad de implementar, integrar, operar y mejorar eficiencia en la implementaci\xF3n que contribuyan al cumplimiento de los objetivos y requisitos del Cliente en estricto cumplimiento a la normativa vigente.",
        gestionVector: [
          "Conocer y aplicar la legislaci\xF3n relativa a seguridad, medio ambiente y riesgos laborales tanto locales como internacionales.",
          "Identificar factores de riesgo laborales y desarrollar estrategias de prevenci\xF3n y control.",
          "Realizar operaciones seg\xFAn c\xF3digos y normas locales e internacionales.",
          "Desarrollar procedimientos espec\xEDficos de Calidad, Seguridad, Salud Ocupacional y Medio Ambiente, adaptados a los lineamientos del Cliente.",
          "Eventualmente realizar auditor\xEDas de procesos integrados de gesti\xF3n de Calidad, Seguridad y Medio Ambiente, bajo las directrices de las normas ISO 9001, ISO 14001 e ISO 45001.",
          "Sobre las bases de las auditor\xEDas se procede a dise\xF1ar, planificar, implementar, mantener y mejorar sistemas de gesti\xF3n de calidad, gesti\xF3n de seguridad, gesti\xF3n de salud ocupacional y gesti\xF3n ambiental.",
          "Integrar sistemas de gesti\xF3n y Responsabilidad Social Empresarial."
        ]
      }
    ],
    [
      {
        titulo: "Responsabilidad Social Empresarial",
        descripcion: "En el \xE1mbito de Responsabilidad Social Empresarial, TECNA CORP sigue los est\xE1ndares que aplica el Cliente, priorizando el mantenimiento y la aplicaci\xF3n de pr\xE1cticas aceptables de relacionamiento.",
        gestionVector: [
          "El trabajo de Mano de Obra local circunscrita al \xE1rea de influencia de los servicios.",
          "Promover pol\xEDticas salariales acordes al mercado y a la realidad econ\xF3mica regional.",
          "Priorizar la contrataci\xF3n y consumo de servicios y productos locales en el \xE1rea de influencia del servicio.",
          "Promover el buen relacionamiento con actores sociales locales evitando pr\xE1cticas discriminatorias.",
          "Promover las buenas pr\xE1cticas basadas en los principios \xE9ticos de la empresa."
        ]
      }
    ]
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-4xl sm:text-center"> <h2 class="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-6xl">
Compromiso con la Calidad y Seguridad
</h2> <p class="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
En TECNA CORP, garantizamos una gestión de
    Calidad, Seguridad, Salud y Medio Ambiente de
    excelencia. Cumplimos con los estándares
    locales e internacionales, asegurando
    soluciones que se alinean con las necesidades
    del cliente y respetan la normativa vigente.
    Nuestra prioridad es crear un impacto positivo
    y sostenible a través de prácticas
    responsables y eficientes.
</p> </div> <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-400 sm:mt-20 lg:mx-0 lg:flex lg:flex-col lg:max-w-none"> <div class="p-8 sm:p-10 lg:flex-auto"> ${gestionCSSA.map(
    (grupo) => grupo.map((gestion) => renderTemplate`<h3 class="text-3xl font-semibold tracking-tight text-gray-900">${gestion.titulo}</h3>
          <div> <p class="mt-6 text-base/7 text-gray-600"> ${gestion.descripcion} </p> <div class="mt-10 flex items-center gap-x-4"> <h4 class="flex-none text-sm/6 font-semibold text-secondary">
Lo que ofrecemos:
</h4> <div class="h-px flex-auto bg-gray-400"></div> </div> <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6 mb-8"> ${gestion.gestionVector.map(
      (ofrecemos, index) => renderTemplate`<li class="flex gap-x-3"> <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd"></path> </svg> ${ofrecemos} </li>`
    )} </ul> </div>`)
  )} </div> </div>`;
}, "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/components/Certificaciones/Cssa.astro", void 0);

const $$Certificaciones = createComponent(($$result, $$props, $$slots) => {
  const topTitle = "Compromiso con la Calidad y la Seguridad";
  const title = "Nuestras Certificaciones";
  const descripcion = "TECNA CORP cuenta con certificaciones internacionales, incluyendo ISO 9001 para gesti\xF3n de calidad, ISO 14001 para gesti\xF3n ambiental y ISO 45001 para seguridad y salud ocupacional. Estas certificaciones reflejan nuestro compromiso con los m\xE1s altos est\xE1ndares en cada proyecto.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Certificaciones | TECNA CORP", "description": "Certificaciones internacionales ISO 9001, ISO 14001 e ISO 45001. Compromiso con calidad, ambiente y seguridad en todos nuestros proyectos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="overflow-hidden"> ${renderComponent($$result2, "TopSection", $$TopSection, { "title": title, "description": descripcion, "topTitle": topTitle })} ${renderComponent($$result2, "Container", $$Container, { "pBottom": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CertificacionesBlog", $$CertificacionesBlog, {})} ` })} ${renderComponent($$result2, "Container", $$Container, { "pBottom": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Cssa", $$Cssa, {})} ` })} </main> ` })}`;
}, "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/certificaciones.astro", void 0);

const $$file = "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/certificaciones.astro";
const $$url = "/certificaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Certificaciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
