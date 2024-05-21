import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import OrganisasiCard from "../components/OrganisasiCard";
import { sekretariatItems, skpdItems } from "@/public/mockData/mockOrganisasiData";

function Organisasi() {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col px-14 gap-8">
        <section className="pt-8">
          <h1 className="text-heading-m font-bold">Organisasi</h1>
          <p>Home {">"} Organisasi</p>
        </section>
        <section>
          <div className="flex flex-row items-center gap-2">
            <div className="w-1 h-10 bg-orange"></div>
            <h1 className="text-orange text-heading-m font-bold">SKPD</h1>
          </div>
          <p className="ml-3">
            SKPD pada Bolata Yassiberrui merupakan Satuan Kerja Perangkat Daerah
            Kabupaten Barru.
          </p>
        </section>

        <section className="flex flex-wrap gap-6">
          {skpdItems.map((item, index) => (
            <OrganisasiCard 
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              position={item.position}
              name={item.name}
            />

          ))}
        </section>

        <section className="pt-8">
          <div className="flex flex-row items-center gap-2">
            <div className="w-1 h-10 bg-orange"></div>
            <h1 className="text-orange text-heading-m font-bold">Sekretariat Daerah</h1>
          </div>
          <p className="ml-3">
            Sekretariat Daerah pada Bolata Yassiberrui merupakan Satuan Kerja Perangkat Daerah Kabupaten Barru.
          </p>
        </section>


        <section className="flex flex-wrap gap-6 mb-16">
          {sekretariatItems.map((item, index) => (
            <OrganisasiCard 
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              position={item.position}
              name={item.name}
            />
          ))}
        </section>
      </section>
      <Footer />

    </main>
  );
}

export default Organisasi;
