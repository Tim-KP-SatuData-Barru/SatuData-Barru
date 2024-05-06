import React from 'react'
import Image from "next/image";
import Link from "next/link";

interface SkpdCardProps {
  key: number;
  title: string;
  image: string;
  from: string;
}

function SkpdCard(data: SkpdCardProps) {
  return (
    <Link
    href={`/${data.from}/${data.title.toLowerCase().replace(/ /g, '-')}`}
    key={data.key}
    className="flex flex-col text-center items-center justify-center w-[274px] h-[300px] cursor-pointer p-5 border rounded-3xl shadow-lg shadow-white-hover bg-white hover:bg-neutral-300"
  >
    <Image
      className="w-52 h-52 my-4"
      src={data.image ? data.image : '/icons/profile.svg'}
      width={80}
      height={80}
      alt="Tidak ada Gambar"
    />
    <h2 className="flex items-center font-bold text-blue-dark text-md h-16">
      {data.title}
    </h2>
  </Link>
  )
}

export default SkpdCard