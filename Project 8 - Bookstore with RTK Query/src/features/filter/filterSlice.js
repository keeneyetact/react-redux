const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    filter: {
        isFeatured: false,
        search: ''
    },
};

const filterSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        featuredBy: (state, action) => {
            state.filter.isFeatured = action.payload
        },
        searchBy: (state, action) => {
            state.filter.search = action.payload
        },
    },
});

export default filterSlice.reducer;
export const { featuredBy, searchBy } = filterSlice.actions;
