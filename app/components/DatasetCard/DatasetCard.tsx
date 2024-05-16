import React from "react";
import Image from "next/image";
import Link from "next/link";
import textOverflow from "@/lib/textOverflow";

interface DatasetCardProps {
  key: string,
  id: string,
  judul: string,
  tanggal: string,
  dinas: string,
  jenis: string,
}

function DatasetCard(data: DatasetCardProps) {
  function getJenisLogo(jenis: string) {
    if (jenis === "Excel") {
      return "/images/dataset/MicrosoftExcel.png";
    } else if (jenis === "PDF") {
      return "/images/dataset/PDF.png";
    }

    return "";
  }

  return (
    <div className="flex flex-row border bg-white p-5 mx-16">
      <Image 
        alt="logo" 
        src={getJenisLogo(data.jenis) as string}
        width={80}
        height={80}
      />
      <div className="w-[100%] mx-5 flex flex-col gap-3">
        <h1>{data.judul}</h1>
        <div className="h-[1px] border w-[100%] "></div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row bg-orange rounded-2xl px-2 py-1 w-[20%] justify-center items-center gap-2">
            <Image alt="logo" src="/images/dataset/TimelineWeek.png" width={15} height={15} />
            <p className="text-white text-xs">{data.tanggal}</p>
          </div>
          <div className="flex flex-row bg-lime-500 rounded-2xl px-2 py-1 w-[20%] justify-center gap-2">
            <Image alt="logo" src="/images/dataset/PriceTag.png" width={15} height={15} />
            <p className="text-white text-xs">{data.dinas}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DatasetCard;