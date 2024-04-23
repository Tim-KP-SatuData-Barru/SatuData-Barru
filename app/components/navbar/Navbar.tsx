"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
    const [active, setActive] = useState<number | null>(null);

    const navItems = [
      { id: 1, title: "Organisasi", href: "/organisasi" },
      { id: 2, title: "Infografis", href: "/" },
      { id: 3, title: "Data", href: "/" },
      { id: 4, title: "Informasi Aktual", href: "/informasi-aktual" },
      { id: 5, title: "Publikasi", href: "/" },
    ];

  return (
    <nav className="sticky top-0 z-50 flex h-16 w-screen items-center justify-between border-b bg-blue-dark px-14 py-4">
        <div>
        <Image
            src="/images/bolata_logo.png"
            width={105}
            height={50}
            alt="Bolata's icon"
        />
        </div>
        <section className="flex items-center gap-8 text-white text-sm">
        {navItems.map((link) => (
          <Link key={link.id} href={link.href}>
            <span
              className={`${
                active === link.id
                  ? "font-semibold hover:text-white-hover"
                  : "hover:text-white-hover"
              } `}
              onClick={() => setActive(link.id)}
            >
              {link.title}
            </span>
          </Link>
        ))}
      </section>
    </nav>
  )
}

export default Navbar