import { ADDED, UPDATED } from "./actionTypes";

export const addProduct = (value) => {
    return {
        type: ADDED,
        payload: value
    }
}

export const updateProduct = (productId, product) => {
    return {
        type: UPDATED,
        payload: {
            productId, product
        }
    }
}