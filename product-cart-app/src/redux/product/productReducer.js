import { ADDED, UPDATED } from "./actionTypes";

const initialState = [{
    "name": "Spring and summershoes",
    "thumbnail": "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
    "category": "shoes",
    "price": 39.99,
    "quantity": 5,
    "id": 1
},{
    "name": "Womens Winter Clothes",
    "thumbnail": "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
    "category": "tops",
    "price": 49.99,
    "quantity": 10,
    "id": 2
}]

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [...state, action.payload]
        case UPDATED:
            const {productId, updatedProduct} = action.payload;
            return state.map((product) => product.id === productId ? updatedProduct : product);
        default:
            return state;
    }
}

export default productReducer