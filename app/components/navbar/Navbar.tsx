"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { id: 1, title: "Organisasi", href: "/organisasi" },
    { id: 2, title: "Infografis", href: "/infografis" },
    { id: 3, title: "Dataset", href: "/dataset" },
    // { id: 4, title: "Data Umum", href: "/data-umum" },
    { id: 5, title: "Data Dasar", href: "/data-dasar" },
    { id: 6, title: "Data Sektoral", href: "/data-sektoral" },
    // { id: 7, title: "Informasi Aktual", href: "/informasi-aktual" },
    { id: 8, title: "Publikasi", href: "/publikasi" },
    { id: 9, title: "Jadwal Publikasi", href: "/jadwal-publikasi" },
  ];

  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const toggleHamburger = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  // Handle click outside hamburger menu
  const handleClickOutside = (e: MouseEvent) => {
    if (
      !(e.target as HTMLElement).matches("#hamburger") &&
      !(e.target as HTMLElement).closest("#nav-menu")
    ) {
      setHamburgerActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-40 h-16 w-screen bg-blue-dark`}>
      <button
        id="hamburger"
        name="hamburger"
        type="button"
        className="absolute right-14 block group z-50 py-4 lg:hidden"
        onClick={toggleHamburger}
      >
        <span className="hamburger-line transition duration-300 ease-in-out group-hover:bg-blue-light"></span>
        <span className="hamburger-line transition duration-300 ease-in-out group-hover:bg-blue-light"></span>
        <span className="hamburger-line transition duration-300 ease-in-out group-hover:bg-blue-light"></span>
      </button>

      <nav
        className="flex items-center justify-between h-16 px-14 py-4"
        id="nav-menu"
      >
        <Link href="/">
          <Image
            src="/images/bolata_logo.webp"
            width={120}
            height={75}
            alt="Bolata's icon"
          />
        </Link>
        <section
          className={`flex flex-col px-4 py-4 gap-2 absolute rounded-lg right-[3.5rem] top-14 w-[250px] lg:w-fit lg:gap-8 lg:px-0 lg:bg-transparent lg:flex-row bg-blue text-white ${
            isHamburgerActive ? "" : "hidden"
          } lg:flex lg:static`}
        >
          {navItems.map((link) => (
            <Link key={link.id} href={link.href}>
              <span
                className={`text-sm ${
                  pathname.startsWith(link.href)
                    ? "hover:text-white-hover text-blue-light"
                    : "hover:text-white-hover"
                } `}
              >
                {link.title}
              </span>
            </Link>
          ))}
        </section>
      </nav>
    </header>
  );
}

export default Navbar;
