import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/',
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products',
        }),
        getSingleProduct: builder.query({
            query: (id) => `products/${id}`,
            cacheTime: 3000,
        }),
        searchProducts: builder.query({
            query: (query) => `products?search=${encodeURIComponent(query)}`,
        }),
    }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery, useSearchProductsQuery } = productsApi;
