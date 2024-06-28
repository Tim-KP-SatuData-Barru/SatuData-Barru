import React from "react";
import Image from "next/image";
import Link from "next/link";
import textOverflow from "@/lib/textOverflow";

function PublicationCard({ data }: any) {
  const imageUrl = data?.attributes?.image?.data?.attributes?.url
    ? `https://satudata.barrukab.go.id/dashboard${data.attributes.image.data.attributes.url}`
    : "";

  return (
    <Link
      href={`/publikasi/${data.id}`}
      className="flex flex-col border max-w-52 h-[60vh] rounded-3xl shadow-lg shadow-white-hover bg-white"
    >
      <div className="relative w-full h-[70%] rounded-t-3xl overflow-hidden">
        {imageUrl && (
          <Image
            className="object-cover"
            src={imageUrl}
            layout="fill"
            quality={80}
            alt="Tidak ada Gambar"
          />
        )}
      </div>
      <div>
        <div className="flex gap-2 mt-[2vh] h-[25%] pl-[5%]">
          <div className="flex justify-center items-center w-[50%] text-xs text-white px-2 py-1 rounded-full bg-blue-light">
            {"Rilis: " + data.attributes.tanggal_rilis}
          </div>
          <div className="flex justify-center items-center w-[40%] text-xs text-white px-2 py-1 rounded-full bg-orange-dark">
            {data.attributes.ISSN_ISBN}
          </div>
        </div>
        <h2 className="flex items-center font-bold text-blue-dark text-sm h-16 text-left px-[5%] mt-1">
          {textOverflow(data.attributes.judul, 75)}
        </h2>
      </div>
    </Link>
  );
}

export default PublicationCard;
