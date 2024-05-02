"use client";
import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import Link from "next/link";
import { useState } from "react";
import PageButton from "../components/pageButton";

const dinasItems = [
    {
      id: 1,
      title: "Bagian Organisasi",
      image: "/images/dinas/bagian-organisasi.svg"
    },
    {
      id: 2,
      title: "Bapenda",
      image: "/images/dinas/bapenda.svg"
    },
    {
      id: 3,
      title: "Beppelitbangda",
      image: "/images/dinas/beppelitbangda.svg"
    },
    {
      id: 4,
      title: "Bencana",
      image: "/images/dinas/bencana.svg"
    },
    {
      id: 5,
      title: "Kominfo-SP",
      image: "/images/dinas/kominfo-sp.svg"
    },
    {
      id: 6,
      title: "Capil",
      image: "/images/dinas/capil.svg"
    },
    {
      id: 7,
      title: "Pendidikan",
      image: "/images/dinas/pendidikan.svg"
    },
    {
      id: 8,
      title: "BPMD",
      image: "/images/dinas/bpmd.svg"
    },
    {
      id: 9,
      title: "Kesehatan",
      image: "/images/dinas/kesehatan.svg"
    },
    {
      id: 10,
      title: "LH",
      image: "/images/dinas/lh.svg"
    },
    {
      id: 11,
      title: "PUPTR",
      image: "/images/dinas/puptr.svg"
    },
    {
      id: 12,
      title: "Sosial",
      image: "/images/dinas/sosial.svg"
    },
  ];

function Dinas() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(dinasItems.length / itemsPerPage);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, dinasItems.length);

  // Slice the infoAktualItems array to get the items for the current page
  const itemsForPage = dinasItems.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main>
    <Navbar />
    <section className="flex flex-col px-14 gap-8">
      <section className="pt-8">
        <h1 className="text-heading-m font-bold">Dinas</h1>
        <p>Home {">"} Dinas</p>
      </section>
      <section>
        <div className="flex flex-row items-center gap-2">
          <div className="w-1 h-10 bg-orange"></div>
          <h1 className="text-orange text-heading-m font-bold">Dinas</h1>
        </div>
        <p className="ml-3">
          Dinas pada Bolata Yassiberrui merupakan kategori OPD menurut pemerintahan
        </p>
      </section>

      <section className="flex flex-wrap gap-6 mb-16">
        {itemsForPage.map((data) => (
          <Link
            href={`/dinas/${data.title}`}
            key={data.id}
            className="flex flex-col text-center items-center justify-center w-[274px] h-[300px] cursor-pointer p-5 border rounded-3xl shadow-lg shadow-white-hover bg-white hover:bg-neutral-300"
          >
            <Image
              className="w-52 h-52 my-4"
              src={data.image ? data.image : '/icons/profile.svg'}
              width={80}
              height={80}
              alt="Tidak ada Gambar"
            />
            <h2 className="flex items-center font-bold text-blue-dark text-md h-16">
              {data.title}
            </h2>
          </Link>
        ))}
      </section>


    </section>

    <PageButton currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>

    <Footer />
  </main>
  )
}

export default Dinas