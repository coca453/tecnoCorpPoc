/* empty css                                           */
import { f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_BoBkTzjS.mjs';
import { $ as $$Container } from '../chunks/Container_CN5ZOm2H.mjs';
import { $ as $$TopSection } from '../chunks/TopSection_CFtEwMGB.mjs';
import { $ as $$Layout } from '../chunks/Layout_Dq3QovKq.mjs';
export { renderers } from '../renderers.mjs';

const $$ServiciosGrid = createComponent(($$result, $$props, $$slots) => {
  const plans = [
    {
      id: "Oil & Gas",
      name: "Oil & Gas",
      features: [
        "Estudios de viabilidad t\xE9cnico-econ\xF3mica",
        "Selecci\xF3n de tecnolog\xEDas",
        "Planeamiento maestro de yacimientos",
        "Ingenier\xEDa conceptual",
        "Ingenier\xEDa b\xE1sica",
        "Paquetes FEED (Front End Engineering Design)",
        "Ingenier\xEDa de detalle",
        "Evaluaci\xF3n de desempe\xF1o de instalaciones y resoluci\xF3n de problemas en planta",
        "Optimizaci\xF3n de procesos y estudios de ingenier\xEDa de valor",
        "Estudios de riesgos (HAZOP) y consecuencias, disponibilidad y constructibilidad",
        "Estudios de dispersi\xF3n y de explosividad",
        "Estudios SIL (Safety Integrity Level)",
        "Simulaciones estacionarias y din\xE1micas de sistemas de flujo multif\xE1sicos"
      ],
      style: "ring-gray-200",
      buttonStyle: "bg-indigo-600 text-white hover:bg-indigo-500",
      textStyle: "text-gray-900"
    },
    {
      id: "Miner\xEDa",
      name: "Miner\xEDa",
      features: [
        "Estudios de Ingenier\xEDa B\xE1sica y de Detalle",
        "Sistemas de Bombeo de Agua, Relaves y Fluidos de Proceso",
        "Sistema de Bombeo, Almacenamiento y Despacho de Combustibles",
        "Sistemas de Generaci\xF3n y Transporte de Ox\xEDgeno",
        "Tratamiento de Aguas",
        "Sistemas Contra Incendio",
        "Sistemas de Almacenamiento y transporte de H2SO4, HCl, H2O2",
        "Automatizaci\xF3n de Procesos",
        "Carreteras",
        "Talleres de Mantenimiento, Galpones",
        "Cimentaci\xF3n para equipo vibrante",
        "Ampliaci\xF3n de l\xEDneas el\xE9ctricas en Alta y Baja Tensi\xF3n",
        "Sub Estaciones y Salas El\xE9ctricas",
        "Muros Corta Fuego",
        "Asimismo, adicionalmente ofrecemos:",
        "Operaci\xF3n y Mantenimiento de Plantas de Combustible",
        "Supervisi\xF3n, Pre Comisionado, Comisionado y Puesta en Marcha"
      ]
    },
    {
      id: "Servicios O&M",
      name: "Servicios O&M",
      description: "Dedicated support and infrastructure for your company.",
      price: "Custom",
      buttonLabel: "Contact sales",
      features: [
        "Dise\xF1o, Construcci\xF3n y Puesta en Marcha de Unidades",
        "Recepci\xF3n, Separaci\xF3n, Medici\xF3n de Gas, Compresi\xF3n, Ajuste de Punto de Roc\xEDo",
        "Fraccionamiento de Gases Licuables, Almacenamiento y Despacho de Productos",
        "Garant\xEDa de Asistencia Frente a Imprevistos o Cambios en el Proceso",
        "Herramientas, Equipos, Maquinarias y Veh\xEDculos Disponibles",
        "Provisi\xF3n de Repuestos y Materiales para Servicios de O&M",
        "Gesti\xF3n de Adquisiciones por Delegaci\xF3n del Cliente",
        "Equipo Especializado: Profesionales y T\xE9cnicos en Diferentes \xC1reas",
        "Soporte en Calidad y SMS",
        "Gesti\xF3n y Perfeccionamiento de Recursos Humanos (RRHH)",
        "Soporte T\xE9cnico a la Gesti\xF3n Operativa: Mec\xE1nica, Electro-Instrumental, Procesos",
        "Soporte T\xE9cnico a la Gesti\xF3n de Mantenimiento",
        "Liderazgo y Gerencia de Proyectos"
      ],
      style: "bg-gray-900 ring-gray-900",
      buttonStyle: "bg-white/10 text-white hover:bg-white/20",
      textStyle: "text-white"
    },
    {
      id: "Servicios Auxiliares",
      name: "Servicios Auxiliares",
      description: "Dedicated support and infrastructure for your company.",
      price: "Custom",
      buttonLabel: "Contact sales",
      features: [
        "Provisi\xF3n de Personal T\xE9cnico y Acad\xE9mico Calificados",
        "Mantenimiento de Campos y Plantas",
        "Cumplimiento de Normas y Reglas Establecidas",
        "Observancia de Normas de Seguridad y Medio Ambiente",
        "Realizaci\xF3n de An\xE1lisis de Riesgos",
        "Habilitaci\xF3n de Personal y Permisos de Trabajo",
        "Certificaciones Especiales para Inicio de Actividades",
        "Apoyo Especializado en Operaci\xF3n y Mantenimiento de Instalaciones",
        "Cierre de \xD3rdenes de Trabajo al Finalizar Actividades",
        "Servicios Adicionales Seg\xFAn Exigencias del Cliente",
        "Subcontrataci\xF3n de Servicios Especializados",
        "Realizaci\xF3n de Obras Civiles Mayores y Menores",
        "Provisi\xF3n de Personal para Tareas Espec\xEDficas",
        "Supervisi\xF3n Calificada bajo Est\xE1ndares de Calidad, Seguridad y Medio Ambiente",
        "Prioridad de Contrataci\xF3n de Mano de Obra Local",
        "Cobertura de Necesidades con Mano de Obra Nacional en Caso Necesario"
      ],
      style: "bg-gray-900 ring-gray-900",
      buttonStyle: "bg-white/10 text-white hover:bg-white/20",
      textStyle: "text-white"
    },
    {
      id: "Planificaci\xF3n y Control",
      name: "Planificaci\xF3n y Control",
      features: [
        "Planificaci\xF3n de Actividades para Asegurar el Cumplimiento de Metas",
        "Minimizaci\xF3n de Riesgos Asociados con Cada Actividad",
        "Preservaci\xF3n de la Seguridad del Personal",
        "Preservaci\xF3n de los Bienes y Activos de los Clientes",
        "Mejora de \xCDndices Operativos Durante los Servicios Prestados",
        "Mejora de \xCDndices de Mantenimiento",
        "Optimizaci\xF3n de Recursos Humanos y Materiales",
        "Servicio de Calidad Costo-Eficiencia",
        "Planificaci\xF3n de la Operaci\xF3n y Mantenimiento de Instalaciones",
        "Sistema Eficiente de Control y Gesti\xF3n de Mantenimiento",
        "Planificaci\xF3n de Mantenimiento Preventivo de Equipos Rotativos",
        "Planificaci\xF3n de Mantenimiento Predictivo de Equipos Rotativos",
        "Planificaci\xF3n de Mantenimiento Preventivo de Equipos Est\xE1ticos",
        "Planificaci\xF3n de Mantenimiento Predictivo de Equipos Est\xE1ticos",
        "Inspecci\xF3n y Limpieza de Equipos de Proceso",
        "Intervenciones Mayores de Equipos Rotativos",
        "Procura y Log\xEDstica de Materiales, Insumos y Repuestos",
        "Control de Almacenes e Inventarios",
        "Control de Variables e \xCDndices Solicitados por el Cliente",
        "Control de Reportes de Fallas de Unidades Cr\xEDticas"
      ]
    },
    {
      id: "Servicios Renovables",
      name: "Servicios Renovables",
      features: [
        "Localizaci\xF3n y arrendamiento de terrenos",
        "Estudios de viabilidad urban\xEDstica y medioambiental",
        "Implantaciones y c\xE1lculo de producci\xF3n con PVSyst",
        "Gesti\xF3n y tramitaci\xF3n ante distribuidoras",
        "Solicitudes de nuevos puntos de acceso y conexi\xF3n",
        "Proyectos administrativos y de ejecuci\xF3n de plantas FV",
        "Ingenier\xEDa el\xE9ctrica y civil",
        "Dise\xF1o y c\xE1lculo de l\xEDneas el\xE9ctricas de MT/AT",
        "Dise\xF1o y c\xE1lculo de subestaciones el\xE9ctricas",
        "Autorizaciones administrativas previas y de construcci\xF3n",
        "Estudios de impacto ambiental (DIA)",
        "Estudios hidrol\xF3gicos, de drenaje e inundabilidad",
        "Estudios paisaj\xEDsticos y de erosi\xF3n del suelo",
        "Elaboraci\xF3n de la RBDA (Relaci\xF3n de Bienes y Derechos Afectados)",
        "Declaraci\xF3n de Utilidad P\xFAblica (DUP)",
        "Proyectos de autoconsumo y FV flotantes en balsas de riego",
        "Estudios de flujos de potencia",
        "C\xE1lculo de corrientes de cortocircuito",
        "Estudios de arm\xF3nicos y protecciones frente al rayo",
        "Estudio de ficker y cumplimiento del C\xF3digo de Red",
        "Estudios din\xE1micos y de selectividad de protecci\xF3n",
        "Operaci\xF3n integral de instalaciones industriales",
        "Mantenimiento preventivo y correctivo",
        "Provisi\xF3n de repuestos y herramientas especiales"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-3"> ${plans.map((plan, index) => renderTemplate`<div${addAttribute(`rounded-3xl p-8 ring-1 ${plan.style} xl:p-10 ${index % 2 === 0 ? "bg-primary-dark" : "bg-secondary-dark"}`, "class")}> <h3${addAttribute(`tier-${plan.id}`, "id")}${addAttribute(`text-2xl/8 font-bold text-white`, "class")}> ${plan.name} </h3> <ul role="list" class="mt-8 space-y-3 text-sm/6 text-white xl:mt-10"> ${plan.features.map((feature) => renderTemplate`<li class="flex gap-x-3"> <svg${addAttribute(`h-6 w-5 flex-none text-white`, "class")} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd"></path> </svg> ${feature} </li>`)} </ul> </div>`)} </div>`;
}, "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/components/servicios/ServiciosGrid.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const topTitle = "Soluciones integrales para la industria";
  const title = "Nuestros Servicios";
  const descripcion = "En TECNA CORP, ofrecemos servicios especializados en Energ\xEDa, Oil & Gas y Miner\xEDa. Desde la planificaci\xF3n y control hasta el mantenimiento integral, trabajamos para asegurar la eficiencia y seguridad en cada proyecto.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios | TECNA CORP", "description": "Descubre nuestros servicios especializados en Energ\xEDa, Oil & Gas y Miner\xEDa. Planificaci\xF3n, control, operaci\xF3n y mantenimiento integral." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="overflow-auto"> ${renderComponent($$result2, "TopSection", $$TopSection, { "title": title, "description": descripcion, "topTitle": topTitle })} ${renderComponent($$result2, "Container", $$Container, { "pBottom": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ServiciosGrid", $$ServiciosGrid, {})} ` })} </main> ` })}`;
}, "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/servicios/index.astro", void 0);

const $$file = "D:/Personal/Github/tecnaCorp/tecnoCorpPoc/tecno/src/pages/servicios/index.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
