import { LOADED, ADDED, UPDATED, DELETED } from "./actionTypes";

const initialState = []

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload
        case ADDED:
            return [...state, action.payload]
        case UPDATED:
            const {bookId, updatedBook} = action.payload;
            console.log(updatedBook)
            return state.map((book) => book.id === bookId ? updatedBook : book);
        case DELETED:
            return state.filter((book) => book.id !== action.payload);
    
        default:
            return state;
    }
}

export default bookReducer