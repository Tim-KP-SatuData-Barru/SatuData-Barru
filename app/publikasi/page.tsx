"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React, { useEffect, useState } from "react";
import PageButton from "../components/pageButton";
import PublicationCard from "../components/PublicationCard";
import SearchBar from "../components/searchBar";
import { getListPublikasis } from "../api/api";
import Link from "next/link";

function PublikasiList() {
  const daftarLink = "/jadwal-publikasi";
  const [currentPage, setCurrentPage] = useState(1);
  const [publikasi, setPublikasi] = useState<{ attributes: any }[]>([]);
  const [filteredPublikasi, setFilteredPublikasi] = useState<
    { attributes: any }[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("terbaru");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getListPublikasis();
        setPublikasi(data);
        setFilteredPublikasi(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = publikasi.filter((item) =>
      item.attributes.judul.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
      const dateA = new Date(a.attributes.jadwal_rilis).getTime();
      const dateB = new Date(b.attributes.jadwal_rilis).getTime();
      return sortOrder === "terbaru" ? dateB - dateA : dateA - dateB;
    });

    setFilteredPublikasi(sorted);
  }, [searchQuery, sortOrder, publikasi]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredPublikasi.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(
    startIndex + itemsPerPage,
    filteredPublikasi.length
  );

  const itemsForPage = filteredPublikasi.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleSortOrderChange = (order: string) => {
    setSortOrder(order);
    setCurrentPage(1); // Reset to first page on sort change
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center px-14">
        <div className="flex flex-col pt-8">
          <h1 className="text-heading-m font-bold">Publikasi</h1>
          <p>Home &gt; Publikasi</p>
        </div>
        <Link href={daftarLink}>
          <div className="flex justify-center mt-[3vh]">
            <button className="bg-blue text-white w-60 h-12 rounded-3xl">
              Lihat Jadwal Publikasi &gt;
            </button>
          </div>
        </Link>
      </div>

      <SearchBar onSearch={handleSearch} onSortChange={handleSortOrderChange} />

      <section className="flex flex-wrap gap-6 mb-5 px-14 py-8 justify-center">
        {itemsForPage.map((data, id) => (
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
