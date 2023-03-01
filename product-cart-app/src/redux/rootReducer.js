import { combineReducers } from 'redux'
import cartReducer from './cart/cartReducer'
import productReducer from './product/productReducer'

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
})

export default rootReducer