"use client";

import React, { useEffect, useState } from "react";
import useScrollOpacity from "../../hooks/scrollHooks";
import NavBarList from "./NavBarList";
import NavBarMenu from "./NavBarMenu";

export const NavBar: React.FC = () => {
  const [hydrated, setHydrated] = useState(false);
  const scrolling = useScrollOpacity(50);

  // Este efecto asegura que el componente esté montado en el cliente
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <header
      id="header"
      className={`bg-neutral-light text-black fixed top-0 left-0 w-full z-50 transition-opacity duration-300 ${
        hydrated && scrolling ? "lg:opacity-75" : "opacity-100"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <NavBarList />
        <NavBarMenu />
      </nav>
    </header>
  );
};
