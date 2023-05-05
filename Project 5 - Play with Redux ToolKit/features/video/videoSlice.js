const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// initial state
const initialState = {
    loading: false,
    videos: [],
    error: "",
};



// create fetch video async thunk
const fetchVideos = createAsyncThunk("video/fetchVideos", async () => {
    const initialResponse = await fetch(
        "http://localhost:9000/videos"
    );
    const video = await initialResponse.json();

    return video
});


// helper function to convert views into numbers
function parseViews(views) {
    // Remove the 'k' suffix and multiply by 1000
    return parseFloat(views.replace("k", "")) * 1000;
  }
  
// comparison function to sort by views
function compareByViews(a, b) {
    // Convert views into numbers and compare them
    return parseViews(b.views) - parseViews(a.views);
  }

// related video async thunk
const fetchRelatedVideos = createAsyncThunk("video/fetchRelatedVideos", async (tags) => {

    // making query
    let queryString =
        tags?.length > 0 && tags.map((tag) => `tags_like=${tag}`).join("&")

    const finalResponse = await fetch(`http://localhost:9000/videos?${queryString}`);
    const videos = await finalResponse.json()

    // comparing final videos and returning them
    return videos.sort(compareByViews);
})

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });

        builder.addCase(fetchVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.videos = action.payload;
        });

        builder.addCase(fetchVideos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.videos = [];
        });
        builder.addCase(fetchRelatedVideos.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });

        builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.videos = action.payload;
        });

        builder.addCase(fetchRelatedVideos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.videos = [];
        });
    },
});

module.exports = videoSlice.reducer;
module.exports.fetchVideos = fetchVideos;
module.exports.fetchRelatedVideos = fetchRelatedVideos;
