"use client";
import React from "react";

function Hero(){
    return(
        <section>
           

                <div className="bg-[url('/images/heroBg.png')] bg-cover bg-center  h-[70vh]  flex items-center flex-row justify-center text-white gap-x-52 -mt-1">
                <div className="  w-2/5 ">
                    <h2 className="text-6xl text-[#FF9519] font-extrabold mb-2">
                        Selamat Datang di
                        Bolata Yassiberrui !!
                    </h2>
                    <p className=" text-2xl font-light">
                        Pertal Satu Data Pemerintahan Kota Barru yang terbuka dalam memberikan kemudahan akses
                        untuk publik dan instansi pemerintahan.
                    </p>
                </div>

                <div>
                    <img className="size-full" src="/images/bolaHeroIcon.png"/>
                </div>
                </div>

        </section>
    )
}

export default Hero;