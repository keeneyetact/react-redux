import { INCREMENT, DECREMENT, DELETE, ADDTOCART } from "./actionTypes";

const initialState = {
    total: 0,
    product: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTOCART:
            const { product, cartQuantity} = action.payload
            return {
                ...state,
                total : state.total + product.price ,
                product: [...state.product, product]
            }
        case INCREMENT:
            const {productId, updatedProduct} = action.payload;
            console.log(updatedProduct)
            return {
                ...state,
                total: state.total + updatedProduct.price,
                product: state.product.map((product) => product.id === productId ? [product, product.cartQuantity += 1] : product)
            }
        // case DECREMENT:
        //     const {productId, updatedProduct} = action.payload;
        //     return {
        //         ...state,
        //         total: state.total + updatedProduct.price,
        //         product: state.product.map((product) => product.id === productId ? product.cartQuantity += 1 : product)
        //     }
    
        default:
            return state
    }
}

export default cartReducer