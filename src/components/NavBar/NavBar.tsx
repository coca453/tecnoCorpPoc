import React, {
  useState,
  useEffect,
} from "react";
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

const navigation = [
  {
    name: "Quiénes somos",
    href: "/sobrenosotros",
  },
  { name: "Servicios", href: "/servicios" },
  { name: "Clientes", href: "/clientes" },
  {
    name: "Certificaciones",
    href: "/certificaciones",
  },
  { name: "Contacto", href: "/contacto" },
];

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);
  const [hasScrolled, setHasScrolled] =
    useState(false);
  const [currentPath, setCurrentPath] =
    useState("");
  useEffect(() => {
    // Asegura que `window.location` esté disponible en el cliente
    setCurrentPath(window.location.pathname);
  }, []);

  console.log(currentPath);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Set to true if scrolled more than 50px
      if (scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );
    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`inset-x-0 top-0 z-50 transition-colors duration-300 p-5 bg-primary`}
    >
      <div className="mx-auto max-w-7xl lg:w-full">
        <div
          className={`p-1 lg:px-6 lg:pt-6 lg:pl-6 lg:pr-0 flex justify-between`}
        >
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">
              Your Company
            </span>
            <img
              alt="tecnaCorp Logo"
              src="/assets/img/LogoMono.webp"
              className="h-10 w-auto"
            />
          </a>
          <nav
            aria-label="Global"
            className={`flex items-center justify-between`}
          >
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen(true)
              }
              className="-m-2.5 rounded-md p-2.5  lg:hidden"
            >
              <span className="sr-only">
                Open main menu
              </span>
              <Bars3Icon
                aria-hidden="true"
                className="h-6 w-6 text-secondary"
              />
            </button>
            <div
              className={`hidden lg:ml-16 lg:flex lg:gap-x-14 lg:w-full lg:justify-around`}
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl font-bold leading-6 text-secondary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">
                Your Company
              </span>
              <img
                alt=""
                src="/assets/img/LogoMono.webp"
                className="h-10 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">
                Close menu
              </span>
              <XMarkIcon
                aria-hidden="true"
                className="h-6 w-6 text-secondary"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary-dark hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
