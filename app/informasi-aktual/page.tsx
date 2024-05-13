"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React from "react";
import PageButton from "../components/pageButton";
import InfoCard from "../components/infoCard";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import mockDataInfoAktual from "@/public/mockData/mockDataInfoAktual";



function InformasiAktualList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items to display per page
  const totalPages = Math.ceil(mockDataInfoAktual.length / itemsPerPage);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, mockDataInfoAktual.length);

  // Slice the infoAktualItems array to get the items for the current page
  const itemsForPage = mockDataInfoAktual.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col gap-2 ml-[2vw] mt-[3vh]">
        <h1 className="text-blue-dark font-bold text-3xl">
          Informasi Aktual
        </h1>
        <p className="text-blue-dark text-base">
          Home &gt; Informasi Aktual
        </p>
      </div>

      <SearchBar />

      <section className="flex flex-wrap gap-6 mb-5 p-[5vh] justify-center">
        {itemsForPage.map((data) => (
          <InfoCard key={data.id} id={data.id} title={data.title} image={data.image} date={data.date} views={data.views} />
        ))}
      </section>

      <PageButton currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>

      <Footer />
    </div>
  );
}

export default InformasiAktualList;
