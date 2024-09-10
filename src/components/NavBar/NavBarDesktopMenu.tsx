"use client";

const menu = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
];

export default function NavBarDesktopMenu() {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {menu.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="text-sm font-semibold leading-6"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}
