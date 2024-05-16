"use client";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SearchBar from "../components/searchBar";
import PageButton from "../components/pageButton";
import { useState } from "react";
import mockDataset from "@/public/mockData/mockDataset";
import DatasetCard from "../components/DatasetCard";

function Dataset() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items to display per page
  const totalPages = Math.ceil(mockDataset.length / itemsPerPage);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, mockDataset.length);

  // Slice the infoAktualItems array to get the items for the current page
  const itemsForPage = mockDataset.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <Navbar />

      <div className="flex flex-col gap-2 ml-[2vw] mt-[3vh]">
        <h1 className="text-blue-dark font-bold text-3xl">
          Dataset
        </h1>
        <p className="text-blue-dark text-base">
          Home &gt; Dataset
        </p>
      </div>

      <SearchBar />

      {/* 
      judul: string,
  tanggal: string,
  dinas: string,
  jenis: string,
      */}

      <section className="flex flex-col gap-6 mb-5 p-[5vh] justify-center">
        {itemsForPage.map((data) => (
          <DatasetCard key={data.id} id={data.id} judul={data.judul} tanggal={data.tanggal} dinas={data.dinas} jenis={data.jenis} />
        ))}
      </section>

      <PageButton currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
        
      <Footer />
    </div>
  );
}

export default Dataset;