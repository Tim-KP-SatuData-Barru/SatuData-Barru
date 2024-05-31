"use client";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageButton from "../components/pageButton";
import { useState, useEffect } from "react";
import DatasetCard from "../components/DatasetCard";
import DatasetModal from "../components/DatasetModal";
import { DatasetProps } from "@/public/types/DatasetTypes";
import { getListDatasets } from "../api/api";

function Dataset() {
  const [dataset, setDataset] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getListDatasets();
        setDataset(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(dataset.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, dataset.length);

  const itemsForPage = dataset.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const [selectedCard, setSelectedCard] = useState<DatasetProps | null>(null);

  const handleCardClick = (card: DatasetProps) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col gap-2 ml-[2vw] mt-[3vh] px-8 ">
        <h1 className="text-blue-dark font-bold text-3xl">Dataset</h1>
        <p className="text-blue-dark text-base">Home &gt; Dataset</p>
      </div>

      <section className="flex flex-col gap-6 mb-5 p-[5vh] justify-center">
        {itemsForPage.map((dataset, key) => (
          <DatasetCard
            key={key}
            card={dataset.attributes}
            onClick={handleCardClick}
          />
        ))}
      </section>

      <DatasetModal card={selectedCard} onClose={handleCloseModal} />

      <PageButton
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <Footer />
    </div>
  );
}

export default Dataset;
