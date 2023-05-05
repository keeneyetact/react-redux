import { apiSlice } from "../api/apiSlice";

export const assignmentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignments: builder.query({
      query: () => "/assignments",
    }),
    getAssignment: builder.query({
      query: (id) => `/assignments/${id}`,
    }),
    addAssignment: builder.mutation({
      query: ({ data }) => ({
        url: "/assignments",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data: addedAssignment } = await queryFulfilled;
          if (addedAssignment?.id) {
            // Updating assignment cache pessimistcally
            dispatch(
              apiSlice.util.updateQueryData(
                "getAssignments",
                undefined,
                (draft) => {
                  draft.push(addedAssignment);
                }
              )
            );
            // cache update end
          }
        } catch (error) {
          // error handling
          console.log(error.message);
        }
      },
    }),
    editAssignments: builder.mutation({
      query: ({ id, data }) => ({
        url: `/assignments/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data: editedAssignment } = await queryFulfilled;
          if (editedAssignment?.id) {
            // Updating assignment cache pessimistcally
            dispatch(
              apiSlice.util.updateQueryData(
                "getAssignments",
                undefined,
                (draft) => {
                  return draft.map((d) =>
                    d.id == arg.id ? editedAssignment : d
                  );
                }
              )
            );
            // cache update end
            // update single assignment cache
            dispatch(
              apiSlice.util.updateQueryData(
                "getAssignment",
                arg?.id,
                (draft) => editedAssignment
              )
            );
            // update single video cached end
          }
        } catch (error) {
          // error handle here
          console.log(error.message);
        }
      },
    }),
    deleteAssignment: builder.mutation({
      query: (id) => ({
        url: `/assignments/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        // Updating assignment cache optimistically
        const deleteResult = dispatch(
          apiSlice.util.updateQueryData(
            "getAssignments",
            undefined,
            (draft) => {
              return draft.filter((d) => d.id !== arg);
            }
          )
        );
        // optimistic assignment cache update end here
        try {
          await queryFulfilled;
        } catch (error) {
          // handle error and undo the optimistic update
          deleteResult.undo();
          console.log(error.message);
        }
      },
    }),
  }),
});

export const {
  useGetAssignmentQuery,
  useGetAssignmentsQuery,
  useAddAssignmentMutation,
  useEditAssignmentsMutation,
  useDeleteAssignmentMutation,
} = assignmentsApi;
