import { useState } from "react";

// Define el menú en un lugar común si quieres compartirlo entre los componentes
const menu = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
];

export default function NavBarMenu() {
  const [Open, setOpen] = useState(false);

  return (
    <div className="relative flex lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!Open)}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Fondo opacado */}
      {Open && <div className="fixed inset-0 bg-black opacity-50 z-30"></div>}

      <div
        className={`fixed inset-y-0 z-40 bg-white shadow-lg overflow-auto w-full right-0 md:w-1/2 md:right-0 transition-transform duration-300 ease-in-out transform ${
          Open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-700"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex flex-col items-center justify-center h-full py-8">
          <nav aria-label="Mobile menu">
            <ul className="space-y-4">
              {menu.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="text-lg font-semibold text-gray-900"
                    onClick={() => setOpen(false)} // Cierra el menú al hacer clic en un enlace
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
