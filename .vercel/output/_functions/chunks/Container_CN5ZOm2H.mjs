import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, l as renderSlot, r as renderTemplate } from './astro/server_BoBkTzjS.mjs';

const $$Astro = createAstro("https://www.tecna-corp.com");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Container;
  const { pTop = false, pBottom = false, hr = false } = Astro2.props;
  const paddingClass = pTop && pBottom ? "py-24 sm:py-32" : pTop ? "pt-24 sm:pt-32" : pBottom ? "pb-24 sm:pb-32" : "";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(paddingClass, "class")}> <div class="mx-auto max-w-7xl px-6 lg:px-8"> ${renderSlot($$result, $$slots["default"])} </div> ${hr && renderTemplate`<div class="mt-4 mx-auto max-w-7xl px-2 lg:px-2"> <hr> </div>`} </section>`;
}, "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/components/Container/Container.astro", void 0);

export { $$Container as $ };
