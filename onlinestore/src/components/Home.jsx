import React from 'react'
import Filters from './Filters'
import { useGetAllProductsQuery } from '../redux/productSlice';
import SingleProduct from './SingleProduct';

const Home = () => {
    const { data: products, error, isLoading } = useGetAllProductsQuery();
    // console.log(products);


    return (
        <main className='w-full h-[90vh] flex pt-2  md:pl-2  relative md:static'>
            <Filters />

            <section className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4  w-[100%]  mx-auto overflow-y-scroll   gap-x-3 h-full px-3  '>
                {
                    products?.map((product) =>
                        <SingleProduct product={product} key={product.id} />
                    )
                }

            </section>


        </main>
    )
}

export default Home