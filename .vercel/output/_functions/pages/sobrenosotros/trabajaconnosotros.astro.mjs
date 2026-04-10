/* empty css                                              */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BoBkTzjS.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$Container } from '../../chunks/Container_CN5ZOm2H.mjs';
import { $ as $$TopSection } from '../../chunks/TopSection_CFtEwMGB.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Dq3QovKq.mjs';
export { renderers } from '../../renderers.mjs';

const CargaCV = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileUploaded(true);
    } else {
      setFileUploaded(false);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    Object.fromEntries(
      formData.entries()
    );
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      className: "bg-primary shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",
      onSubmit: handleSubmit,
      children: [
        /* @__PURE__ */ jsx("div", { className: "px-4 py-6 sm:p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-4", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "username",
                className: "block text-sm font-medium text-primary-contrast",
                children: "Nombre y Apellido"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("div", { className: "flex items-center rounded-md bg-primary-dark pl-3 outline outline-1 -outline-offset-1 outline-primary-contrast focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600", children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "username",
                id: "username",
                className: "block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm",
                placeholder: "Franco Acosta"
              }
            ) }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-full", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "about",
                className: "block text-sm font-medium text-primary-contrast",
                children: "Sobre vos"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(
              "textarea",
              {
                name: "about",
                id: "about",
                rows: 3,
                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-full", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "file-upload",
                className: "block text-sm font-medium text-primary-contrast",
                children: "Cargar CV"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "mt-2 flex justify-center rounded-lg border border-dashed border-primary-contrast/25 px-6 py-10", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "mx-auto size-12 text-gray-300",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z",
                      clipRule: "evenodd"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 flex text-sm text-gray-600", children: [
                /* @__PURE__ */ jsxs(
                  "label",
                  {
                    htmlFor: "file-upload",
                    className: "relative cursor-pointer rounded-md bg-secondary-dark p-2 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-secondary-contrast", children: "Upload a file" }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          id: "file-upload",
                          name: "file-upload",
                          type: "file",
                          className: "sr-only",
                          onChange: handleFileChange
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "pl-1 content-center text-primary-contrast", children: "or drag and drop" })
              ] }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: `mt-4 text-sm ${fileUploaded ? "text-green-600" : "text-red-600"}`,
                  children: fileUploaded ? "Archivo cargado correctamente." : "Por favor, cargue un archivo."
                }
              )
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8", children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            children: "Enviar"
          }
        ) })
      ]
    }
  );
};

const $$Trabajaconnosotros = createComponent(($$result, $$props, $$slots) => {
  const topTitle = "";
  const title = "Trabaja con nosotros";
  const descripcion = "Si te consideras identificado con los valores de nuestra marca y el sentido de pertenencia te alentamos a que formes parte de la corporaci\xF3n. Sumate al equipo de TECNA CORP";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Trabaja con Nosotros" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="overflow-hidden"> ${renderComponent($$result2, "TopSection", $$TopSection, { "title": title, "description": descripcion, "topTitle": topTitle })} ${renderComponent($$result2, "Container", $$Container, { "pBottom": true }, { "default": ($$result3) => renderTemplate` <div class="bg-secondary-dark p-10 rounded-xl"> <div class="space-y-10 divide-y divide-gray-900/10"> <div class="grid grid-cols-1 gap-x-8
          gap-y-8 md:grid-cols-3"> <div class="px-4 sm:px-0"> <h2 class="text-base/7 font-semibold text-secondary-contrast">
Perfil
</h2> <p class="mt-1 text-sm/6 text-gray-300">
Esta información será visible para
                los empleadores potenciales, así
                que asegúrate de compartir
                detalles que te destaquen como
                candidato, manteniendo siempre la
                discreción sobre datos personales
                sensibles. Comparte tus
                habilidades, experiencia y aquello
                que te haga el mejor para el
                puesto que buscas.
</p> </div> ${renderComponent($$result3, "CargaCV", CargaCV, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/components/AboutUs/CargaCV", "client:component-export": "CargaCV" })} </div> </div> </div> ` })} </main> ` })}`;
}, "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/sobrenosotros/trabajaconnosotros.astro", void 0);

const $$file = "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/sobrenosotros/trabajaconnosotros.astro";
const $$url = "/sobrenosotros/trabajaconnosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Trabajaconnosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
