"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React from "react";
import PageButton from "../components/pageButton";
import PublicationCard from "../components/PublicationCard";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import mockDataPublikasi from "@/public/mockData/mockDataPublikasi";

function PublikasiList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(mockDataPublikasi.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, mockDataPublikasi.length);

  const itemsForPage = mockDataPublikasi.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col gap-2 ml-[2vw] mt-[3vh]">
        <h1 className="text-blue-dark font-bold text-3xl">
          Publikasi
        </h1>
        <p className="text-blue-dark text-base">
          Home &gt; Publikasi
        </p>
      </div>

      <SearchBar />

      <section className="flex flex-wrap gap-6 mb-5 p-[5vh] justify-center">
        {itemsForPage.map((data) => (
          <PublicationCard key={data.id} id={data.id} title={data.title} image={data.image} date={data.date} views={data.views} />
        ))}
      </section>

      <PageButton currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>

      <Footer />
    </div>
  );
}

export default PublikasiList;
