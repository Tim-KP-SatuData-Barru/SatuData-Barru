"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

function Footer() {

  const [active, setActive] = useState<number | null>(null);
  
  const mediaLinks = [
    { id: 1, title: "Instagram", href: "https://www.instagram.com/" },
    { id: 2, title: "Twitter", href: "https://twitter.com/" },
    { id: 3, title: "Facebook", href: "https://facebook.com/" },
  ];

  return (
    <div className='bottom-0'>
    <div className='text-white bg-blue-dark flex flex-row justify-between footer-padding py-9 gap-10'>
      <div><img src="/images/barru_logo.png" alt="" className='max-w-28 min-w-20' />
      </div>
      <div className='max-w-64 flex flex-col gap-3'>
        <h1 className='font-bold text-2xl'>Barru Satu Data</h1>
        <ul className='text-base'>
          <li>Email: Lorem ipsum dolor sit amet.</li>
          <li>Alamat: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed vel totam architecto voluptates. Optio ex ea impedit culpa! Cupiditate, ullam.</li>
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-2xl'>Sosial Media</h1>
        <ul className='flex flex-row gap-5'>
          <li><a href=""><img className='w-12 min-w-10' src="/images/instagram_logo.png" alt="instagram-logo" /></a></li>
          <li><a href=""><img className='w-12 min-w-10' src="/images/facebook_logo.png" alt="facebook-logo"/></a></li>
          <li><a href=""><img className='w-12 min-w-10' src="/images/twitter-logo.png" alt="twitter-logo"/></a></li>
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-2xl'>Statistik Pengunjung</h1>
        <ul className='text-base'>
          <li>Hari ini</li>
          <li>Minggu ini</li>
          <li>Bulan ini</li>
        </ul>
      </div>
    </div>
    <div className='bg-blue text-white text-center py-3'>
      <p>Copyright © 2024 Bolata, Dinas Komunikasi dan Informatika Kota Barru.</p>
      </div>
    </div>
  )
}

export default Footer