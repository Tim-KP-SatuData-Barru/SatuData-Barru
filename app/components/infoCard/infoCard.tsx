import React from "react";
import Image from "next/image";
import textOverflow from "@/lib/textOverflow";

interface infoCardProps {
  key: number;
  imgsrc: string;
  tags: string[];
  content: string;
}

const colorDict: { [key: string]: string } = {
  "tag1": "bg-blue-light",
  "tag2": "bg-amber-400",
  "tag3": "bg-indigo-400",
};

function InfoCard(data: infoCardProps) {
  return (
    <div className="flex flex-col border w-[30%] h-[40vh] rounded-3xl shadow-lg shadow-white-hover bg-white">
      <Image
        className="w-[100%] h-[60%] rounded-t-3xl"
        src={data.imgsrc != "" ? data.imgsrc : ""}
        width={80}
        height={80}
        alt="Tidak ada Gambar"
      />
      <div className="flex gap-2 mt-[2vh] pl-[5%]">
        {data.tags.map((tag: string) => (
          <div key={tag} className={`flex justify-center items-center w-[20%] text-xs text-white px-2 py-1 rounded-full ${colorDict[tag]}`}>
            {tag}
          </div>
        ))}
      </div>
      <h2 className="flex items-center font-bold text-blue-dark text-sm h-16 text-left pl-[5%]">
        {textOverflow(data.content, 80)}
      </h2>
    </div>
  );
}

export default InfoCard;