import { blogLike, getBlog } from "./blogAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    blog: {},
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
    const blog = await getBlog(id);
    return blog;
});

export const updateBlogLike = createAsyncThunk("blog/updateBlogLike", async ({id, newBlog}) => {
    const blog = await blogLike({id, newBlog});
    return blog
})

const blogSlice = createSlice({
    name: "blog",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlog.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blog = action.payload;
            })
            .addCase(fetchBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.blog = {};
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(updateBlogLike.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(updateBlogLike.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blog = action.payload;
            })
            .addCase(updateBlogLike.rejected, (state, action) => {
                state.isLoading = false;
                state.blog = {};
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default blogSlice.reducer;
