import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_hXa0vCZC.mjs';
import 'es-module-lexer';
import { e as decodeKey } from './chunks/astro/server_sBrkleij.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CxrTFbM3.css"},{"type":"external","src":"/_astro/about.CZqsbUDn.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CxrTFbM3.css"}],"routeData":{"route":"/certificaciones","isIndex":false,"type":"page","pattern":"^\\/certificaciones\\/?$","segments":[[{"content":"certificaciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificaciones.astro","pathname":"/certificaciones","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CxrTFbM3.css"},{"type":"external","src":"/_astro/about.CZqsbUDn.css"}],"routeData":{"route":"/clientes","isIndex":false,"type":"page","pattern":"^\\/clientes\\/?$","segments":[[{"content":"clientes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/clientes.astro","pathname":"/clientes","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CxrTFbM3.css"},{"type":"external","src":"/_astro/about.CZqsbUDn.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CxrTFbM3.css"},{"type":"external","src":"/_astro/about.CZqsbUDn.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/pages/clientes.astro",{"propagation":"none","containsHead":true}],["C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/certificaciones@_@astro":"pages/certificaciones.astro.mjs","\u0000@astro-page:src/pages/clientes@_@astro":"pages/clientes.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_DOS43tz6.mjs","@astrojs/react/client.js":"_astro/client.BtcZImop.js","C:/Users/GastonIsnardi/Desktop/Personal/tecnoCorpPoc/src/components/NavBar/NavBar":"_astro/NavBar.BglQCbqw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.CxrTFbM3.css","/_astro/about.CZqsbUDn.css","/favicon.svg","/_astro/client.BtcZImop.js","/_astro/index.rAXxrg0e.js","/_astro/NavBar.BglQCbqw.js","/assets/img/home.webp","/assets/img/logo.png","/assets/img/logo.webp","/assets/img/map.jpg","/assets/img/map.png","/assets/img/map.webp","/assets/img/map2.png","/assets/img/O-10343_UTGCA Caraguatatuba2.webp","/assets/img/OyM.webp","/assets/img/RH.webp","/assets/img/about/1.webp","/assets/img/about/2.webp","/assets/img/about/3.webp","/assets/img/about/4.webp","/assets/img/about/5.webp","/assets/img/about/6.webp","/assets/img/about/7.webp","/assets/img/logos/1.webp","/assets/img/logos/10.webp","/assets/img/logos/2.webp","/assets/img/logos/3.webp","/assets/img/logos/4.webp","/assets/img/logos/5.webp","/assets/img/logos/6.webp","/assets/img/logos/7.webp","/assets/img/logos/8.webp","/assets/img/logos/9.webp","/assets/img/Clientes/CNPC-Logo.png","/assets/img/Clientes/essac.png","/assets/img/Clientes/logo_inferior.png","/assets/img/Clientes/logo_solgas.png","/assets/img/Clientes/NEXA_BIG.png","/assets/img/Clientes/OIP (1).jpeg","/assets/img/Clientes/OIP (2).jpeg","/assets/img/Clientes/OIP (3).jpeg","/assets/img/Clientes/OIP (4).jpeg","/assets/img/Clientes/OIP.jpeg","/assets/img/Clientes/petroperu-logo.png","/assets/img/Clientes/R (1).png","/assets/img/Clientes/R.png","/assets/img/Clientes/Repsol-Logo.png","/assets/img/Clientes/ypfb-chaco.png","/assets/img/iconos/Abandono_de_Facilidades.webp","/assets/img/iconos/automatizacion_y_control.webp","/assets/img/iconos/fiscalizacion_del_proyecto.webp","/assets/img/iconos/gerenciamiento_de_proyectos.webp","/assets/img/iconos/Ingenieria.webp","/assets/img/iconos/inspeccion.webp","/assets/img/iconos/Mision.webp","/assets/img/iconos/OPERACIÓN_Y_MANTENIMIENTO.webp","/assets/img/iconos/planta _llave_en_mano.webp","/assets/img/iconos/Plantas_Modulares.webp","/assets/img/iconos/valores.webp","/assets/img/iconos/vision.webp"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"tMU+Ff/jQhvS78I5kgLprjZoOIh03yDQFhI8lN9JdUg=","experimentalEnvGetSecretEnabled":false});

export { manifest };
