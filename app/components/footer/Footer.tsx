"use client";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="bottom-0">
      <div className="flex text-white bg-blue-dark justify-between footer-padding py-9 gap-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <Image
              src="/images/barru_logo.png"
              width={50}
              height={50}
              alt=""
              className="max-w-28 min-w-20"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl">Satu Data Barru</h1>
            <ul className="text-base">
              <li>Telpon: +62 895-8002-50447</li>
              <li>
                Alamat: Jl. Sultan Hasanuddin No. 93 Barru, Sulawesi Selatan
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl">Statistik Pengunjung</h1>
          <ul className="text-base">
            <li>Hari ini <span className="pl-14">: 31</span></li>
            <li>Minggu ini<span className="pl-9">: 406</span></li>
            <li>Bulan ini<span className="pl-[3.1rem]">: 7392</span></li>
          </ul>
        </div>
      </div>
      <div className="bg-blue text-white text-center py-3 px-14">
        <p>
          Copyright © 2024 Dinas Komunikasi, Informatika, Statistik dan Persandian
        </p>
      </div>
    </div>
  );
}

export default Footer;
