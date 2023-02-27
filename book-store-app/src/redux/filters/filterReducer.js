import { FEATURED, ALL } from "./actionTypes";

const intialState = {
    isFeature: false
}

const filterReducer = (state = intialState, action) => {
    switch (action.type) {
        case FEATURED:
            return {
                ...state,
                isFeature : true
            }
        case ALL:
            return {
                ...state,
                isFeature : false
            }
        default:
            return state
    }
}

export default filterReducer
