import axios from "axios";

export const getListDatasets = async () => {
    const response = await axios.get(`http://localhost:3001/api/datasets?populate=*`);

    return response.data.data;
};