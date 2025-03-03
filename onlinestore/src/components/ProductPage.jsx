import React from 'react'
import { useGetSingleProductQuery } from '../redux/productSlice'
import { useLocation, useParams } from 'react-router';
import Rating from './Rating';

const ProductPage = () => {
  const productId = useParams()

  const { data: product, error, isLoading } = useGetSingleProductQuery(productId.id);
  console.log(product);

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white h-[500px] ">
      <div className="container px-5 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap  h-510">
          <img alt="ecommerce" className="lg:w-1/2 w-full object-contain object-center  rounded border border-gray-200 mt-10" src={product?.image} />
          <div className="lg:w-1/2 w-full lg:pl-10   lg:py-12 flex flex-col  justify-center ">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.title}
            </h1>
            <div className="flex mb-4 self-start">
              <span className="flex items-center">

                <Rating rating={product?.rating.rate} />
                <span className="text-gray-600 ml-3">{product?.rating.rate}</span>
              </span>

            </div>
            <p className="leading-relaxed">{product?.description}</p>

            <div className="flex mt-4 ml-0 items-center gap-4 self-start">
              <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add To Cart</button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default ProductPage