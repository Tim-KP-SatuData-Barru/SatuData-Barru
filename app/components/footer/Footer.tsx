"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bottom-0">
      <div className="text-white bg-blue-dark flex flex-row justify-between footer-padding py-9 gap-10">
        <div>
          <Image
            src="/images/barru_logo.png"
            width={50}
            height={50}
            alt=""
            className="max-w-28 min-w-20"
          />
        </div>
        <div className="max-w-64 flex flex-col gap-3">
          <h1 className="font-bold text-2xl">Barru Satu Data</h1>
          <ul className="text-base">
            <li>Email: Lorem ipsum dolor sit amet.</li>
            <li>
              Alamat: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Sed vel totam architecto voluptates. Optio ex ea impedit culpa!
              Cupiditate, ullam.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl">Sosial Media</h1>
          <ul className="flex flex-row gap-5">
            <li>
              <Link href="https://www.instagram.com">
                <Image
                  className="w-12 min-w-10"
                  src="/images/instagram_logo.png"
                  width={50}
                  height={50}
                  alt="instagram-logo"
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com">
                <Image
                  className="w-12 min-w-10"
                  src="/images/facebook_logo.png"
                  width={50}
                  height={50}
                  alt="facebook-logo"
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com">
                <Image
                  className="w-12 min-w-10"
                  src="/images/twitter-logo.png"
                  width={50}
                  height={50}
                  alt="twitter-logo"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl">Statistik Pengunjung</h1>
          <ul className="text-base">
            <li>Hari ini</li>
            <li>Minggu ini</li>
            <li>Bulan ini</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue text-white text-center py-3">
        <p>
          Copyright © 2024 Bolata, Dinas Komunikasi dan Informatika Kota Barru.
        </p>
      </div>
    </div>
  );
}

export default Footer;
