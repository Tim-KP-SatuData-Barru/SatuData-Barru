import React from "react";

interface DatasetModalInfoProps {
    judul: string;
    isi: string;
}

function DatasetModalInfo(data: DatasetModalInfoProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-orange font-black text-sm">{data.judul}</h1>
      <p className="text-xs">{data.isi}</p>
    </div>
  );
}

export default DatasetModalInfo;