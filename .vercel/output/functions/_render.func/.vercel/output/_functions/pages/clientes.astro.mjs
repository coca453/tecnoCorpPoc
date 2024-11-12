/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_sBrkleij.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_B7M5m_9k.mjs';
import { $ as $$TopSection } from '../chunks/TopSection_CjLssrsY.mjs';
export { renderers } from '../renderers.mjs';

const $$Clientes = createComponent(($$result, $$props, $$slots) => {
  const logos = [
    {
      src: "https://tailwindui.com/plus/img/logos/transistor-logo-gray-900.svg",
      alt: "Transistor"
    },
    {
      src: "https://tailwindui.com/plus/img/logos/reform-logo-gray-900.svg",
      alt: "Reform"
    },
    {
      src: "https://tailwindui.com/plus/img/logos/tuple-logo-gray-900.svg",
      alt: "Tuple"
    },
    {
      src: "https://tailwindui.com/plus/img/logos/savvycal-logo-gray-900.svg",
      alt: "SavvyCal"
    },
    {
      src: "https://tailwindui.com/plus/img/logos/statamic-logo-gray-900.svg",
      alt: "Statamic"
    }
  ];
  const topTitle = "Empresas que conf\xEDan en nosotros";
  const title = "Nuestros Clientes";
  const descripcion = "Nos enorgullece colaborar con empresas l\xEDderes en los sectores de Energ\xEDa, Oil & Gas y Miner\xEDa. A lo largo de m\xE1s de 20 a\xF1os, hemos establecido relaciones s\xF3lidas basadas en la confianza y en un compromiso inquebrantable con la excelencia en cada proyecto.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "TopSection", $$TopSection, { "title": title, "description": descripcion, "topTitle": topTitle })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto max-w-2xl lg:max-w-none"> <h2 class="text-lg/8 font-semibold text-gray-900">
Empresas que nos eligen:
</h2> <div class="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5"> ${logos.map((logo) => renderTemplate`<img class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"${addAttribute(logo.src, "src")}${addAttribute(logo.alt, "alt")} width="158" height="48">`)} </div> </div> </div> ` })} </main> ` })}`;
}, "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/pages/clientes.astro", void 0);

const $$file = "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/pages/clientes.astro";
const $$url = "/clientes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Clientes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
