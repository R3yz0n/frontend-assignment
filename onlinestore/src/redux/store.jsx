import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './productSlice';




export const store = configureStore({
    reducer: {
        // Add other reducers if needed
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});