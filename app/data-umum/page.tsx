"use client";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
import PageButton from "../components/pageButton";
import SkpdCard from "../components/skpdCard";
import { dataUmumItems } from "@/public/mockData/mockDataDasar";

function DataUmum() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(dataUmumItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, dataUmumItems.length);

  const itemsForPage = dataUmumItems.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main>
    <Navbar />
    <section className="flex flex-col px-14 gap-8">
      <section className="pt-8">
        <h1 className="text-heading-m font-bold">Data Umum</h1>
        <p>Home {">"} Data Umum</p>
      </section>
      <section>
        <div className="flex flex-row items-center gap-2">
          <div className="w-1 h-10 bg-orange"></div>
          <h1 className="text-orange text-heading-m font-bold">Data Umum</h1>
        </div>
        <p className="ml-3">
          Data umum pada Bolata Yassiberrui merupakan kategori OPD menurut pemerintahan
        </p>
      </section>

      <section className="flex flex-wrap gap-6 mb-16">
        {itemsForPage.map((data) => (
          <SkpdCard key={data.id} image={data.image} title={data.title} from="data-umum"/>
          // <Link
          //   href={`/data-umum/${data.title.toLowerCase().replace(/ /g, '-')}`}
          //   key={data.id}
          //   className="flex flex-col text-center items-center justify-center w-[274px] h-[300px] cursor-pointer p-5 border rounded-3xl shadow-lg shadow-white-hover bg-white hover:bg-neutral-300"
          // >
          //   <Image
          //     className="w-52 h-52 my-4"
          //     src={data.image ? data.image : '/icons/profile.svg'}
          //     width={80}
          //     height={80}
          //     alt="Tidak ada Gambar"
          //   />
          //   <h2 className="flex items-center font-bold text-blue-dark text-md h-16">
          //     {data.title}
          //   </h2>
          // </Link>
        ))}
      </section>


    </section>

    <PageButton currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>

    <Footer />
  </main>
  )
}

export default DataUmum