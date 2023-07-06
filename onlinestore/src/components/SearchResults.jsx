import React, { useEffect } from 'react'
import { useGetAllProductsQuery, useSearchProductsQuery } from '../redux/productSlice';
import { useLocation, useParams } from 'react-router';

const SearchResults = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    console.log(query);
    const { data: products, error, isLoading } = useGetAllProductsQuery();

    useEffect(() => {
        const filteredProducts = products?.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        console.log(filteredProducts);

    }, [products])



    // console.log(searchResults);



    return (
        <div>SearchResults</div>
    )
}

export default SearchResults