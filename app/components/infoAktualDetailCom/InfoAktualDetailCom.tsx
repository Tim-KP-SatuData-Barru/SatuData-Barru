import React from "react";
import { useParams } from "next/navigation";
import mockData from "../../../public/mockData";
import Navbar from "../navbar";
import Footer from "../footer";
import InfoAktualMini from "../infoAktualMini";

const InfoAktualDetailCom: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = mockData.find((item) => item.id === id);
  const dataSlice = mockData.slice(0, 5);

  return (
    <div>
      {data ? (
        <div>
          <div>
            <h1 className="text-blue-dark font-bold text-2xl">{data.title}</h1>
            <p className="text-blue-dark text-sm">
              Home &gt; Informasi Aktual &gt; {data.title}
            </p>
            <div className="flex flex-row gap-2">
              <div className="px-2 py-1 text-xs rounded-xl text-center flex flex-row gap-1 items-center text-blue-dark">
                <svg
                  className="w-4"
                  fill="#FB7436"
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
              <div className="px-2 py-1 text-xs rounded-xl text-center text-blue-dark flex flex-row gap-1 items-center">
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
                    <circle cx="12" cy="12" r="4" fill="#FB7436"></circle>{" "}
                    <path
                      d="M21 12C21 12 20 4 12 4C4 4 3 12 3 12"
                      stroke="#FB7436"
                      stroke-width="2"
                    ></path>{" "}
                  </g>
                </svg>
                <p>{data.views} Views</p>
              </div>
            </div>
          </div>
          <p>{data.content}</p>
        </div>
      ) : (
        <p>Info Aktual tidak ditemukan</p>
      )}
    </div>
  );
};

export default InfoAktualDetailCom;
