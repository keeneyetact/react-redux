import { apiSlice } from "../api/apiSlice";

const quizMarkApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getQuizMark: builder.query({
            query: () => '/quizMark'
        }),
        findQuiz: builder.query({
            query: ({stdId, videoId}) => `/quizMark?student_id=${stdId}&video_id=${videoId}`,
            transformResponse: (response) => {
                if (Array.isArray(response) && response.length === 1) {
                  return response[0]
                }
                return response
              },
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
    useFindQuizQuery,
    useSubmitQuizMutation
} = quizMarkApi