import React from "react";

function Statistik() {
  return (
    <main className="flex flex-col gap-8 px-14 pt-14">
      <section className="flex flex-row gap-3">
        <div className="bg-orange w-1"></div>
        <section className="flex flex-col">
          <p className="text-blue text-base">STATISTIK</p>
          <p className="text-orange font-bold text-2xl">
            Statistik Satu Data Kabupaten Barru
          </p>
        </section>
      </section>

      <section className="flex flex-wrap grow gap-6">
        <div className="flex flex-col border w-[274px] h-[165px] p-5 rounded-3xl shadow-lg shadow-white-hover bg-white">
          <h2 className="flex font-bold text-blue-dark text-heading-l">
            1500
          </h2>
          <h3 className="text-orange font-bold text-heading-s">Element Data</h3>
          <h3 className="text-l">Kumpulan data yang dapat diakses publik</h3>
        </div>

        <div className="flex flex-col border w-[274px] h-[165px] p-5 rounded-3xl shadow-lg shadow-white-hover bg-white">
          <h2 className="flex font-bold text-blue-dark text-heading-l">36</h2>
          <h3 className="text-orange font-bold text-heading-s">OPD/Instansi</h3>
          <h3 className="text-l">Data-Data Organisasi Perangkat Daerah</h3>
        </div>

        <div className="flex flex-col border w-[274px] h-[165px] p-5 rounded-3xl shadow-lg shadow-white-hover bg-white">
          <h2 className="flex font-bold text-blue-dark text-heading-l">20</h2>
          <h3 className="text-orange font-bold text-heading-s">Kategori</h3>
          <h3 className="text-l">Kategori dalam website Satu Data Barru</h3>
        </div>

        <div className="flex flex-col border w-[274px] h-[165px] p-5 rounded-3xl shadow-lg shadow-white-hover bg-white">
          <h2 className="flex font-bold text-blue-dark text-heading-l">927</h2>
          <h3 className="text-orange font-bold text-heading-s">
            Jumlah Pengunjung
          </h3>
          <h3 className="text-l">Jumlah Pengunjung Satu Data Barru</h3>
        </div>
      </section>
    </main>
  );
}

export default Statistik;
