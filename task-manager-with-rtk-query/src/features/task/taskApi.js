import { apiSlice } from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "/tasks",
            keepUnusedDataFor: 300,
        }),
        addTask: builder.mutation({
            query: ({data}) => ({
                url: '/tasks',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(args, {queryFulfilled, dispatch}) {
                console.log('here')
                try {
                    const task = await queryFulfilled;
                    if(task?.data) {
                        console.log(task)
                        // update task cache pessimistcally start
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getTasks",
                                (draft) => {
                                    console.log({draft, task})
                                    return {
                                        data: [...draft.data, ...task.data]
                                    }
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
        })
    })
})

export const {
    useGetTasksQuery,
    useAddTaskMutation
} = taskApi