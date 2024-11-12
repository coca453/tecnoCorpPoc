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
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Autoplay]}
    >
      {logos.map((logo) => (
        <SwiperSlide key={logo.src}>
          <img
            className="w-44 h-32 object-contain mx-auto" // Tamaño más grande
            src={logo.src}
            alt={logo.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LogoSlider;
