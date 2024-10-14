import React from "react";
import NavBarMobileMenu from "./NavBarMobileMenu"; // Menú para móviles
import NavBarDesktopMenu from "./NavBarDesktopMenu"; // Menú para pantallas grandes
import useScrollOpacity from "../../hooks/scrollHooks";

export const NavBar: React.FC = () => {
  const scrolling = useScrollOpacity(50); // Cambia la opacidad cuando el scroll supera los 50px

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 w-full z-20 transition-colors ease-in-out duration-700 ${
        scrolling
          ? "bg-neutral-light text-black border-b-2 border-gray-300"
          : "text-white"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">TECNA Corp</span>
            <img
              src="/assets/img/logo.png"
              alt="TECNA Corp logo"
              className="h-24 w-auto"
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
