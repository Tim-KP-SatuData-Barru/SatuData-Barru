"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import PageButton from "@/app/components/pageButton";
import { useParams } from "next/navigation";
import { dataUmumDetailItems, mockDataUmum } from "@/public/mockData/mockDataUmum";

function DataUmumDetail() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataUmum, setDataUmum] = useState("RENJA");
  const { id } = useParams<{ id: string }>();
  
  const itemsPerPage = 10;
  const totalPages = Math.ceil(mockDataUmum.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, mockDataUmum.length);

  const itemsForPage = mockDataUmum.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleOnDataUmum = (title: string) => {
    setDataUmum(title);
  };


  const formatTitle = (title: string) => {
    return title
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <main>
      <Navbar />
      <h1 className="py-12 w-full text-center text-orange text-heading-m font-bold">
        {formatTitle(id)}
      </h1>
      <section className="grid grid-flow-row md:grid-col-3 md:grid-flow-col gap-4 pb-8">
        <div className="flex flex-col gap-3 px-14 col-span-2">
          {itemsForPage.map((item, key) => (
            <section
              key={key}
              className="flex flex-col gap-2 border border-black rounded px-8 py-8"
            >
              <h1 className="text-heading-s text-[#BF731A] font-bold">
                {item.title}
              </h1>
              <div key={key} className="flex flex-col md:flex-row gap-2">
                <div className="bg-orange-light px-2 py-1 text-xs text-white font-bold rounded-xl text-center flex flex-row gap-1 items-center">
                  <Image
                    src={"/icons/timeline.svg"}
                    alt="icon date"
                    width={20}
                    height={20}
                  />
                  <p>{item.date}</p>
                </div>
                <div className="bg-blue-dark px-2 py-1 text-xs rounded-xl font-bold text-center text-white flex flex-row gap-1 items-center">
                  <Image
                    src={"/icons/year.svg"}
                    alt="icon year"
                    width={20}
                    height={20}
                  />
                  <p>{item.year}</p>
                </div>
                <div className="bg-[#629C28] px-2 py-1 text-xs rounded-xl font-bold text-center text-white flex flex-row gap-1 items-center">
                  <Image
                    src={"/icons/tag.svg"}
                    alt="icon tag"
                    width={20}
                    height={20}
                  />
                  <p>{item.tag}</p>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="flex items-center px-2 py-1 gap-2 rounded w-fit text-white font-bold bg-[#3484FB] hover:bg-blue">
                  <Image
                    src="/icons/download.svg"
                    alt="icon download"
                    width={20}
                    height={20}
                  />
                  Download
                </button>
              </div>
            </section>
          ))}
        </div>
        <div className="flex flex-col gap-3 pl-14 md:pl-0 pr-14">
          <h1 className="text-orange text-heading-s font-bold">{dataUmum}</h1>
          {dataUmumDetailItems.map((item, key) => (
            <section
              key={key}
              onClick={() => handleOnDataUmum(item.title)}
              className={`flex flex-col gap-2 cursor-pointer border border-black rounded px-8 py-8 hover:bg-blue ${
                item.title === dataUmum
                  ? "bg-blue text-orange"
                  : "bg-blue-light"
              }`}
            >
              <h1 className="text-heading-s font-bold">{item.title}</h1>
            </section>
          ))}
        </div>
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

export default DataUmumDetail;
