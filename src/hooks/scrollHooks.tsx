import { useState, useEffect } from "react";

const useScrollOpacity = (threshold: number = 50): boolean => {
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llama a handleScroll al montar el componente

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return scrolling;
};

export default useScrollOpacity;
