export interface FileAttributes {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: string | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

export interface FileData {
  data: {
    id: number;
    attributes: FileAttributes;
  };
}

export interface PublicationAttributes {
  judul: string;
  nomor_katalog: string;
  nomor_publikasi: string;
  ISSN_ISBN: string;
  tanggal_rilis: string;
  deskripsi: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  pdf: FileData;
  image: FileData;
}

export interface DataProps {
  id: number;
  attributes: PublicationAttributes;
}
