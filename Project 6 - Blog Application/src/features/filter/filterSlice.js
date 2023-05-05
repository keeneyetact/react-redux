const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    filter: {
        isSaved: false
    },
};

const filterSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        filterSelected: (state, action) => {
            state.filter.isSaved = action.payload
        },
    },
});

export default filterSlice.reducer;
export const { filterSelected } = filterSlice.actions;
