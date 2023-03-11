import axios from "../../utils/axios";

export const getBlog = async (id) => {
    const response = await axios.get(`/blogs/${id}`);

    return response.data;
};

export const blogLike = async ({id, newBlog}) => {
    const response = await axios.put(`/blogs/${id}`, newBlog)

    return response.data;    
}
