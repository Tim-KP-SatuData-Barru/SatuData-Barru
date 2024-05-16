"use client";
import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import Link from "next/link";
import { useState } from "react";
import PageButton from "../components/pageButton";
import SkpdCard from "../components/skpdCard";

const dataUmumItems = [
  {
    id: 1,
    title: "Bagian Organisasi",
    image: "/images/data-umum/bagian-organisasi.svg",
  },
  {
    id: 2,
    title: "Bapenda",
    image: "/images/data-umum/bapenda.svg",
  },
  {
    id: 3,
    title: "Beppelitbangda",
    image: "/images/data-umum/beppelitbangda.svg",
  },
  {
    id: 4,
    title: "Bencana",
    image: "/images/data-umum/bencana.svg",
  },
  {
    id: 5,
    title: "Kominfo-SP",
    image: "/images/data-umum/kominfo-sp.svg",
  },
  {
    id: 6,
    title: "Capil",
    image: "/images/data-umum/capil.svg",
  },
  {
    id: 7,
    title: "Pendidikan",
    image: "/images/data-umum/pendidikan.svg",
  },
  {
    id: 8,
    title: "BPMD",
    image: "/images/data-umum/bpmd.svg",
  },
  {
    id: 9,
    title: "Kesehatan",
    image: "/images/data-umum/kesehatan.svg",
  },
  {
    id: 10,
    title: "LH",
    image: "/images/data-umum/lh.svg",
  },
  {
    id: 11,
    title: "PUPTR",
    image: "/images/data-umum/puptr.svg",
  },
  {
    id: 12,
    title: "Sosial",
    image: "/images/data-umum/sosial.svg",
  },
];

function DataDasar() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(dataUmumItems.length / itemsPerPage);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, dataUmumItems.length);

  // Slice the infoAktualItems array to get the items for the current page
  const itemsForPage = dataUmumItems.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main>
      <Navbar />
      <section className="flex flex-col px-14 gap-8">
        <section className="pt-8">
          <h1 className="text-heading-m font-bold">Data Dasar</h1>
          <p>Home {">"} Data Dasar</p>
        </section>
        <section>
          <div className="flex flex-row items-center gap-2">
            <div className="w-1 h-10 bg-orange"></div>
            <h1 className="text-orange text-heading-m font-bold">Data Dasar</h1>
          </div>
          <p className="ml-3">
            Portal transparansi data dan informasi publik bagi masyarakat Kabupaten Banjar. Siapa saja bisa jelajahi data terbuka dari Organisasi Perangkat Daerah di Kabupaten Banjar di sini.
          </p>
        </section>

        <section className="flex flex-wrap gap-6 mb-16">
          {itemsForPage.map((data) => (
            <SkpdCard key={data.id} image={data.image} title={data.title} from="data-dasar" />
          ))}
        </section>
      </section>

      <PageButton
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <Footer />
    </main>
  );
}

export default DataDasar;
