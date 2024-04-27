import React from "react";
import Link from "next/link";
function InfoAktualMiniPreview({
  data,
}: {
  data: {
    id: string;
    image: string;
    title: string;
    date: string;
    views: number;
  };
}) {
  return (
    <Link href={`/informasi-aktual/${data.id}`}>
      <div
        className="flex flex-col rounded-2xl justify-end min-w-[360px] max-w-24 drop-shadow-lg"
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "40vw",
          height: "30vh",
        }}
      >
        <div className="min-h-24 px-3 py-3 bg-white rounded-b-2xl flex flex-col gap-1">
          <div className="flex flex-row gap-2">
            <div className="bg-orange-light px-2 py-1 text-xs rounded-xl text-center flex flex-row gap-1 items-center">
              <svg
                className="w-4"
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M6,22H18a3,3,0,0,0,3-3V7a2,2,0,0,0-2-2H17V3a1,1,0,0,0-2,0V5H9V3A1,1,0,0,0,7,3V5H5A2,2,0,0,0,3,7V19A3,3,0,0,0,6,22ZM5,12.5a.5.5,0,0,1,.5-.5h13a.5.5,0,0,1,.5.5V19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1Z"></path>
                </g>
              </svg>
              <p>{data.date}</p>
            </div>
            <div className="bg-blue-dark px-2 py-1 text-xs rounded-xl text-center text-white flex flex-row gap-1 items-center">
              <svg
                className="w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <circle cx="12" cy="12" r="4" fill="#ffffff"></circle>{" "}
                  <path
                    d="M21 12C21 12 20 4 12 4C4 4 3 12 3 12"
                    stroke="#ffffff"
                    stroke-width="2"
                  ></path>{" "}
                </g>
              </svg>
              <p>{data.views} Views</p>
            </div>
          </div>
          <h1 className="text-md font-bold text-blue-dark">{data.title}</h1>
        </div>
      </div>
    </Link>
  );
}

export default InfoAktualMiniPreview;
