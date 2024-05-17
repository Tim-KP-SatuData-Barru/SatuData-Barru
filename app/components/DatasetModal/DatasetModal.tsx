import React from "react";
import Link from "next/link";
import { DatasetProps } from "@/public/types/DatasetTypes";
import Image from "next/image";
import DatasetModalInfo from "./DatasetModalInfo";

interface DatasetModalProps {
  card: DatasetProps | null,
  onClose: () => void
}

const DatasetModal = (data: DatasetModalProps) => {
  if (!data.card) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={data.onClose}>
      <div className="flex flex-col bg-white p-6 rounded-lg relative max-w-[80%] max-h-[90vh] gap-5" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-3 right-6 text-lg font-black" onClick={data.onClose}>X</button>
        <div className="flex justify-center items-center">
          <h1 className="text-blue font-black text-xl">INFORMATION DETAIL</h1>
        </div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="font-black text-lg">INFORMASI UMUM</h1>
              <DatasetModalInfo judul="Judul Kegiatan" isi={data.card.judul} />
              <DatasetModalInfo judul="Tahun Kegiatan" isi={data.card.judul} />
              <DatasetModalInfo judul="Cara Pengumpulan Data" isi={data.card.judul} />
              <DatasetModalInfo judul="Sektor Kegiatan" isi={data.card.judul} />
              <DatasetModalInfo judul="Jenis Kegiatan Statistik" isi={data.card.judul} />
              <DatasetModalInfo judul="Identitas Rekomendasi" isi={data.card.judul} />
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex flex-row bg-red-600 rounded-md pr-2 py-1 gap-2 w-[30%] justify-center">
                <Image height={15} width={25} src="/images/dataset/PDFWhite.png" alt="pdflogo"/>
                <h1 className="text-white font-black text-sm">PDF</h1>
              </div>
              <div className="flex flex-row bg-lime-700 rounded-md pr-2 py-1 gap-2 w-[30%] justify-center">
                <Image height={15} width={25} src="/images/dataset/MicrosoftExcelWhite.png" alt="pdflogo"/>
                <h1 className="text-white font-black text-sm">Excel</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <h1 className="font-black text-lg">Penyelenggara</h1>
              <DatasetModalInfo judul="Instansi Penyelenggara" isi={data.card.judul} />
              <DatasetModalInfo judul="Alamat Lengkap Instansi Penyelenggara" isi={data.card.judul} />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-black text-lg">Penanggung Jawab</h1>
              <DatasetModalInfo judul="Unit Eselon Penanggung Jawab" isi={data.card.judul} />
              <DatasetModalInfo judul="Penanggung Jawab Teknis" isi={data.card.judul} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatasetModal;