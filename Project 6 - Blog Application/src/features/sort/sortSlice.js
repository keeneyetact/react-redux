const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    sort: {},
};

const sortSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        sortSelected: (state, action) => {
            state.sort = action.payload
        },
    },
});

export default sortSlice.reducer;
export const { sortSelected } = sortSlice.actions;
