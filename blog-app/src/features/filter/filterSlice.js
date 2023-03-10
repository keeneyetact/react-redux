const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    filter: {},
};

const filterSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        filterSelected: (state, action) => {
            state.filter = action.payload
        },
        filterRemoved: (state, action) => {
            state.filter = {}
        },
        
    },
});

export default filterSlice.reducer;
export const { filterSelected, filterRemoved } = filterSlice.actions;
