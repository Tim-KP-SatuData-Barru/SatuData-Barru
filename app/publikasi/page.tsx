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
import Link from "next/link";

function PublikasiList() {
  const daftarLink = "/jadwal-publikasi";
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

  const itemsPerPage = 10;
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
      <div className="flex justify-between items-center  px-8">
        <div className="flex flex-col gap-2 ml-[2vw] mt-[3vh]">
          <h1 className="text-blue-dark font-bold text-3xl">Publikasi</h1>
          <p className="text-blue-dark text-base">Home &gt; Publikasi</p>
        </div>
        <Link href={daftarLink}>
          <div className="flex justify-center mt-[3vh] px-[2vw]">
            <button className="bg-blue text-white w-60 h-12 rounded-3xl">
              Lihat Jadwal Publikasi &gt;
            </button>
          </div>
        </Link>
      </div>

      <SearchBar />

      <section className="flex flex-wrap gap-6 mb-5 p-[5vh] justify-center">
        {itemsForPage.map((data, id) => (
          // <PublicationCard data={data.attributes}  key={data.id} />
          // <PublicationCard data={data.attributes} />
          <PublicationCard key={id} data={data} />
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
