"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React from "react";
import PageButton from "../components/pageButton";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import mockDataInfoAktual from "@/public/mockData/mockDataInfoAktual";
import InfoAktualMini from "../components/infoAktualMini";

function InformasiAktualList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(mockDataInfoAktual.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(
    startIndex + itemsPerPage,
    mockDataInfoAktual.length
  );

  const itemsForPage = mockDataInfoAktual.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col px-14 pt-8">
        <h1 className="text-heading-m font-bold">Informasi Aktual</h1>
        <p>Home &gt; Informasi Aktual</p>
      </div>

      <section className="flex flex-wrap gap-6 mb-5 p-[5vh] justify-center">
        {itemsForPage.map((data) => (
          <InfoAktualMini
            key={data.id}
            id={data.id}
            title={data.title}
            image={data.image}
            date={data.date}
            views={data.views}
          />
        ))}
      </section>

      <PageButton
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <Footer />
    </div>
  );
}

export default InformasiAktualList;
