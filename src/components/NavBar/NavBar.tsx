import React from "react";
import NavBarMobileMenu from "./NavBarMobileMenu"; // Menú para móviles
import NavBarDesktopMenu from "./NavBarDesktopMenu"; // Menú para pantallas grandes
import useScrollOpacity from "../../hooks/scrollHooks";

export const NavBar: React.FC = () => {
  const scrolling = useScrollOpacity(50); // Cambia la opacidad cuando el scroll supera los 50px

  return (
    <header
      id="header"
      className={`bg-neutral-light fixed top-0 left-0 w-full z-10 transition-colors ease-in-out duration-700 ${
        scrolling ? "bg-opacity-90 text-black" : "bg-opacity-10 text-white"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">TECNA Corp</span>
            <img
              src="/assets/img/logo.png"
              alt="TECNA Corp logo"
              className="h-8 w-auto"
            />
          </a>
        </div>
        {/* Menú para móviles */}
        <NavBarMobileMenu />
        {/* Menú para pantallas grandes */}
        <NavBarDesktopMenu />
      </nav>
    </header>
  );
};
