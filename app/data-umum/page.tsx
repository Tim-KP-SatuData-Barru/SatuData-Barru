import React from "react";
import Navbar from "../components/navbar";
import DataCard from "../components/dataCard";
import Footer from "../components/footer";

const dataUmumItems = [
    {
      id: 1,
      title: "RENJA",
      imgsrc: "/images/data_barru.jpg"
    },
    {
      id: 2,
      title: "LAKIP",
      imgsrc: "/images/data_barru.jpg"
    },
    {
      id: 3,
      title: "RENSTRA",
      imgsrc: "/images/data_barru.jpg"
    },
    {
      id: 4,
      title: "IKUP",
      imgsrc: "/images/data_barru.jpg"
    },
    {
      id: 5,
      title: "SAKIP",
      imgsrc: "/images/data_barru.jpg"
    },
    {
      id: 6,
      title: "PERATURAN DAERAH",
      imgsrc: "/images/data_barru.jpg"
    },
    {
      id: 7,
      title: "RPJMD",
      imgsrc: "/images/data_barru.jpg"
    },
    {
      id: 8,
      title: "RENCANA AKSI",
      imgsrc: "/images/data_barru.jpg"
    },
    {
      id: 9,
      title: "PERJANJIAN KINERJA",
      imgsrc: "/images/data_barru.jpg"
    },
    {
      id: 10,
      title: "RKPD",
      imgsrc: "/images/data_barru.jpg"
    },
    {
      id: 11,
      title: "PERATURAN BUPATI",
      imgsrc: "/images/data_barru.jpg"
    },
    {
      id: 12,
      title: "KLHS",
      imgsrc: "/images/data_barru.jpg"
    },
    {
      id: 13,
      title: "LPPD",
      imgsrc: "/images/data_barru.jpg"
    },
  ];

function Data() {
  return (
    <main>
    <Navbar />
    <section className="flex flex-col px-14 gap-8">
      <section className="pt-8">
        <h1 className="text-heading-m font-bold">Data Umum</h1>
        <p>Home {">"} Data Umum</p>
      </section>
      <section>
        <div className="flex flex-row items-center gap-2">
          <div className="w-1 h-10 bg-orange"></div>
          <h1 className="text-orange text-heading-m font-bold">Data Umum</h1>
        </div>
        <p className="ml-3">
            Data Umum pada Bolata Yassiberrui merupakan kategori data menurut pemerintahan
        </p>
      </section>

      <section className="flex flex-wrap gap-6 mb-16">
        {dataUmumItems.map((data) => (
          <DataCard key={data.id} title={data.title} imgsrc={data.imgsrc} />
        ))}
      </section>


    </section>
    <Footer />
  </main>
  )
}

export default Data