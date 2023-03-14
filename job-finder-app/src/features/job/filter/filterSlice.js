import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: '',
    sort: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        searchBy: (state, action) => {
            state.search = action.payload
        },
        sortBy: (state, action) => {
            state.sort = action.payload
        }
    }
})

export default filterSlice.reducer