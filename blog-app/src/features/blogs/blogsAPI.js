import axios from "../../utils/axios";

export const getBlogs = async (sort) => {
    let queryString = "";

    if (sort !== "") {
        queryString += `_sort=${sort}&_order=desc`;
    }

    const response = await axios.get(`/blogs/?${queryString}`);

    return response.data;
};
