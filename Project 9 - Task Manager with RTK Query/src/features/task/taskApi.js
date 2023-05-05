import { apiSlice } from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllTask: builder.query({
            query: () => "/tasks",
        }),
        getSingleTask: builder.query({
            query: (id) => `/tasks/${id}`,
        }),
        addTask: builder.mutation({
            query: ({data}) => ({
                url: "/tasks",
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const {data: addedTask} = await queryFulfilled;
                    if(addedTask?.id) {
                        // update task cache pessimistcally start
                        dispatch(apiSlice.util.updateQueryData("getAllTask", undefined, (draft) => {
                            // console.log("Draft:", arg, JSON.stringify(draft));
                            draft.push(addedTask);
                        }));                        
                        //update task cache end
                    }
                } catch (error) {
                    // error handle
                    console.log(error.message)
                }
            }
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch}) {
                // optimistic cache update
                const deleteResult = dispatch(
                    apiSlice.util.updateQueryData(
                        "getAllTask",
                        undefined,
                        (draft) => {
                            // console.log("Draft:", arg, JSON.stringify(draft));
                            return draft.filter(d => d.id !== arg)
                        }
                    )
                )
                // optimistic cache update end
                try {
                    await queryFulfilled
                } catch (error) {
                    console.log(error)
                    deleteResult.undo()
                }
            }
        }),
        editTask: builder.mutation({
            query: ({id, data}) => ({
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const task = await queryFulfilled;
                    if(task?.data) {
                        // update task cache pessimistcally start
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getAllTask",
                                undefined,
                                (draft) => {
                                    return draft.map(d => d.id == arg.id ? task.data : d)
                                }
                            )
                        );
                        //update task cache end
                        dispatch(apiSlice.util.updateQueryData("getSingleTask", arg?.id, (draft) => task.data))
                    }
                } catch (error) {
                    // error handle
                    console.log(error)
                }
            }
        }),
    })
})

export const {
    useGetAllTaskQuery,
    useGetSingleTaskQuery,
    useAddTaskMutation,
    useEditTaskMutation,
    useDeleteTaskMutation
} = taskApi