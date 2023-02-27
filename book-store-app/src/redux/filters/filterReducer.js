import { FEATURED, ALL } from "./actionTypes";

const intialState = {
    isFeatured: false
}

const filterReducer = (state = intialState, action) => {
    switch (action.type) {
        case FEATURED:
            return {
                ...state,
                isFeatured : true
            }
        case ALL:
            return {
                ...state,
                isFeatured : false
            }
        default:
            return state
    }
}

export default filterReducer
