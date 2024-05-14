import React from "react";
import Image from "next/image";
import Link from "next/link";
import textOverflow from "@/lib/textOverflow";

interface PublicationCardProps {
    id: string;
    image: string;
    title: string;
    date: string;
    views: number;
  }

function PublicationCard(data: PublicationCardProps) {
  return (
    <Link 
      href={"/publikasi/" + data.id}
      className="flex flex-col border w-[23%] h-[60vh] rounded-3xl shadow-lg shadow-white-hover bg-white">
      <Image
        className="w-[100%] h-[70%] rounded-t-3xl"
        src={data.image != "" ? data.image : ""}
        width={80}
        height={80}
        alt="Tidak ada Gambar"
      />
      <div>
        <div className="flex gap-2 mt-[2vh] h-[25%] pl-[5%]">
          <div className={`flex justify-center items-center w-[50%] text-xs text-white px-2 py-1 rounded-full bg-blue-light`}>
            {data.date}
          </div>
          <div className={`flex justify-center items-center w-[40%] text-xs text-white px-2 py-1 rounded-full bg-amber-400`}>
            {"Views: " + data.views}
          </div>
        </div>
        <h2 className="flex items-center font-bold text-blue-dark text-sm h-16 text-left px-[5%] mt-1">
          {textOverflow(data.title, 75)}
        </h2>
      </div>
    </Link>
  );
}

export default PublicationCard;