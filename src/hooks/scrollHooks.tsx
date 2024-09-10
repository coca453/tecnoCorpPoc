import { useState, useEffect } from "react";

export default function useScrollOpacity(threshold = 50) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > threshold) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolling;
}
