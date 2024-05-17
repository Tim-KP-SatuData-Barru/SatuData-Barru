import React from "react";
import Image from "next/image";
import Link from "next/link";
import textOverflow from "@/lib/textOverflow";

interface infoCardProps {
  id: string;
  image: string;
  title: string;
  date: string;
  views: number;
}

function InfoCard(data: infoCardProps) {
  return (
    <Link 
      href={"/informasi-aktual/" + data.id}
      className="flex flex-col border w-[30%] h-[40vh] rounded-3xl shadow-lg shadow-white-hover bg-white">
      <Image
        className="w-[100%] h-[60%] rounded-t-3xl"
        src={data.image != "" ? data.image : ""}
        width={80}
        height={80}
        alt="Tidak ada Gambar"
      />
      <div className="flex gap-2 mt-[2vh] pl-[5%]">
        <div className={`flex justify-center items-center w-[40%] text-xs text-white px-2 py-1 rounded-full bg-blue-light`}>
          {data.date}
        </div>
        <div className={`flex justify-center items-center w-[40%] text-xs text-white px-2 py-1 rounded-full bg-amber-400`}>
          {"Views: " + data.views}
        </div>
      </div>
      <h2 className="flex items-center font-bold text-blue-dark text-sm h-16 text-left pl-[5%]">
        {textOverflow(data.title, 80)}
      </h2>
    </Link>
  );
}

export default InfoCard;