"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React from "react";
import PageButton from "../components/pageButton";
import InfoCard from "../components/infoCard";
import { useState } from "react";
import mockDataInfoAktual from "@/public/mockData/mockDataInfoAktual";

// const infoAktualItems = [
//   {
//     id: 1,
//     imgsrc: "/images/data_barru.jpg",
//     tags: ["tag1", "tag2", "tag3"],
//     content: "Konten 1",
//   },
//   {
//     id: 2,
//     imgsrc: "/images/data_barru.jpg",
//     tags: ["tag1", "tag2", "tag3"],
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel orci nec eros ultricies varius. Nulla facilisi. Ut auctor, sapien nec condimentum aliquet, nunc eros ultricies velit, ac fermentum erat purus at libero. Cras vel nunc sed elit tincidunt ultricies. Suspendisse potenti.",
//   },
//   {
//     id: 3,
//     imgsrc: "/images/data_barru.jpg",
//     tags: ["tag1", "tag2", "tag3"],
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel orci nec eros ultricies varius. Nulla facilisi. Ut auctor, sapien nec condimentum aliquet, nunc eros ultricies velit, ac fermentum erat purus at libero. Cras vel nunc sed elit tincidunt ultricies. Suspendisse potenti.",
//   },
//   {
//     id: 4,
//     imgsrc: "/images/data_barru.jpg",
//     tags: ["tag1", "tag2", "tag3"],
//     content: "Konten 2"
//   },
//   {
//     id: 5,
//     imgsrc: "/images/data_barru.jpg",
//     tags: ["tag1", "tag2", "tag3"],
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel orci nec eros ultricies varius. Nulla facilisi. Ut auctor, sapien nec condimentum aliquet, nunc eros ultricies velit, ac fermentum erat purus at libero. Cras vel nunc sed elit tincidunt ultricies. Suspendisse potenti.",
//   },
//   {
//     id: 6,
//     imgsrc: "/images/data_barru.jpg",
//     tags: ["tag1", "tag2", "tag3"],
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel orci nec eros ultricies varius. Nulla facilisi. Ut auctor, sapien nec condimentum aliquet, nunc eros ultricies velit, ac fermentum erat purus at libero. Cras vel nunc sed elit tincidunt ultricies. Suspendisse potenti.",
//   },
//   {
//     id: 7,
//     imgsrc: "/images/data_barru.jpg",
//     tags: ["tag1", "tag2", "tag3"],
//     content: "Konten 3",
//   },
//   {
//     id: 8,
//     imgsrc: "/images/data_barru.jpg",
//     tags: ["tag1", "tag2", "tag3"],
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel orci nec eros ultricies varius. Nulla facilisi. Ut auctor, sapien nec condimentum aliquet, nunc eros ultricies velit, ac fermentum erat purus at libero. Cras vel nunc sed elit tincidunt ultricies. Suspendisse potenti.",
//   },
// ]



function InformasiAktualList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items to display per page
  const totalPages = Math.ceil(mockDataInfoAktual.length / itemsPerPage);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, mockDataInfoAktual.length);

  // Slice the infoAktualItems array to get the items for the current page
  const itemsForPage = mockDataInfoAktual.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar />

      <section className="flex flex-wrap gap-6 mb-5 p-[5vh] justify-center">
        {itemsForPage.map((data) => (
          <InfoCard key={data.id} id={data.id} title={data.title} image={data.image} date={data.date} views={data.views} />
        ))}
      </section>

      <PageButton currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>

      <Footer />
    </div>
  );
}

export default InformasiAktualList;
