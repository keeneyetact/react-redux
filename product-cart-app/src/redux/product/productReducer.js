import { ADDED, ADDTOCART, DELETETOCART, REMOVETOCART } from "./actionTypes";

const initialState = []

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [...state, action.payload]
        case ADDTOCART:
            const cartAdd = state.find(p => p.id === action.payload);
            if (cartAdd.quantity > 0) {
                return state.map(p => (p.id === action.payload) ?
                     {
                    ...p,
                    quantity: Number(p.quantity) - 1,
                    cartQty: p.cartQty + 1,
                    cartTotal: p.cartTotal + Number(p.price)
                    } : p )
            } else {
                  return state;
                }
        case REMOVETOCART:
                    const removeCart = state.find(p => p.id === action.payload);
        
                    if (removeCart.cartQty > 0) {
                        return state.map(p => (p.id === action.payload) ?
                             {
                            ...p,
                            quantity: Number(p.quantity) + 1,
                            cartQty: p.cartQty - 1,
                            cartTotal: p.cartTotal - Number(p.price)
                            } : p )
                        } else {
                            return state;
                        }
        case DELETETOCART:
                    const deleteCart = state.find(p => p.id === action.payload);
        
                    if (deleteCart.cartQty > 0) {
                        return state.map(p => (p.id === action.payload) ?
                             {
                            ...p,
                            quantity: Number(p.quantity) + p.cartQty,
                            cartQty: 0,
                            cartTotal: 0
                            } : p )
                        } else {
                            return state;
                        }
        default:
            return state;
    }
}

export default productReducer