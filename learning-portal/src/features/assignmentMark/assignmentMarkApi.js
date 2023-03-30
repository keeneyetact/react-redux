import { apiSlice } from "../api/apiSlice";

const assignemtMarkApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchAssignments: builder.query({
            query: () => '/assignmentMark'
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
        })
    })
})

export const {
    useFetchAssignmentsQuery,
    useMarkAssignmentMutation
} = assignemtMarkApi