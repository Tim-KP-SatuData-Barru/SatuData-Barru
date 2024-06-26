import React from "react";
import InfoAktualMini from "../infoAktualMini";
import mockDataInfoAktual from "../../../public/mockData/mockDataInfoAktual";
import Link from "next/link";
function InfoAktualDashboard() {
  const data = mockDataInfoAktual.slice(0, 5);
  const infoLink = "/informasi-aktual";

  if (data)
    return (
      <div className="flex flex-col gap-8 px-14 py-14">
        <div className="flex flex-row gap-3">
          <div className="bg-orange w-1"></div>
          <div className="flex flex-col">
            <p className="text-blue text-base">INFORMASI</p>
            <p className="text-orange font-bold text-2xl">Informasi Aktual</p>
          </div>
        </div>
        <div className="flex flex-row gap-7 overflow-x-scroll scroll-smooth py-3">
          {data.map((item) => (
            <InfoAktualMini
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              views={item.views}
              date={item.date}
            />
          ))}
        </div>
        <Link href={infoLink}>
          <div className="flex justify-center">
            <button className="bg-blue text-white w-60 h-12 rounded-3xl">
              Selengkapnya
            </button>
          </div>
        </Link>
      </div>
    );
}

export default InfoAktualDashboard;
