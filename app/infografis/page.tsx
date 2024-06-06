"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React, { useState } from "react";
import PageButton from "../components/pageButton";
import { infografisItems } from "@/public/mockData/mockDataInfografis";
import InfografisCard from "../components/infografisCard";

function PublikasiList() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(infografisItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, infografisItems.length);

  const itemsForPage = infografisItems.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar />
      <section className="flex justify-between items-center px-14">
        <div className="flex flex-col gap-2 pt-8">
          <h1 className="text-heading-m font-bold">Infografis</h1>
          <p>Home &gt; Infografis</p>
        </div>
      </section>
      <section className="px-14 pt-8">
        <p>Cari data menarik yang bisa diilustrasikan dalam bentuk grafik informatif dan menarik dari kumpulan data.</p>
      </section>
      <section className="flex flex-wrap gap-6 mb-5 px-14 py-8 justify-center">
        {itemsForPage.map((data, id) => (
          <InfografisCard key={id} data={data} />
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

export default PublikasiList;
