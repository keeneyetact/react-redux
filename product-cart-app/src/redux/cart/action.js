import { INCREMENT, DECREMENT, DELETE, ADDTOCART } from "./actionTypes";

export const addToCart = (product, cartQuantity) => {
    return {
        type: ADDTOCART,
        payload: {
            product, cartQuantity
        }
    }
}

export const incrementCart = (product, productQuantity) => {
    return {
        type: INCREMENT,
        payload: {
            product, productQuantity
        }
    }
}

export const decrementCart = (productId, productQuantity) => {
    return {
        type: DECREMENT,
        payload: {
            productId, productQuantity
        }
    }
}

export const deleteToCart = (productId) => {
    return {
        type: DELETE,
        payload: productId
    }
}