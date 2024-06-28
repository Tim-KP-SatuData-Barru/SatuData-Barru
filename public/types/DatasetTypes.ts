export interface DatasetProps {
  attributes: DatasetProps;
  id: string;
  judul_kegiatan: string;
  tahun_kegiatan: string;
  cara_pengumpulan_data: string;
  sektor_kegiatan: string;
  jenis_kegiatan_statistik: string;
  identitas_rekomendasi: string;
  instansi_penyelenggara: string;
  alamat_lengkap_instansi_penyelenggara: string;
  unit_eselon_penanggungjawab: string;
  penanggungjawab_teknis: string;
  csv: file;
  pdf: file;
}

interface CSVAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null;
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

interface CSVData {
  id: number;
  attributes: CSVAttributes;
}

interface file {
  data: CSVData;
}
