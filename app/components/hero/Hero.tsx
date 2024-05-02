import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section>
      <div className="bg-[url('/images/background.webp')] bg-cover bg-center h-[90vh] px-14 flex items-center flex-row justify-space text-white gap-20">
        <div className="w-3/5">
          <h2 className="text-5xl text-orange-dark font-extrabold mb-2">
            Selamat Datang di Bolata Yassiberrui !!
          </h2>
          <p className="text-heading-s font-light">
            Pertal Satu Data Pemerintahan Kota Barru yang terbuka dalam
            memberikan kemudahan akses untuk publik dan instansi pemerintahan.
          </p>
        </div>

        <Image
            className="mb-20"
            src="/images/hero.svg"
            width={520}
            height={380}
            alt="hero image"
        />
      </div>
    </section>
  );
}

export default Hero;
