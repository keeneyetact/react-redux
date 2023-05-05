import { ADDED, ADDTOCART, REMOVETOCART, DELETETOCART } from "./actionTypes";

export const addProduct = (value) => {
    return {
        type: ADDED,
        payload: value
    }
}

export const addToCart = (productId) => {
    return {
        type: ADDTOCART,
        payload: productId
    }
}

export const removeToCart = (productId) => {
    return {
        type: REMOVETOCART,
        payload: productId
    }
}

export const deleteToCart = (productId) => {
    return {
        type: DELETETOCART,
        payload: productId
    }
}

