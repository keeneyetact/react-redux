import { apiSlice } from "../api/apiSlice";

export const videosApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => '/videos'
        }),
        getVideo: builder.query({
            query: (id) => `/videos/${id}`
        }),
        addVideo: builder.mutation({
            query: ({data}) => ({
                url: "/videos",
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled}) {
                try {
                    const { data: addedVideo } = await queryFulfilled;
                    if(addedVideo?.id) {
                        // Updating video cache pessimistcally
                        dispatch(apiSlice.util.updateQueryData("getVideos", undefined, (draft) => {
                            draft.push(addedVideo)
                        }))
                        // cache update end
                    }
                } catch (error) {
                    //error handling
                    console.log(error.message)
                }
            }
        }),
        editVideo: builder.mutation({
            query: ({id, data}) => ({
                url: `/videos/${id}`,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data: editedVideo } = await queryFulfilled;
                    if(editedVideo?.id) {
                        // Updating video cache pessimistcally
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getVideos",
                                undefined,
                                (draft) => {
                                   return draft.map(d => d.id == arg.id ? editedVideo : d )
                                }
                            )
                        )
                        // cache update end
                        // update single video cache
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getVideo",
                                arg?.id,
                                (draft) => editedVideo
                            )
                        )
                        // update single video cached end
                    }
                } catch (error) {
                    // error handle here
                    console.log(error.message)
                }
            }
        }),
        deleteVideo: builder.mutation({
            query: (id) => ({
                url: `/videos/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // Updating vidoe cache optimistically
                const deleteResult = dispatch(
                    apiSlice.util.updateQueryData(
                        "getVideos",
                        undefined,
                        (draft) => {
                           return draft.filter(d => d.id !== arg)
                        }
                    )
                )
                // optimistic video cache update end here
                try {
                    await queryFulfilled

                } catch (error) {
                    // handle error and undo the optimistic update
                    deleteResult.undo();
                    console.log(error)
                }
            }
        })
    })
})

export const {
    useGetVideosQuery,
    useGetVideoQuery,
    useAddVideoMutation,
    useEditVideoMutation,
    useDeleteVideoMutation
} = videosApi