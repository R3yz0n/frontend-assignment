import React, { useEffect, useState } from 'react'
import { useGetAllProductsQuery, useSearchProductsQuery } from '../redux/productSlice';
import { useLocation, useParams } from 'react-router';
import SingleProduct from './SingleProduct';

const SearchResults = () => {
    const location = useLocation();
    const [searchResult, setSearchResult] = useState([])
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    console.log(query);
    const { data: products, error, isLoading } = useGetAllProductsQuery();

    useEffect(() => {
        const filteredProducts = products?.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        console.log(filteredProducts);
        setSearchResult(filteredProducts)

    }, [products, query])







    return (

        <section className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4  w-[100%]  mx-auto overflow-y-scroll   gap-x-3 h-full px-3  '>
            {
                searchResult?.length === 0 ? <p className='text-2xl mt-4 ml-3 font-semibold'>
                    No Searched Product found
                </p> : searchResult.map((product) =>
                    <SingleProduct product={product} key={product.id} />
                )
            }

        </section>

    )
}

export default SearchResults