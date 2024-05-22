import React from "react";
import Image from "next/image";
import { DatasetProps } from "@/public/types/DatasetTypes";

interface DatasetCardProps {
  card: DatasetProps,
  onClick: (card: DatasetProps) => void,
}

function DatasetCard(data: DatasetCardProps) {
  return (
    <div className="flex flex-row border bg-white p-5 mx-16 hover:bg-neutral-300 cursor-pointer" onClick={() => data.onClick(data.card)}>
      <Image 
        alt="logo" 
        src="/icons/folder.svg"
        width={80}
        height={80}
      />
      <div className="w-[100%] mx-5 flex flex-col gap-3">
        <h1 className="font-semibold">{data.card.judul_kegiatan}</h1>
        <div className="h-[1px] border w-[100%] "></div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row bg-orange rounded-2xl px-2 py-1 w-[20%] justify-center items-center gap-2">
            <Image alt="logo" src="/images/dataset/TimelineWeek.png" width={15} height={15} />
            <p className="text-white text-xs">{data.card.tahun_kegiatan}</p>
          </div>
          <div className="flex flex-row bg-lime-500 rounded-2xl px-2 py-1 w-[20%] justify-center gap-2">
            <Image alt="logo" src="/images/dataset/PriceTag.png" width={15} height={15} />
            <p className="text-white text-xs">{data.card.sektor_kegiatan}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DatasetCard;