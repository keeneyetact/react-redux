import axios from "../../utils/axios";


export const getRelatedBlogs = async ({ tags, id }) => {

    let queryString =
        tags?.length > 0 && tags.map((tag) => `tags_like=${tag}`).join("&")


    const response = await axios.get(`/blogs?${queryString}`);

    return response.data.filter((blog) => blog.id !== id);
};
