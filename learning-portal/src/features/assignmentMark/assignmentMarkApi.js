import { apiSlice } from "../api/apiSlice";

const assignemtMarkApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAssignmentMark: builder.query({
            query: () => '/assignmentMark'
        }),
        findAssignment: builder.query({
            query: ({stdId, assignmentId}) => `/assignmentMark?student_id=${stdId}&assignment_id=${assignmentId}`,
            transformResponse: (response) => {
                if (Array.isArray(response) && response.length === 1) {
                  return response[0]
                }
                return response
              },
        }),
        markAssignment: builder.mutation({
            query: ({id, data}) => ({
                url: `/assignmentMark/${id}`,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data: markedAssignment } = await queryFulfilled;
                    if(markedAssignment?.id) {
                        // Updating assignment cache pessimistcally
                        dispatch(apiSlice.util.updateQueryData("fetchAssignments", undefined, (draft) => {
                            return draft.map(d => d.id == arg.id ? markedAssignment : d )
                       }))
                       // cache update end
                   }
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        submitAssignment: builder.mutation({
            query: ({data})=> ({
                url: '/assignmentMark',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data: submitedAssignment } = await queryFulfilled;
                    if(submitedAssignment?.id) {
                        // Updating find assignment cache pessimistcally
                        dispatch(apiSlice.util.updateQueryData("findAssignment", 
                        {stdId: submitedAssignment.student_id, assignmentId: submitedAssignment.assignment_id}, 
                        (draft) => submitedAssignment))
                       // cache update end
                   }
                } catch (error) {
                    console.log(error)
                }
            }
        })
    })
})

export const {
    useGetAssignmentMarkQuery,
    useFindAssignmentQuery,
    useMarkAssignmentMutation,
    useSubmitAssignmentMutation
} = assignemtMarkApi