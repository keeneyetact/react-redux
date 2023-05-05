import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import authSliceReducer from '../features/auth/authSlice'
import videoSliceReducer from '../features/videos/videoSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        video: videoSliceReducer
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDeafultMiddlewares) => getDeafultMiddlewares().concat(apiSlice.middleware)
})