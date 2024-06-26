"use client";
import Footer from "@/app/components/footer";
import InfoAktualDetailCom from "@/app/components/infoAktualDetailCom";
import InfoAktualMini from "@/app/components/infoAktualMini";
import Navbar from "@/app/components/navbar";
import mockDataInfoAktual from "@/public/mockData/mockDataInfoAktual";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

function InformasiAktual() {
  const { id } = useParams<{ id: string }>();
  const data = mockDataInfoAktual.find((item) => item.id === id);
  const dataSlice = mockDataInfoAktual.slice(0, 5);
  const infoLink = "/informasi-aktual";

  if (data)
  return (
    <div>
      <Navbar />
      <div className="flex flex-row px-14 py-14 gap-20">
        <div className="flex flex-2/3">
          <InfoAktualDetailCom />
        </div>
        <div className="flex-1/3 flex flex-col gap-5 justify-center items-center pt-10">
          <h1 className="text-2xl font-bold">Informasi Aktual Lainnya</h1>
          <div className="flex flex-col gap-7">
            {dataSlice.map((item) => (
              <InfoAktualMini key={item.id} id={data.id} image={data.image} title={data.title} views={data.views} date={data.date} />
            ))}
          </div>
          <Link href={infoLink}>
            <div className="flex justify-center">
              <button className="bg-blue text-white w-60 h-12 rounded-3xl">
                Selengkapnya
              </button>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InformasiAktual;
