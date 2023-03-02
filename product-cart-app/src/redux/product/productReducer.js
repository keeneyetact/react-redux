import { ADDED, ADDTOCART, DELETETOCART, REMOVETOCART } from "./actionTypes";

const initialState = [{
    "name": "Spring and summershoes",
    "thumbnail": "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
    "category": "shoes",
    "price": 39.99,
    "quantity": 5,
    "id": 1,
    "cartQty": 0,
    "cartTotal":0
},{
    "name": "Womens Winter Clothes",
    "thumbnail": "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
    "category": "tops",
    "price": 49.99,
    "quantity": 10,
    "id": 2,
    "cartQty": 0,
    "cartTotal":0
}]

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [...state, action.payload]
        case ADDTOCART:
            console.log(action.payload)
            const cartAdd = state.find(p => p.id === action.payload);
            if (cartAdd.quantity > 0) {
                return state.map(p => (p.id === action.payload) ?
                     {
                    ...p,
                    quantity: p.quantity - 1,
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
                            quantity: p.quantity + 1,
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
                            quantity: p.quantity + p.cartQty,
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