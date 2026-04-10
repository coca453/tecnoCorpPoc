import { p as decodeKey } from './chunks/astro/server_BoBkTzjS.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DAr8iJJ6.mjs';

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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/","cacheDir":"file:///D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/node_modules/.astro/","outDir":"file:///D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/dist/","srcDir":"file:///D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/","publicDir":"file:///D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/public/","buildClientDir":"file:///D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/dist/client/","buildServerDir":"file:///D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.18.1_@types+node@25_34dc442f50f794485b82dc3aa1fe807d/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificaciones.Ch7oRoPK.css"},{"type":"external","src":"/_astro/certificaciones.Bz8KhkrV.css"}],"routeData":{"route":"/certificaciones","isIndex":false,"type":"page","pattern":"^\\/certificaciones\\/?$","segments":[[{"content":"certificaciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificaciones.astro","pathname":"/certificaciones","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificaciones.Ch7oRoPK.css"},{"type":"external","src":"/_astro/certificaciones.Bz8KhkrV.css"}],"routeData":{"route":"/clientes","isIndex":false,"type":"page","pattern":"^\\/clientes\\/?$","segments":[[{"content":"clientes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/clientes.astro","pathname":"/clientes","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificaciones.Ch7oRoPK.css"},{"type":"external","src":"/_astro/certificaciones.Bz8KhkrV.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificaciones.Ch7oRoPK.css"},{"type":"external","src":"/_astro/certificaciones.Bz8KhkrV.css"}],"routeData":{"route":"/proyectos","isIndex":false,"type":"page","pattern":"^\\/proyectos\\/?$","segments":[[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyectos.astro","pathname":"/proyectos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificaciones.Ch7oRoPK.css"}],"routeData":{"route":"/servicios/sectores","isIndex":false,"type":"page","pattern":"^\\/servicios\\/sectores\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}],[{"content":"sectores","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios/sectores.astro","pathname":"/servicios/sectores","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificaciones.Ch7oRoPK.css"},{"type":"external","src":"/_astro/certificaciones.Bz8KhkrV.css"}],"routeData":{"route":"/servicios","isIndex":true,"type":"page","pattern":"^\\/servicios\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios/index.astro","pathname":"/servicios","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificaciones.Ch7oRoPK.css"},{"type":"external","src":"/_astro/certificaciones.Bz8KhkrV.css"}],"routeData":{"route":"/sobrenosotros/trabajaconnosotros","isIndex":false,"type":"page","pattern":"^\\/sobrenosotros\\/trabajaconnosotros\\/?$","segments":[[{"content":"sobrenosotros","dynamic":false,"spread":false}],[{"content":"trabajaconnosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobrenosotros/trabajaconnosotros.astro","pathname":"/sobrenosotros/trabajaconnosotros","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificaciones.Ch7oRoPK.css"},{"type":"external","src":"/_astro/certificaciones.Bz8KhkrV.css"}],"routeData":{"route":"/sobrenosotros","isIndex":true,"type":"page","pattern":"^\\/sobrenosotros\\/?$","segments":[[{"content":"sobrenosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobrenosotros/index.astro","pathname":"/sobrenosotros","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificaciones.Ch7oRoPK.css"},{"type":"external","src":"/_astro/certificaciones.Bz8KhkrV.css"},{"type":"external","src":"/_astro/index.DddHMsZL.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.tecna-corp.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/certificaciones.astro",{"propagation":"none","containsHead":true}],["D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/clientes.astro",{"propagation":"none","containsHead":true}],["D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/proyectos.astro",{"propagation":"none","containsHead":true}],["D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/servicios/index.astro",{"propagation":"none","containsHead":true}],["D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/sobrenosotros/index.astro",{"propagation":"none","containsHead":true}],["D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/sobrenosotros/trabajaconnosotros.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/certificaciones@_@astro":"pages/certificaciones.astro.mjs","\u0000@astro-page:src/pages/clientes@_@astro":"pages/clientes.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/proyectos@_@astro":"pages/proyectos.astro.mjs","\u0000@astro-page:src/pages/servicios/sectores@_@astro":"pages/servicios/sectores.astro.mjs","\u0000@astro-page:src/pages/servicios/index@_@astro":"pages/servicios.astro.mjs","\u0000@astro-page:src/pages/sobrenosotros/trabajaconnosotros@_@astro":"pages/sobrenosotros/trabajaconnosotros.astro.mjs","\u0000@astro-page:src/pages/sobrenosotros/index@_@astro":"pages/sobrenosotros.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.18.1_@types+node@25_34dc442f50f794485b82dc3aa1fe807d/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BSzo7i8a.mjs","D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/node_modules/.pnpm/astro@5.18.1_@types+node@25_34dc442f50f794485b82dc3aa1fe807d/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BokArflY.mjs","D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/components/clientes/LogoSlider":"_astro/LogoSlider.DCZRVFSw.js","D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/components/AboutUs/CargaCV":"_astro/CargaCV.KK-nbh0w.js","D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/components/ImageSlider/ImageSlider":"_astro/ImageSlider.JoZt5Brz.js","D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/components/NavBar/NavBar":"_astro/NavBar.DdQvrDlV.js","@astrojs/react/client.js":"_astro/client.CshmPxLf.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/map.YYZQhTb9.svg","/_astro/certificaciones.Ch7oRoPK.css","/_astro/certificaciones.Bz8KhkrV.css","/_astro/index.DddHMsZL.css","/favicon.PNG","/favicon.svg","/robot.txt","/robots.txt","/_astro/CargaCV.KK-nbh0w.js","/_astro/client.CshmPxLf.js","/_astro/ImageSlider.JoZt5Brz.js","/_astro/index.26uVPfUo.js","/_astro/index.sGmLo0nR.js","/_astro/index.yBjzXJbu.js","/_astro/jsx-runtime.D3GSbgeI.js","/_astro/LogoSlider.DCZRVFSw.js","/_astro/NavBar.DdQvrDlV.js","/assets/docs/14001.pdf","/assets/docs/45001.pdf","/assets/docs/9001.pdf","/assets/docs/LatinTecna-14001.pdf","/assets/docs/LatinTecna-45001.pdf","/assets/docs/LatinTecna-9001.pdf","/assets/docs/TecnaBolivia-14001.pdf","/assets/docs/TecnaBolivia-45001.pdf","/assets/docs/TecnaBolivia-9001.pdf","/assets/docs/TecnaCorp-14001.pdf","/assets/docs/TecnaCorp-45001.pdf","/assets/docs/TecnaCorp-9001.pdf","/assets/docs/TecnaEcuado-45001.pdf","/assets/docs/TecnaEcuador-14001.pdf","/assets/docs/TecnaEcuador-9001.pdf","/assets/img/2.svg","/assets/img/home.webp","/assets/img/logo - Copy.png","/assets/img/logo.png","/assets/img/logo.webp","/assets/img/LogoMono.webp","/assets/img/map.jpg","/assets/img/map.png","/assets/img/map.svg","/assets/img/map.webp","/assets/img/map2.png","/assets/img/O-10343_UTGCA Caraguatatuba2.webp","/assets/img/OyM.webp","/assets/img/RH.webp","/assets/img/about/1.webp","/assets/img/about/2.webp","/assets/img/about/3.webp","/assets/img/about/4.webp","/assets/img/about/5.webp","/assets/img/about/6.webp","/assets/img/about/7.webp","/assets/img/about/plantaRH.webp","/assets/img/certificaciones/1.webp","/assets/img/certificaciones/2.webp","/assets/img/certificaciones/3.webp","/assets/img/Clientes/aesa.webp","/assets/img/Clientes/Cepsa.webp","/assets/img/Clientes/CNPC.png","/assets/img/Clientes/conduto.png","/assets/img/Clientes/essac.png","/assets/img/Clientes/frontera.png","/assets/img/Clientes/geopark.webp","/assets/img/Clientes/halliburton.png","/assets/img/Clientes/ipfb-andina.png","/assets/img/Clientes/marcobre.webp","/assets/img/Clientes/NEXA.png","/assets/img/Clientes/OIP (1).jpeg","/assets/img/Clientes/OIP (2).jpeg","/assets/img/Clientes/OIP (3).jpeg","/assets/img/Clientes/OIP (4).jpeg","/assets/img/Clientes/OIP.jpeg","/assets/img/Clientes/pacificRubiales.webp","/assets/img/Clientes/petrobras.png","/assets/img/Clientes/petroecuador.png","/assets/img/Clientes/petrolia.webp","/assets/img/Clientes/petroperu.png","/assets/img/Clientes/petrotal.webp","/assets/img/Clientes/pluspetrol.webp","/assets/img/Clientes/R.png","/assets/img/Clientes/Repsol.png","/assets/img/Clientes/Shell.webp","/assets/img/Clientes/solgas.png","/assets/img/Clientes/total.png","/assets/img/Clientes/veolia.png","/assets/img/Clientes/ypfb-chaco.png","/assets/img/Clientes/ypfb.png","/assets/img/Clientes/ypfRefinacion.webp","/assets/img/iconos/Abandono_de_Facilidades.webp","/assets/img/iconos/automatizacion_y_control.webp","/assets/img/iconos/fiscalizacion_del_proyecto.webp","/assets/img/iconos/gerenciamiento_de_proyectos.webp","/assets/img/iconos/Ingenieria.webp","/assets/img/iconos/inspeccion.webp","/assets/img/iconos/Mision.webp","/assets/img/iconos/OPERACIÓN_Y_MANTENIMIENTO.webp","/assets/img/iconos/Plantas_Modulares.webp","/assets/img/iconos/planta_llave_en_mano.webp","/assets/img/iconos/valores.webp","/assets/img/iconos/vision.webp","/assets/img/logos/1.webp","/assets/img/logos/5.webp","/assets/img/logos/6.webp","/assets/img/logos/7.webp","/assets/img/logos/9.webp","/assets/img/logos/Logo Tecna.webp"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"+xNI4hyUxmg62YZ2zRYDrhhYvFUo58Lzvw6AN4yxVPw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
