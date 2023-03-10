import { getBlogs } from "./blogsAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    blogs: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchBlogs = createAsyncThunk(
    "blogs/fetchBlogs",
    async ({ tags, sort, filter }) => {
        const blogs = await getBlogs(tags, sort, filter);
        return blogs;
    }
);

const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blogs = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.blogs = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default blogsSlice.reducer;
