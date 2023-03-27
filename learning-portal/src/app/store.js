import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {},
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDeafultMiddlewares) => getDeafultMiddlewares().concat()
})