// src/components/LogoSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper/modules";

const logos = [
  { src: "/assets/img/home.webp", alt: "Transistor" },
  { src: "/assets/img/OyM.webp", alt: "Reform" },
];

const ImageSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      slidesPerView={1}
      className="h-full"
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
    >
      {logos.map((logo) => (
        <SwiperSlide key={logo.src}>
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full" // Tamaño más grande
            src={logo.src}
            alt={logo.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
