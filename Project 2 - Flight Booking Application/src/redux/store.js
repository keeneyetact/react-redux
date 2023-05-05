import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import bookingReducer from './booking/bookingReducer'

const store = createStore(bookingReducer, composeWithDevTools())

export default store