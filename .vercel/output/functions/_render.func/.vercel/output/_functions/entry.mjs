import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_SXgQEG3L.mjs';
import { manifest } from './manifest_DOS43tz6.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/certificaciones.astro.mjs');
const _page3 = () => import('./pages/clientes.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/certificaciones.astro", _page2],
    ["src/pages/clientes.astro", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c6993cbf-27e4-464d-b5a0-8c2343764917",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
