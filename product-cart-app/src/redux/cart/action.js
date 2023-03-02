import { INCREMENT, DECREMENT, DELETE, ADDTOCART } from "./actionTypes";

export const addToCart = (product, cartQuantity) => {
    return {
        type: ADDTOCART,
        payload: {
            product, cartQuantity
        }
    }
}

export const incrementCart = (productId, updatedProduct) => {
    return {
        type: INCREMENT,
        payload: {
            productId, updatedProduct
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