"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React, { useEffect } from "react";
import PageButton from "../components/pageButton";
import PublicationCard from "../components/PublicationCard";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import mockDataPublikasi from "@/public/mockData/mockDataPublikasi";
import { getListPublikasis } from "../api/api";

function PublikasiList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [publikasi, setPublikasi] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getListPublikasis();
        setPublikasi(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(publikasi.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, publikasi.length);

  const itemsForPage = publikasi.slice(startIndex, endIndex);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col gap-2 ml-[2vw] mt-[3vh] px-8">
        <h1 className="text-blue-dark font-bold text-3xl">
          Publikasi
        </h1>
        <p className="text-blue-dark text-base">
          Home &gt; Publikasi
        </p>
      </div>

      <SearchBar />

      <section className="flex flex-wrap gap-6 mb-5 p-[5vh] justify-center">
        {itemsForPage.map((data, id) => (
          // <PublicationCard data={data.attributes}  key={data.id} />
          // <PublicationCard data={data.attributes} />
          <PublicationCard key={id} data={data} />
        ))}
      </section>

      <PageButton currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>

      <Footer />
    </div>
  );
}

export default PublikasiList;
