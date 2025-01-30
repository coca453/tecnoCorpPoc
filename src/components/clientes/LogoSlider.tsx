// src/components/LogoSlider.jsx

const logos = [
  { src: "/assets/img/Clientes/essac.png", alt: "Essac" },
  { src: "/assets/img/Clientes/CNPC.png", alt: "CNPC" },
  { src: "/assets/img/Clientes/conduto.png", alt: "Conduto" },
  { src: "/assets/img/Clientes/frontera.png", alt: "Frontera Energy" },
  { src: "/assets/img/Clientes/halliburton.png", alt: "Halliburton" },
  { src: "/assets/img/Clientes/ipfb-andina.png", alt: "YPFB Andina" },
  { src: "/assets/img/Clientes/NEXA.png", alt: "Nexa Resources" },
  { src: "/assets/img/Clientes/petrobras.png", alt: "Petrobras" },
  { src: "/assets/img/Clientes/petroecuador.png", alt: "Petroecuador" },
  { src: "/assets/img/Clientes/petroperu.png", alt: "Petroperú" },
  { src: "/assets/img/Clientes/Repsol.png", alt: "Repsol" },
  { src: "/assets/img/Clientes/solgas.png", alt: "Solgas" },
  { src: "/assets/img/Clientes/total.png", alt: "TotalEnergies" },
  { src: "/assets/img/Clientes/veolia.png", alt: "Veolia" },
  { src: "/assets/img/Clientes/ypfb-chaco.png", alt: "YPFB Chaco" },
  { src: "/assets/img/Clientes/ypfb.png", alt: "YPFB" },
  { src: "/assets/img/Clientes/petrotal.webp", alt: "PetroTal" },
  { src: "/assets/img/Clientes/aesa.webp", alt: "AESA" },
  { src: "/assets/img/Clientes/pacificRubiales.webp", alt: "Pacific Rubiales" },
  { src: "/assets/img/Clientes/marcobre.webp", alt: "Marcobre" },
  { src: "/assets/img/Clientes/geopark.webp", alt: "GeoPark" },
  { src: "/assets/img/Clientes/Cepsa.webp", alt: "Cepsa" },
  { src: "/assets/img/Clientes/pluspetrol.webp", alt: "Pluspetrol" },
  { src: "/assets/img/Clientes/ypfRefinacion.webp", alt: "YPF Refinación" },
  { src: "/assets/img/Clientes/Shell.webp", alt: "Shell" },
  { src: "/assets/img/Clientes/petrolia.webp", alt: "Petrolia" },
];

const LogoSlider = () => {
  return (
    <div className="grid gap-4 sm:gap-8 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
      {logos.map((logo, index) => (
        <img
          key={index} // Clave única para cada elemento
          className="w-52 h-40 object-contain mx-auto"
          src={logo.src}
          alt={logo.alt}
          loading="lazy" // Mejora el rendimiento al cargar imágenes
        />
      ))}
    </div>
  );
};

export default LogoSlider;
