import { apiSlice } from "../api/apiSlice";

const quizzesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getQuizzes: builder.query({
            query: () => '/quizzes'
        }),
        getQuiz: builder.query({
            query: (id) => `/quizzes/${id}`
        }),
        getQuizByVideo: builder.query({
            query: (videoId) => `/quizzes?video_id=${videoId}`
        }),
        addQuiz: builder.mutation({
            query: ({data}) => ({
                url: "/quizzes",
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled}) {
                try {
                    const { data: addedQuiz } = await queryFulfilled;
                    if(addedQuiz?.id) {
                        // Updating quizzes cache pessimistcally
                        dispatch(apiSlice.util.updateQueryData("getQuizzes", undefined, (draft) => {
                            draft.push(addedQuiz)
                        }))
                        // cache update end
                    }
                } catch (error) {
                    //error handling
                    console.log(error.message)
                }
            }
        }),
        editQuiz: builder.mutation({
            query: ({id, data}) => ({
                url: `/quizzes/${id}`,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data: editedQuiz } = await queryFulfilled;
                    if(editedQuiz?.id) {
                        // Updating quizzes cache pessimistcally
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getQuizzes",
                                undefined,
                                (draft) => {
                                   return draft.map(d => d.id == arg.id ? editedQuiz : d )
                                }
                            )
                        )
                        // cache update end
                        // update single quiz cache
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getQuiz",
                                arg?.id,
                                (draft) => editedQuiz
                            )
                        )
                        // update single quiz cached end
                    }
                } catch (error) {
                    // error handle here
                    console.log(error.message)
                }
            }
        }),
        deleteQuiz: builder.mutation({
            query: (id) => ({
                url: `/quizzes/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // Updating quizzes cache optimistically
                const deleteResult = dispatch(
                    apiSlice.util.updateQueryData(
                        "getQuizzes",
                        undefined,
                        (draft) => {
                           return draft.filter(d => d.id !== arg)
                        }
                    )
                )
                // optimistic quizzes cache update end here
                try {
                    await queryFulfilled
                } catch (error) {
                    // handle error and undo the optimistic update
                    deleteResult.undo();
                    console.log(error.message)
                }
            }
        })
    })
})

export const {
    useGetQuizzesQuery,
    useGetQuizQuery,
    useGetQuizByVideoQuery,
    useAddQuizMutation,
    useEditQuizMutation,
    useDeleteQuizMutation
} = quizzesApi;