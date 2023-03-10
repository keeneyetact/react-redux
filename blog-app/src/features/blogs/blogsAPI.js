import axios from "../../utils/axios";

export const getBlogs = async (tags, sort, filter) => {
    let queryString = "";

    // if (tags?.length > 0) {
    //     queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    // }

    // if (search !== "") {
    //     queryString += `&q=${search}`;
    // }

    // const response = await axios.get(`/blogs/?${queryString}`);
    const response = await axios.get(`/blogs`);

    console.log(response)

    return response.data;
};
