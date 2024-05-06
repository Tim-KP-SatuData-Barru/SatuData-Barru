import React from 'react'
import Image from "next/image";

interface CardProps {
    id: number;
    title: string;
    image: string;
    position: string;
    name: string;
}

function OrganisasiCard(item : CardProps) {
  return (
    <div
    key={item.id}
    className="flex flex-col border text-center items-center w-[274px] h-[300px] p-5 rounded-3xl shadow-lg shadow-white-hover bg-white"
  >
    <h2 className="flex items-center font-bold text-blue-dark text-md h-16">
      {item.title}
    </h2>
    <Image
      className="w-24 h-24 my-4 rounded-full "
      src={item.image != "" ? item.image : '/icons/profile.svg'}
      width={80}
      height={80}
      alt="Tidak ada Gambar"
    />
    <h3 className="text-orange font-bold text-md">{item.position}</h3>
    <h3 className="text-md">{item.name}</h3>
  </div>
  )
}

export default OrganisasiCard