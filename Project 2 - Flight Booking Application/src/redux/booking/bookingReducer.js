import { CREATE, REMOVE } from "./actionTypes";

const initialState = {
    booking: []
}

const bookingReducer = (state = initialState, action) => {
    switch (action.type){
        case CREATE:
            return {
                ...state,
                booking : [...state.booking, action.payload]
            }
        case REMOVE:
            return {
                ...state,
                booking: state.booking.filter(book => book.id !== action.payload)
            }
        default:
            return state
    }
}

export default bookingReducer