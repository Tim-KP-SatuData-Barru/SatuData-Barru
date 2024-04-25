import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";

const dataUmumItems = [
    {
      id: 1,
      title: "RENJA"
    },
    {
      id: 2,
      title: "LAKIP"
    },
    {
      id: 3,
      title: "RENSTRA"
    },
    {
      id: 4,
      title: "IKUP"
    },
    {
      id: 5,
      title: "SAKIP"
    },
    {
      id: 6,
      title: "PERATURAN DAERAH"
    },
    {
      id: 7,
      title: "RPJMD"
    },
    {
      id: 8,
      title: "RENCANA AKSI"
    },
    {
      id: 9,
      title: "PERJANJIAN KINERJA"
    },
    {
      id: 10,
      title: "RKPD"
    },
    {
      id: 11,
      title: "PERATURAN BUPATI"
    },
    {
      id: 12,
      title: "KLHS"
    },
    {
      id: 13,
      title: "LPPD"
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
          <div
            key={data.id}
            className="flex flex-col border text-center items-center justify-center w-[274px] h-[300px] p-5 rounded-3xl shadow-lg shadow-white-hover bg-white"
          >
            <Image
              className="w-24 h-24 my-4 rounded-full"
              src="/images/data_barru.jpg"
              width={80}
              height={80}
              alt="Tidak ada Gambar"
            />
            <h2 className="flex items-center font-bold text-blue-dark text-md h-16">
              {data.title}
            </h2>
          </div>
        ))}
      </section>


    </section>
    <Footer />
  </main>
  )
}

export default Data