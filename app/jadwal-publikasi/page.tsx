"use client";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SearchBar from '../components/searchBar';
import PageButton from '../components/pageButton';
import { useState } from 'react';

const mockDataPublikasi = [
  { judul: "Publikasi 1", jadwal_rilis: "Januari", status: "Belum Rilis" },
  { judul: "Publikasi 2", jadwal_rilis: "Februari", status: "Belum Rilis" },
  { judul: "Publikasi 3", jadwal_rilis: "Maret", status: "Belum Rilis" },
  { judul: "Publikasi 4", jadwal_rilis: "April", status: "Belum Rilis" },
  { judul: "Publikasi 5", jadwal_rilis: "Mei", status: "Belum Rilis" },
  { judul: "Publikasi 6", jadwal_rilis: "Juni", status: "Belum Rilis" },
  { judul: "Publikasi 7", jadwal_rilis: "Juli", status: "Belum Rilis" },
  { judul: "Publikasi 8", jadwal_rilis: "Agustus", status: "Belum Rilis" },
  { judul: "Publikasi 9", jadwal_rilis: "September", status: "Belum Rilis" },
  { judul: "Publikasi 10", jadwal_rilis: "Oktober", status: "Belum Rilis" },
  { judul: "Publikasi 11", jadwal_rilis: "November", status: "Belum Rilis" },
  { judul: "Publikasi 12", jadwal_rilis: "Desember", status: "Belum Rilis" },
];

export default function JadwalPublikasi() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(mockDataPublikasi.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, mockDataPublikasi.length);

  const itemsForPage = mockDataPublikasi.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main>
      <Navbar />
      <h1 className="py-8 w-full text-center text-orange text-heading-m font-bold">
        {"Jadwal Publikasi"}
      </h1>
      <SearchBar />
      <section className="flex flex-wrap gap-6 mb-5 p-[5vh] justify-center">
        <table className="min-w-[90vw] bg-white border border-gray-200 rounded-md table-fixed">
          <thead className="bg-cyan-950 text-white">
            <tr>
              <th className="px-4 py-2 border-b text-center w-1/3">Judul</th>
              <th className="px-4 py-2 border-b text-center w-1/3">Jadwal Rilis</th>
              <th className="px-4 py-2 border-b text-center w-1/3">Status</th>
            </tr>
          </thead>
          <tbody>
            {itemsForPage.map((data, id) => (
              <tr key={id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b text-center align-middle">{data.judul}</td>
                <td className="px-4 py-2 border-b text-center align-middle">{data.jadwal_rilis}</td>
                <td className="px-4 py-2 border-b text-center align-middle">{data.status}</td>
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
