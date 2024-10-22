import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Ingeniería",
    description:
      "Ofrecemos estudios de Ingeniería Conceptual, Básica y de Detalle para la industria O&G, Minería y Energía, además de diagnósticos operacionales.",
  },
  {
    name: "Plantas Llave en Mano",
    description:
      " Ejecutamos proyectos desde el diseño e ingeniería hasta la construcción y puesta en marcha bajo diversas modalidades contractuales.",
  },
  {
    name: "Plantas Modulares",
    description:
      "Proveemos plantas modulares con menores costos, tiempos de construcción reducidos, alta calidad, y posibilidad de traslado y reubicación.",
  },
  {
    name: "Gerenciamiento de Proyectos",
    description:
      "Gestionamos la ingeniería, procura y contratación de la constructora, supervisando la correcta ejecución de la obra.",
  },
  {
    name: "Fiscalización de Proyectos",
    description:
      "Supervisamos la ejecución constructiva para asegurar el cumplimiento técnico y de normas en representación del cliente.",
  },
  {
    name: "Inspección",
    description:
      "Verificamos el cumplimiento de especificaciones técnicas y normas en materiales para transporte de hidrocarburos mediante procedimientos certificados.",
  },
  {
    name: "Automatización y Control",
    description:
      " Proveemos sistemas de control y seguridad de procesos, integrando marcas líderes y desarrollando soluciones de gestión de información.",
  },
  {
    name: "Operación y Mantenimiento",
    description:
      "Ofrecemos operación integral y mantenimiento especializado de instalaciones industriales, incluyendo servicios preventivos y correctivos.",
  },
  {
    name: "Abandono de Facilidades",
    description:
      "Ofrecemos servicios de ingeniería, gestión de proyectos y mantenimiento de sistemas de transporte de hidrocarburos.",
  },
];

export const Feature = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
      <div>
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Everything you need
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          All-in-one platform
        </p>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
      </div>
      <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-3 lg:gap-y-16">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-9">
            <dt className="font-semibold text-gray-900">
              <CheckIcon
                aria-hidden="true"
                className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
              />
              {feature.name}
            </dt>
            <dd className="mt-2">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
