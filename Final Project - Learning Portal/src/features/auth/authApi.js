import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          // setting current user in the localstorage
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
              role: result.data.user?.role,
            })
          );

          // keeping current user info in the redux store
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
              role: result.data.user?.role,
            })
          );
        } catch (error) {
          // error case
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          // setting localstorage
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
              role: result.data.user?.role,
            })
          );

          // keeping current user info in the redux store
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
              role: result.data.user?.role,
            })
          );
        } catch (error) {
          // error case
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
