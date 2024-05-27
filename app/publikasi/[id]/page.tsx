"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getDetailPublikasi } from "@/app/api/api";

function Publikasi() {
  const { id } = useParams<{ id: string }>();
  const [detailPublikasi, setDetailPublikasi] = useState<any>([]);
  const imageRef = useRef("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDetailPublikasi(id);
        setDetailPublikasi(data.attributes);

        if (data.attributes.image?.data?.attributes?.url) {
          imageRef.current = `http://localhost:3001${data.attributes.image.data.attributes.url}`;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleDownloadPDF = () => {
    if (!detailPublikasi) return null;

    const pdf = detailPublikasi.pdf.data.attributes.url;
    const link = document.createElement("a");
    link.href = "http://localhost:3001" + pdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col gap-2 ml-[2vw] mt-[3vh] px-8">
        <h1 className="text-blue-dark font-bold text-3xl">
          Publikasi
        </h1>
        <p className="text-blue-dark text-base">
          Home &gt; Publikasi &gt; {detailPublikasi.judul}
        </p>
      </div>

      <div className="flex flex-row items-center ml-[1.35rem] my-10 gap-10 px-8">
        <Image 
        src={imageRef.current}
        width={80}
        height={80}
        alt="Foto Publikasi"
        className="h-[50vh] w-[18vw] object-cover rounded-lg" />
        <div className="w-full flex flex-col gap-[5vh]">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{detailPublikasi.judul}</h1>
            <h2 className="text-l font-bold text-orange">Nomor Katalog: <span className="text-black">{detailPublikasi.nomor_katalog}</span></h2>
            <h2 className="text-l font-bold text-orange">Nomor Publikasi: <span className="text-black">{detailPublikasi.nomor_publikasi}</span></h2>
            <h2 className="text-l font-bold text-orange">ISSN_ISBN: <span className="text-black">{detailPublikasi.ISSN_ISBN}</span></h2>
            <p className="text-l font-bold text-orange">Release Date: <span className="text-black">{detailPublikasi.tanggal_rilis}</span></p>
            <h2 className="text-l font-bold text-orange">Deskripsi:</h2>
            <h2 className="text-l font-semibold">{detailPublikasi.deskripsi}</h2>
            <div className="flex gap-2 h-[25%]">
              <div className={`flex font-bold justify-center items-center h-[5vh] w-[15%] text-xs text-white px-2 py-1 rounded-md bg-blue-light`}>
                Linimasa
              </div>
              <div className={`flex font-bold justify-center items-center h-[5vh] w-[15%] text-xs text-white px-2 py-1 rounded-md bg-amber-400`}>
                Metadata
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end mr-[1.4rem]">
            <button 
              className={`flex font-bold justify-center items-center h-[7vh] w-[30%] text-xs text-white px-2 py-1 rounded-md bg-blue-light cursor-pointer hover:bg-blue-dark`}
              onClick={handleDownloadPDF}>
              Unduh PDF
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Publikasi;
