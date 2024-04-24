import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";

const skpdItems = [
  {
    id: 1,
    title: "Dinas Penanaman Modal Pelayanan Terpadu Satu Pintu Daerah",
    image: "/images/andi.jpg",
    position: "Kepala SKPD",
    name: "Andi Syukur Makkawaru, S.STP., M.Si",
  },
  {
    id: 2,
    title: "BKPSDM",
    image: "/images/syamsir.png",
    position: "Kepala SKPD",
    name: "Syamsir, S.IP.,M.Si",
  },
  {
    id: 3,
    title: "Kecamatan Soppeng Riaja",
    image: "/images/charlly.jpg",
    position: "Kepala SKPD",
    name: "Charlly Richard, S.IP, M.Si ",
  },    
  {
    id: 4,
    title: "Sekretariat Daerah",
    image: "/images/abustan.jpeg",
    position: "Kepala SKPD",
    name: "DR. Ir. Abustan, M.Si ",
  },   
  {
    id: 5,
    title: "Badan Perencanaan Penelitian dan Pengembangan Daerah",
    image: "/images/nasruddin.jpeg",
    position: "Kepala SKPD",
    name: "Ir. H. Nasruddin, M.A.P ",
  },
  {
    id: 6,
    title: "Dinas Komunikasi Informatika Statistik Dan Persandian",
    image: "/images/syamsuddin.jpeg",
    position: "Kepala SKPD",
    name: "Syamsuddin, S.IP, M.Si ",
  },
];

const sekretariatItems = [
  {
    id: 1,
    title: "Bagian Hukum Setda",
    image: "/images/naidah.jpeg",
    position: "Kepala Bagian",
    name: "Hj. Naidah, SH",
  },
  {
    id: 2,
    title: "Bagian Protokol DAN Komunikasi Pimpinan",
    image: "/images/yossi.jpeg",
    position: "Kepala Bagian",
    name: "Yossi Febrisia, S.STP, M.Si",
  },
  {
    id: 3,
    title: "Bagian Organisasi",
    image: "/images/mukti.jpeg",
    position: "Kepala Bagian",
    name: "Dr. Mukti, SH, MH.",
  },    
  {
    id: 4,
    title: "Bagian Administrasi Pembangunan Setda",
    image: "/images/andi_unru.jpeg",
    position: "Kepala Bagian",
    name: "H. Andi Unru, S.T, M.S.P",
  },    {
    id: 5,
    title: "Bagian Perekonomian dan SDA Setda",
    image: "",
    position: "Kepala Bagian",
    name: "Drs. Muhaemi, M.Si",
  },
];

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
          {skpdItems.map((skpd) => (
            <div
              key={skpd.id}
              className="flex flex-col text-center items-center w-[274px] h-[300px] p-5 rounded-3xl shadow-lg shadow-white-hover bg-white"
            >
              <h2 className="flex items-center font-bold text-blue-dark text-md h-16">
                {skpd.title}
              </h2>
              <Image
                className="w-24 h-24 my-4 rounded-full"
                src={skpd.image}
                width={80}
                height={80}
                alt="Tidak ada Gambar"
              />
              <h3 className="text-orange font-bold text-md">{skpd.position}</h3>
              <h3 className="text-md">{skpd.name}</h3>
            </div>
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
          {sekretariatItems.map((skpd) => (
            <div
              key={skpd.id}
              className="flex flex-col text-center items-center w-[274px] h-[300px] p-5 rounded-3xl shadow-lg shadow-white-hover bg-white"
            >
              <h2 className="flex items-center font-bold text-blue-dark text-md h-16">
                {skpd.title}
              </h2>
              <Image
                className="w-24 h-24 my-4 rounded-full "
                src={skpd.image != "" ? skpd.image : '/icons/profile.svg'}
                width={80}
                height={80}
                alt="Tidak ada Gambar"
              />
              <h3 className="text-orange font-bold text-md">{skpd.position}</h3>
              <h3 className="text-md">{skpd.name}</h3>
            </div>
          ))}
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default Organisasi;
