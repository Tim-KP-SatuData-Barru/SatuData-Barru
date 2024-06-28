"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SearchBar from "../components/searchBar";
import PageButton from "../components/pageButton";
import { getJadwalPublikasi } from "../api/api";
import { ScheduleAttributes } from "@/public/types/PublikasiTypes";
import { useEffect, useState } from "react";

export default function JadwalPublikasi() {
  const [data, setData] = useState<ScheduleAttributes[]>([]);
  const [filteredData, setFilteredData] = useState<ScheduleAttributes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("terbaru");
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getJadwalPublikasi();
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.attributes.judul.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
      const dateA = new Date(a.attributes.jadwal_rilis).getTime();
      const dateB = new Date(b.attributes.jadwal_rilis).getTime();
      return sortOrder === "terbaru" ? dateB - dateA : dateA - dateB;
    });

    setFilteredData(sorted);
  }, [searchQuery, sortOrder, data]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (parseInt(currentPage.toString()) - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);

  const itemsForPage = filteredData.slice(startIndex, endIndex);

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
    <main>
      <Navbar />
      <h1 className="py-8 w-full text-center text-orange text-heading-m font-bold">
        {"Jadwal Publikasi"}
      </h1>
      <SearchBar onSearch={handleSearch} onSortChange={handleSortOrderChange} />
      <section className="flex flex-wrap gap-6 mb-5 px-14 py-8 justify-center">
        <table className="min-w-[90vw] bg-white border border-gray-200 rounded-md table-fixed">
          <thead className="bg-cyan-950 text-white">
            <tr>
              <th className="px-4 py-2 border-b text-center w-1/12">No.</th>
              <th className="px-4 py-2 border-b text-center w-4/12">Judul</th>
              <th className="px-4 py-2 border-b text-center w-2/12">
                Periode Terbit
              </th>
              <th className="px-4 py-2 border-b text-center w-1/12">Bahasa</th>
              <th className="px-4 py-2 border-b text-center w-3/12">
                Jadwal Rilis
              </th>
              <th className="px-4 pr-6 py-2 border-b text-center w-2/12">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {itemsForPage.map((item, index) => (
              <tr key={startIndex + index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b text-center align-middle">
                  {startIndex + index + 1}
                </td>
                <td className="px-4 py-2 border-b text-justify align-middle">
                  {item.attributes.judul}
                </td>
                <td className="px-4 py-2 border-b text-center align-middle">
                  {item.attributes.periode_terbit}
                </td>
                <td className="px-4 py-2 border-b text-center align-middle">
                  {item.attributes.bahasa}
                </td>
                <td className="px-4 py-2 border-b text-center align-middle">
                  {item.attributes.jadwal_rilis}
                </td>
                <td className="px-4 py-2 border-b text-center align-middle">
                  {item.attributes.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
