import { apiSlice } from "../api/apiSlice";

const quizMarkApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getQuizMark: builder.query({
            query: () => 'quizMark'
        }),
        getSingleQuiz: builder.query({
            query: ({stdId, videoId}) => `/quizMark?student_id${stdId}&video_id${videoId}`
        }) ,
        submitQuiz: builder.mutation({
            query: ({data}) => ({
                url: '/quizMark',
                method: 'POST',
                body: data
            })
        })
    })
})

export const {
    useGetQuizMarkQuery,
    useGetSingleQuizQuery,
    useSubmitQuizMutation
} = quizMarkApi