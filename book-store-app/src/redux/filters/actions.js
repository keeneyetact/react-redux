import { FEATURED, ALL } from "./actionTypes";

export const featuredBooks = () => {
    return {
        type: FEATURED
    }
}

export const allBooks = () => {
    return {
        type: ALL
    }
}