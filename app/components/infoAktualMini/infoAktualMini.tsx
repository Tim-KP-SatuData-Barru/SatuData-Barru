import React from "react";
import Link from "next/link";
function InfoAktualMini({
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
                className="w-4"
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
                  <path
                    d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
                    fill="#FFFFFF"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12ZM12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z"
                    fill="#FFFFFF"
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

export default InfoAktualMini;
