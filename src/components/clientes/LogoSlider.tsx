// src/components/LogoSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const logos = [
  { src: "/assets/img/Clientes/essac.png", alt: "Transistor" },
  { src: "/assets/img/Clientes/CNPC.png", alt: "Reform" },
  { src: "/assets/img/Clientes/conduto.png", alt: "Tuple" },
  { src: "/assets/img/Clientes/frontera.png", alt: "SavvyCal" },
  { src: "/assets/img/Clientes/halliburton.png", alt: "Statamic" },
  { src: "/assets/img/Clientes/ipfb-andina.png", alt: "Statamic" },
  { src: "/assets/img/Clientes/NEXA.png", alt: "Statamic" },
  { src: "/assets/img/Clientes/petrobras.png", alt: "Statamic" },
  { src: "/assets/img/Clientes/petroecuador.png", alt: "Statamic" },
  { src: "/assets/img/Clientes/petroperu.png", alt: "Statamic" },
  { src: "/assets/img/Clientes/Repsol.png", alt: "Statamic" },
  { src: "/assets/img/Clientes/solgas.png", alt: "Statamic" },
  { src: "/assets/img/Clientes/total.png", alt: "Statamic" },
  { src: "/assets/img/Clientes/veolia.png", alt: "Statamic" },
  { src: "/assets/img/Clientes/ypfb-chaco.png", alt: "Statamic" },
  { src: "/assets/img/Clientes/ypfb.png", alt: "Statamic" },
];

const LogoSlider = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {logos.map((logo) => (
        <img
          className="w-44 h-32 object-contain mx-auto" // Tamaño más grande
          src={logo.src}
          alt={logo.alt}
        />
      ))}
    </div>
  );
};

export default LogoSlider;
