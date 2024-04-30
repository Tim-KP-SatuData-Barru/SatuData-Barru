import React from 'react'
import Image from "next/image";

interface DataCardProps {
    key: number;
    title: string;
    imgsrc: string;
}

function DataCard(data : DataCardProps) {
    return (
        <div
            key={data.key}
            className="flex flex-col border text-center items-center justify-center w-[274px] h-[300px] p-5 rounded-3xl shadow-lg shadow-white-hover bg-white"
          >
            <Image
              className="w-24 h-24 my-4 rounded-full"
              src={data.imgsrc != "" ? data.imgsrc : ''}
              width={80}
              height={80}
              alt="Tidak ada Gambar"
            />
            <h2 className="flex items-center font-bold text-blue-dark text-md h-16">
              {data.title}
            </h2>
          </div>
    );
}

export default DataCard