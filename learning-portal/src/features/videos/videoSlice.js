import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        selectedVideo: (state, action) => {
            state.video = action.payload
        }
    }
});

export const { selectedVideo } = videoSlice.actions;
export default videoSlice.reducer;