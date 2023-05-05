import axios from "../../utils/axios";

export const getJobs = async (query) => {
    let queryString =
        query && `q=${query}`

    const response = await axios.get(`/jobs?${queryString}`)

    return response.data
}

export const getJob =  async (jobId) => {
    const response = await axios.get(`/jobs/${jobId}`)

    return response.data;
}

export const addJob = async (data) => {
    const response = await axios.post('/jobs', data)

    return response.data
}

export const editJob = async (id, data) => {
    const response = await axios.put(`/jobs/${id}`, data)

    return response.data
}

export const deleteJob = async (id) => {
    const response = await axios.delete(`/jobs/${id}`)

    return response.data
}