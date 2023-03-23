import { apiSlice } from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "/tasks",
        }),
        getTask: builder.query({
            query: (id) => `/tasks/${id}`,
        }),
        addTask: builder.mutation({
            query: ({data}) => ({
                url: '/tasks',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(data, {queryFulfilled, dispatch}) {
                console.log('here')
                try {
                    const task = await queryFulfilled;
                    if(task?.data) {
                        console.log('task', task)
                        // update task cache pessimistcally start
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getTasks",
                                data,
                                (draft) => {
                                    console.log({draft, task})
                                    Object.assign(draft, data)
                                }
                            )
                        );
                        //update task cache end
                    }
                } catch (error) {
                    // error handle
                    console.log(error)
                }
            }
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(id, { queryFulfilled, dispatch}) {
                // optimistic cache update
                const deleteResult = dispatch(
                    apiSlice.util.updateQueryData(
                        "getTasks",
                        id,
                        (draft) => {
                            console.log("draft before update:", draft);
                            draft.data = draft.data.filter(d => d.id !== id.toString())
                        }
                    )
                )
                console.log('here')
                // optimistic cache update end
                try {
                    console.log('here')
                    await queryFulfilled(deleteResult)
                } catch (error) {
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
            async onQueryStarted(args, {queryFulfilled, dispatch}) {
                console.log('here')
                try {
                    const task = await queryFulfilled;
                    if(task?.data) {
                        console.log('task', task)
                        // update task cache pessimistcally start
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getTasks",
                                args,
                                (draft) => {
                                    console.log({draft, task})
                                    draft.data = draft.data.map(d => d.id === args.id.toString() ? task?.data : d)
                                }
                            )
                        );
                        //update task cache end
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
    useGetTasksQuery,
    useGetTaskQuery,
    useAddTaskMutation,
    useEditTaskMutation,
    useDeleteTaskMutation
} = taskApi