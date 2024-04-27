"use client";
import Footer from "@/app/components/footer";
import InfoAktualDetailCom from "@/app/components/infoAktualDetailCom";
import InfoAktualMini from "@/app/components/infoAktualMini";
import Navbar from "@/app/components/navbar";
import mockData from "@/public/mockData";
import { useParams } from "next/navigation";
import React from "react";

function InformasiAktual() {
  const { id } = useParams<{ id: string }>();
  const data = mockData.find((item) => item.id === id);
  const dataSlice = mockData.slice(0, 5);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <div className="flex flex-2/3 px-14">
          <InfoAktualDetailCom />
        </div>
        <div className="flex-1/3 px-14">
          <h1>Informasi Aktual Lainnya</h1>
          <div className="flex flex-col gap-7">
            {dataSlice.map((item) => (
              <InfoAktualMini key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InformasiAktual;
