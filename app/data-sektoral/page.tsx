import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import DataCard from "../components/dataCard";


const dataSektoralItems = [
    {
        id: 1,
        title: "Data Sektoral",
        imgsrc: "/images/data_barru.jpg"
    },
    {
        id: 2,
        title: "Survey Sektoral",
        imgsrc: "/images/data_barru.jpg"
    },
    {
        id: 3,
        title: "Kompilasi Produk Administrasi",
        imgsrc: "/images/data_barru.jpg"
    },
    {
      id: 3,
      title: "Metadata",
      imgsrc: "/images/data_barru.jpg"
  },
]

function DataSektoral(){
  return(
    <main>
      <Navbar />
      <section className="flex flex-col px-14 gap-8">
        <section className="pt-8">
          <h1 className="text-heading-m font-bold">Data Sektoral</h1>
          <p>Home {">"} Data Sektoral</p>
        </section>
        <section>
          <div className="flex flex-row items-center gap-2">
          <div className="w-1 h-10 bg-orange"></div>
          <h1 className="text-orange text-heading-m font-bold">Data Sektoral</h1>
          </div>
          <p className="ml-3">
            Sektoral pada Barru Satu Data merupakan kategori data menurut pemerintahan.
          </p>
        </section>

        <section className="flex flex-wrap gap-6 mb-16">
          {dataSektoralItems.map((data) => (
            <DataCard key={data.id} title={data.title} imgsrc={data.imgsrc} />
          ))}
        </section>
      </section>
      <Footer />
    </main>
  )
}

export default DataSektoral;