import axios from "axios";

export const getListDatasets = async () => {
    const response = await axios.get(`http://localhost:3001/api/datasets?populate=*`);

    return response.data.data;
};

export const getListBidangs = async (dinas: string) => {
    const response = await axios.get(`http://localhost:3001/api/daftar-dinas?filters[nama][$eq]=${dinas}&populate[bidangs][populate]=data_bidangs`);

    return response.data.data;
};

export const getDetailBidang = async (bidang: string) => {
    const response = await axios.get(`http://localhost:3001/api/daftar-bidang?filters[nama_bidang][$eq]=${bidang}&populate=data_bidangs`);

    return response.data.data;
};

export const getListPublikasis = async () => {
    const response = await axios.get(`http://localhost:3001/api/daftar-publikasi?populate=*`);

    return response.data.data;
};

export const getDetailPublikasi = async (id: string) => {
    const response = await axios.get(`http://localhost:3001/api/daftar-publikasi/${id}?populate=*`);

    return response.data.data;
};
