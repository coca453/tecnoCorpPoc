import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_lV-sv5u-.mjs';
import { manifest } from './manifest_BSzo7i8a.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/certificaciones.astro.mjs');
const _page2 = () => import('./pages/clientes.astro.mjs');
const _page3 = () => import('./pages/contacto.astro.mjs');
const _page4 = () => import('./pages/proyectos.astro.mjs');
const _page5 = () => import('./pages/servicios/sectores.astro.mjs');
const _page6 = () => import('./pages/servicios.astro.mjs');
const _page7 = () => import('./pages/sobrenosotros/trabajaconnosotros.astro.mjs');
const _page8 = () => import('./pages/sobrenosotros.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.18.1_@types+node@25_34dc442f50f794485b82dc3aa1fe807d/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/certificaciones.astro", _page1],
    ["src/pages/clientes.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/proyectos.astro", _page4],
    ["src/pages/servicios/sectores.astro", _page5],
    ["src/pages/servicios/index.astro", _page6],
    ["src/pages/sobrenosotros/trabajaconnosotros.astro", _page7],
    ["src/pages/sobrenosotros/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cfc5b080-cac2-4a87-bb9d-e5b90487ef32",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
