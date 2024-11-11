import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Ingeniería",
    description:
      "Ofrecemos estudios de Ingeniería Conceptual, Básica y de Detalle para la industria O&G, Minería y Energía, además de diagnósticos operacionales.",
    icon: "assets/img/iconos/Ingenieria.webp",
  },
  {
    name: "Plantas Llave en Mano",
    description:
      " Ejecutamos proyectos desde el diseño e ingeniería hasta la construcción y puesta en marcha bajo diversas modalidades contractuales.",
    icon: "assets/img/iconos/planta _llave_en_mano.webp",
  },
  {
    name: "Plantas Modulares",
    description:
      "Proveemos plantas modulares con menores costos, tiempos de construcción reducidos, alta calidad, y posibilidad de traslado y reubicación.",
    icon: "assets/img/iconos/Plantas_Modulares.webp",
  },
  {
    name: "Gerenciamiento de Proyectos",
    description:
      "Gestionamos la ingeniería, procura y contratación de la constructora, supervisando la correcta ejecución de la obra.",
    icon: "assets/img/iconos/gerenciamiento_de_proyectos.webp",
  },
  {
    name: "Fiscalización de Proyectos",
    description:
      "Supervisamos la ejecución constructiva para asegurar el cumplimiento técnico y de normas en representación del cliente.",
    icon: "assets/img/iconos/fiscalizacion_del_proyecto.webp",
  },
  {
    name: "Inspección",
    description:
      "Verificamos el cumplimiento de especificaciones técnicas y normas en materiales para transporte de hidrocarburos mediante procedimientos certificados.",
    icon: "assets/img/iconos/inspeccion.webp",
  },
  {
    name: "Automatización y Control",
    description:
      " Proveemos sistemas de control y seguridad de procesos, integrando marcas líderes y desarrollando soluciones de gestión de información.",
    icon: "assets/img/iconos/automatizacion_y_control.webp",
  },
  {
    name: "Operación y Mantenimiento",
    description:
      "Ofrecemos operación integral y mantenimiento especializado de instalaciones industriales, incluyendo servicios preventivos y correctivos.",
    icon: "assets/img/iconos/OPERACIÓN_Y_MANTENIMIENTO.webp",
  },
  {
    name: "Abandono de Facilidades",
    description:
      "Ofrecemos servicios de ingeniería, gestión de proyectos y mantenimiento de sistemas de transporte de hidrocarburos.",
    icon: "assets/img/iconos/Abandono_de_Facilidades.webp",
  },
];

export const Feature = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
      <div>
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Todo lo que necesitas
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Una plataforma integral de soluciones
        </p>
        <p className="mt-6 text-base leading-7 text-gray-600">
          En TECNA CORP, ofrecemos una amplia gama de servicios especializados
          para los sectores de Energía, Oil & Gas y Minería. Desde la ingeniería
          conceptual hasta la operación y mantenimiento, brindamos soluciones
          integrales que se adaptan a las necesidades de cada proyecto,
          asegurando calidad, eficiencia y un alto estándar técnico.
        </p>
      </div>
      <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-3 lg:gap-y-16">
        {features.map((feature) => (
          <div key={feature.name} className="flex items-start space-x-4">
            <img
              src={feature.icon}
              className="h-12 w-12 flex-shrink-0"
              alt={feature.name}
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
};
