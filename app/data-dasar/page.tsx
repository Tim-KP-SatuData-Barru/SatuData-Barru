"use client";
import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import Link from "next/link";
import { useState } from "react";
import PageButton from "../components/pageButton";
import SkpdCard from "../components/skpdCard";
import { dataUmumItems } from "@/public/mockData/mockDataDasar";

function DataDasar() {
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
          <h1 className="text-heading-m font-bold">Data Dasar</h1>
          <p>Home {">"} Data Dasar</p>
        </section>
        <section>
          <div className="flex flex-row items-center gap-2">
            <div className="w-1 h-10 bg-orange"></div>
            <h1 className="text-orange text-heading-m font-bold">Data Dasar</h1>
          </div>
          <p className="ml-3">
            Portal transparansi data dan informasi publik bagi masyarakat
            Kabupaten Barru.
          </p>
        </section>

        <section className="flex flex-wrap gap-6 mb-16">
          {itemsForPage.map((data) => (
            <SkpdCard
              key={data.id}
              image={data.image}
              title={data.title}
              from="data-dasar"
            />
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
