import { createAPi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createAPi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL
    }),
    endpoints: (builder) => ({})
})