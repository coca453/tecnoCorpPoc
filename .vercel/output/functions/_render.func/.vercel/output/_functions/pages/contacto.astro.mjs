/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from '../chunks/astro/server_sBrkleij.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_B7M5m_9k.mjs';
import { $ as $$TopSection } from '../chunks/TopSection_CjLssrsY.mjs';
export { renderers } from '../renderers.mjs';

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  const contactInfo = [
    {
      title: "Contacto Corporativo",
      email: "contacto@tecna-corp.com",
      phone: "+591 3 336 2263"
    },
    {
      title: "Contacto Comercial",
      email: "comercial@tecna-corp.com",
      phone: "+511 680 6897"
    },
    {
      title: "Website",
      email: "www.tecna-corp.com",
      phone: null
    }
  ];
  const locations = [
    {
      city: "Sede Corporativa - Bolivia",
      addressLine1: "TECNA BOLIVIA",
      addressLine2: "Torre ALAS I, Av. Las Ramblas, Piso 10, Santa Cruz de la Sierra, Barrio Equipetrol Norte, BO"
    },
    {
      city: "Filial - Per\xFA",
      addressLine1: "LATINTECNA S.A.",
      addressLine2: "Calle La Habana 192, San Isidro - Lima, Lima, PE"
    },
    {
      city: "Filial - Ecuador",
      addressLine1: "TECNA CORP del ECUADOR",
      addressLine2: "Av Luis Cordero E12-182 y Valladolid, Edif. Iturralde, P8, Quito, EC"
    },
    {
      city: "Sede - Argentina",
      addressLine1: "LATINTECNA S.A.",
      addressLine2: "Av\xAA Alicia Moreau de Justo 2030, 1er piso Of. 120, CABA, 1107, AR"
    },
    {
      city: "Sede - Espa\xF1a",
      addressLine1: "TECNA CORP SL.",
      addressLine2: "Paseo de la Castellana, num 144 ESC. 1, planta 6, 28046 Madrid, ES"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none"> <!-- Sección de Contacto --> <div class="grid grid-cols-1 gap-10 lg:grid-cols-3"> <div> <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
Ponte en contacto
</h2> <p class="mt-4 text-base/7 text-gray-600">
Si tienes alguna pregunta o necesitas información adicional sobre
          nuestros servicios, no dudes en comunicarte con nosotros. Nuestro
          equipo está listo para ayudarte a resolver tus dudas y brindarte el
          soporte que necesitas.
</p> </div> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"> ${contactInfo.map((contact) => renderTemplate`<div class="rounded-2xl bg-gray-200 p-10"> <h3 class="text-base/7 font-semibold text-gray-900"> ${contact.title} </h3> <dl class="mt-3 space-y-1 text-sm/6 text-gray-600"> <div> <dt class="sr-only">Email</dt> <dd> <a class="font-semibold text-indigo-600"${addAttribute(`mailto:${contact.email}`, "href")}> ${contact.email} </a> </dd> </div> ${contact.phone && renderTemplate`<div class="mt-1"> <dt class="sr-only">Phone number</dt> <dd>${contact.phone}</dd> </div>`} </dl> </div>`)} </div> </div> <!-- Sección de Ubicaciones --> <div class="grid grid-cols-1 gap-10 pt-16 lg:grid-cols-3"> <div> <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
Nuestras ubicaciones
</h2> <p class="mt-4 text-base/7 text-gray-600">
Con presencia en varios países de Latinoamérica y Europa, TECNA CORP
          está aquí para apoyarte en cada proyecto. Encuéntranos en Bolivia,
          Perú, Ecuador, Argentina, y España, donde cada una de nuestras sedes y
          filiales está preparada para ofrecer soluciones integrales en los
          sectores de Energía, Oil & Gas y Minería.
</p> </div> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"> ${locations.map((location) => renderTemplate`<div class="rounded-2xl bg-gray-200 p-10"> <h3 class="text-base/7 font-semibold text-gray-900"> ${location.city} </h3> <address class="mt-3 space-y-1 text-sm/6 not-italic text-gray-600"> <p>${location.addressLine1}</p> <p>${location.addressLine2}</p> </address> </div>`)} </div> </div> </div> </div>`;
}, "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/components/contactUs/ContactUs.astro", void 0);

const $$LetsTalk = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--
  This example requires some changes to your config:
  
  \`\`\`
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  \`\`\`
-->${maybeRenderHead()}<div class="relative isolate bg-gray-900"> <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2"> <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"> <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg"> <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2"> <svg class="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true"> <defs> <pattern id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse"> <path d="M130 200V.5M.5 .5H200" fill="none"></path> </pattern> </defs> <svg x="100%" y="-1" class="overflow-visible fill-gray-800/20"> <path d="M-470.5 0h201v201h-201Z" stroke-width="0"></path> </svg> <rect width="100%" height="100%" stroke-width="0" fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"></rect> </svg> <div class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]" aria-hidden="true"> <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)"></div> </div> </div> <h2 class="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
Ponte en contacto
</h2> <p class="mt-6 text-lg/8 text-gray-300">
Si tienes alguna pregunta o necesitas información sobre nuestros
          servicios, no dudes en comunicarte con nosotros. Estamos aquí para
          ayudarte.
</p> <dl class="mt-10 space-y-4 text-base/7 text-gray-300"> <div class="flex gap-x-4"> <dt class="flex-none"> <span class="sr-only">Dirección</span> <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"></path> </svg> </dt> <dd>545 Mavis Island<br>Chicago, IL 99191</dd> </div> <div class="flex gap-x-4"> <dt class="flex-none"> <span class="sr-only">Teléfono</span> <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path> </svg> </dt> <dd> <a class="hover:text-white" href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a> </dd> </div> <div class="flex gap-x-4"> <dt class="flex-none"> <span class="sr-only">Email</span> <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path> </svg> </dt> <dd>contacto@tecna-corp.com</dd> </div> </dl> </div> </div> <form action="#" method="POST" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"> <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg"> <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"> <div> <label for="first-name" class="block text-sm/6 font-semibold text-white">Nombre</label> <div class="mt-2.5"> <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"> </div> </div> <div> <label for="last-name" class="block text-sm/6 font-semibold text-white">Apellido</label> <div class="mt-2.5"> <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"> </div> </div> <div class="sm:col-span-2"> <label for="email" class="block text-sm/6 font-semibold text-white">Email</label> <div class="mt-2.5"> <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"> </div> </div> <div class="sm:col-span-2"> <label for="phone-number" class="block text-sm/6 font-semibold text-white">Teléfono</label> <div class="mt-2.5"> <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"> </div> </div> <div class="sm:col-span-2"> <label for="message" class="block text-sm/6 font-semibold text-white">Mensaje</label> <div class="mt-2.5"> <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"></textarea> </div> </div> </div> <div class="mt-8 flex justify-end"> <button type="submit" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Enviar mensaje</button> </div> </div> </form> </div> </div>`;
}, "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/components/contactUs/LetsTalk.astro", void 0);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const topTitle = "Obt\xE9n la ayuda que necesitas";
  const title = "Centro de Contacto";
  const descripcion = "Estamos aqu\xED para responder tus preguntas y brindarte el soporte necesario en cada etapa de tu proyecto. Si tienes alguna consulta o requieres asistencia, no dudes en comunicarte con nosotros.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopSection", $$TopSection, { "title": title, "description": descripcion, "topTitle": topTitle })} ${renderComponent($$result2, "Container", $$Container, { "pBottom": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContactUs", $$ContactUs, {})} ` })} ${renderComponent($$result2, "LetsTalk", $$LetsTalk, {})} ` })}`;
}, "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };