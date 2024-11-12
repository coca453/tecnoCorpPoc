import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro } from './astro/server_sBrkleij.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$TopSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TopSection;
  const { description, title, topTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="px-6 py-24 sm:py-32 lg:px-8"> <div class="mx-auto max-w-2xl text-center"> <p class="text-base/7 font-semibold text-indigo-700"> ${topTitle} </p> <h2 class="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"> ${title} </h2> <p class="mt-8 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8"> ${description} </p> </div> </div>`;
}, "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/components/TopSection/TopSection.astro", void 0);

export { $$TopSection as $ };
