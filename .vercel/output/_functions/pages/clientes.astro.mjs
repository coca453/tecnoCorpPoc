/* empty css                                           */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BoBkTzjS.mjs';
import { jsx } from 'react/jsx-runtime';
import { $ as $$Container } from '../chunks/Container_CN5ZOm2H.mjs';
import { $ as $$TopSection } from '../chunks/TopSection_CFtEwMGB.mjs';
import { $ as $$Layout } from '../chunks/Layout_Dq3QovKq.mjs';
export { renderers } from '../renderers.mjs';

const logos = [
  { src: "/assets/img/Clientes/essac.png", alt: "Essac" },
  { src: "/assets/img/Clientes/CNPC.png", alt: "CNPC" },
  { src: "/assets/img/Clientes/conduto.png", alt: "Conduto" },
  { src: "/assets/img/Clientes/frontera.png", alt: "Frontera Energy" },
  { src: "/assets/img/Clientes/halliburton.png", alt: "Halliburton" },
  { src: "/assets/img/Clientes/ipfb-andina.png", alt: "YPFB Andina" },
  { src: "/assets/img/Clientes/NEXA.png", alt: "Nexa Resources" },
  { src: "/assets/img/Clientes/petrobras.png", alt: "Petrobras" },
  { src: "/assets/img/Clientes/petroecuador.png", alt: "Petroecuador" },
  { src: "/assets/img/Clientes/petroperu.png", alt: "Petroperú" },
  { src: "/assets/img/Clientes/Repsol.png", alt: "Repsol" },
  { src: "/assets/img/Clientes/solgas.png", alt: "Solgas" },
  { src: "/assets/img/Clientes/total.png", alt: "TotalEnergies" },
  { src: "/assets/img/Clientes/veolia.png", alt: "Veolia" },
  { src: "/assets/img/Clientes/ypfb-chaco.png", alt: "YPFB Chaco" },
  { src: "/assets/img/Clientes/ypfb.png", alt: "YPFB" },
  { src: "/assets/img/Clientes/petrotal.webp", alt: "PetroTal" },
  { src: "/assets/img/Clientes/aesa.webp", alt: "AESA" },
  { src: "/assets/img/Clientes/pacificRubiales.webp", alt: "Pacific Rubiales" },
  { src: "/assets/img/Clientes/marcobre.webp", alt: "Marcobre" },
  { src: "/assets/img/Clientes/geopark.webp", alt: "GeoPark" },
  { src: "/assets/img/Clientes/Cepsa.webp", alt: "Cepsa" },
  { src: "/assets/img/Clientes/pluspetrol.webp", alt: "Pluspetrol" },
  { src: "/assets/img/Clientes/ypfRefinacion.webp", alt: "YPF Refinación" },
  { src: "/assets/img/Clientes/Shell.webp", alt: "Shell" },
  { src: "/assets/img/Clientes/petrolia.webp", alt: "Petrolia" }
];
const LogoSlider = () => {
  return /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:gap-8 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]", children: logos.map((logo, index) => /* @__PURE__ */ jsx(
    "img",
    {
      className: "w-52 h-40 object-contain mx-auto",
      src: logo.src,
      alt: logo.alt,
      loading: "lazy"
    },
    index
  )) });
};

const $$Clientes = createComponent(($$result, $$props, $$slots) => {
  const topTitle = "Empresas que conf\xEDan en nosotros";
  const title = "Nuestros Clientes";
  const descripcion = "Nos enorgullece colaborar con empresas l\xEDderes en los sectores de Energ\xEDa, Oil & Gas y Miner\xEDa. A lo largo de m\xE1s de 25 a\xF1os, hemos establecido relaciones s\xF3lidas basadas en la confianza y en un compromiso inquebrantable con la excelencia en cada proyecto.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestros Clientes | TECNA CORP", "description": "Empresas l\xEDderes conf\xEDan en TECNA CORP para sus proyectos. 25+ a\xF1os colaborando con empresas de Oil & Gas, Miner\xEDa y Energ\xEDa en Latinoam\xE9rica." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "TopSection", $$TopSection, { "title": title, "description": descripcion, "topTitle": topTitle })} ${renderComponent($$result2, "Container", $$Container, { "pTop": false, "pBottom": true }, { "default": ($$result3) => renderTemplate` <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto max-w-2xl lg:max-w-none"> ${renderComponent($$result3, "LogoSlider", LogoSlider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/components/clientes/LogoSlider", "client:component-export": "default" })} </div> </div> ` })} </main> ` })}`;
}, "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/clientes.astro", void 0);

const $$file = "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/clientes.astro";
const $$url = "/clientes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Clientes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
