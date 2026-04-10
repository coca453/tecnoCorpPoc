/* empty css                                           */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BoBkTzjS.mjs';
import { $ as $$Layout } from '../chunks/Layout_Dq3QovKq.mjs';
export { renderers } from '../renderers.mjs';

const $$Proyectos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Proyectos | TECNA CORP", "description": "Casos de \xE9xito y proyectos realizados en Oil & Gas, Miner\xEDa y Energ\xEDa. Soluciones llave en mano implementadas con excelencia." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-md w-full text-center"> <h1 class="text-4xl font-bold text-primary mb-4">Próximamente</h1> <p class="text-lg text-gray-600 mb-8">
Estamos preparando una sección con nuestros mejores proyectos en Oil & Gas, Minería y Energía.
</p> <a href="/" class="inline-block bg-primary hover:bg-primary-medium text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
Volver al inicio
</a> </div> </main> ` })}`;
}, "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/proyectos.astro", void 0);

const $$file = "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/proyectos.astro";
const $$url = "/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proyectos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
