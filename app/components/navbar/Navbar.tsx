"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { id: 1, title: "Organisasi", href: "/organisasi" },
    { id: 2, title: "Infografis", href: "/infografis" },
    { id: 3, title: "Data Umum", href: "/data-umum" },
    { id: 4, title: "Data Sektoral", href: "/data-sektoral" },
    { id: 5, title: "Informasi Aktual", href: "/informasi-aktual-list/1" },
    { id: 6, title: "Publikasi", href: "/publikasi" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex h-16 w-screen items-center justify-between border-b bg-blue-dark px-14 py-4">
      <Link href="/">
        <Image
          src="/images/bolata_logo.png"
          width={105}
          height={50}
          alt="Bolata's icon"
        />
      </Link>
      <section className="flex items-center gap-8 text-white text-sm">
        {navItems.map((link) => (
          <Link key={link.id} href={link.href}>
            <span
              className={`${
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
  );
}

export default Navbar;
