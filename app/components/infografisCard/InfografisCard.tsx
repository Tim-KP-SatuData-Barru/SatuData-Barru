import React from "react";
import Image from "next/image";
import Link from "next/link";
import textOverflow from "@/lib/textOverflow";

function InfografisCard({ data }: any) {
  return (
    <section
      className="flex flex-col border min-w-56 h-[60vh] rounded-3xl shadow-lg shadow-white-hover bg-white"
    >
      <div className="relative w-full h-[70%] rounded-t-3xl overflow-hidden">
          <Image
            className="object-cover"
            src={data.imgsrc}
            layout="fill"
            quality={80}
            alt="Tidak ada Gambar"
          />
      </div>
      <div>
        <div className="flex gap-2 mt-[2vh] h-[35%] pl-[5%]">
          <div className="flex justify-center items-center w-[50%] text-xs text-white px-2 py-1 rounded-full bg-blue-light">
            {"Rilis: " + data.date}
          </div>
          <div className="flex justify-center items-center w-[40%] text-xs text-white px-2 py-1 rounded-full bg-orange-dark">
            {data.views}
          </div>
        </div>
        <h2 className="flex items-center font-bold text-blue-dark text-sm h-16 text-left px-[5%]">
          {textOverflow(data.title, 75)}
        </h2>
      </div>
    </section>
  );
}

export default InfografisCard;
