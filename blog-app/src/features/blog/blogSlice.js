import { getBlog } from "./blogAPI";

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
            });
    },
});

export default blogSlice.reducer;
