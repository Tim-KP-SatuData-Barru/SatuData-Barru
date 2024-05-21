"use client";
import React from "react";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import { useParams } from "next/navigation";
import mockDataPublikasi from "@/public/mockData/mockDataPublikasi";
import Image from "next/image";
import PublicationCard from "@/app/components/PublicationCard";
import Link from "next/link";

function Publikasi() {

  const { id } = useParams<{ id: string }>();
  const data = mockDataPublikasi.find((item) => item.id === id);
  const dataSlice = mockDataPublikasi.slice(0, 5);
  const infoLink = "/publikasi";

  return (
    <div>
      <Navbar />

      <div className="flex flex-col gap-2 ml-[2vw] mt-[3vh]">
        <h1 className="text-blue-dark font-bold text-3xl">
          Publikasi
        </h1>
        <p className="text-blue-dark text-base">
          Home &gt; Publikasi &gt; {data?.title}
        </p>
      </div>

      <div className="flex flex-row justify-center items-center my-10 gap-10">
        <Image 
        src={`${data?.image != "" ? data?.image : ""}`}
        width={80}
        height={80}
        alt="Foto Publikasi"
        className="h-[50vh] w-[18vw] object-cover rounded-lg" />
        <div className="w-[50%] flex flex-col gap-[5vh]">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{data?.title}</h1>
            <h2 className="text-l font-bold text-orange">{data?.bidang}</h2>
            <p>{data?.date}</p>
            <div className="flex gap-2 h-[25%]">
              <div className={`flex font-bold justify-center items-center h-[5vh] w-[15%] text-xs text-white px-2 py-1 rounded-md bg-blue-light`}>
                Linimasa
              </div>
              <div className={`flex font-bold justify-center items-center h-[5vh] w-[15%] text-xs text-white px-2 py-1 rounded-md bg-amber-400`}>
                Metadata
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <div className={`flex font-bold justify-center items-center h-[7vh] w-[30%] text-xs text-white px-2 py-1 rounded-md bg-blue-light`}>
              Unduh PDF
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 mx-[2vw] mb-10">
        <h1 className="text-2xl font-bold">Publikasi Lainnya</h1>
        <div className="flex flex-row gap-7">
          {dataSlice.map((item) => (
            <PublicationCard key={item.id} id={item.id} title={item.title} image={item.image} date={item.date} views={item.views} />
          ))}
        </div>
      </div>

      <Link href={infoLink}>
        <div className="flex justify-center mb-10">
          <button className="bg-blue text-white w-60 h-12 rounded-3xl">
            Selengkapnya
          </button>
        </div>
      </Link>

      <Footer />
    </div>
  );
}

export default Publikasi;