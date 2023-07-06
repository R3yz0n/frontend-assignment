import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Rating from './Rating';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {

        navigate(`/product/${product.id}`);
    }

    return (
        <main className=' text-black py-4 card1  shadow-lg border-[1px] border-[#dfdcdc] h-fit mb-3 sm:mb-5'>

            <section className='overflow-hidden w-full px-2'>

                <div className='flex max-w-[120px] h-[120px] sm:max-w-[150px] sm:h-[150px]  overflow-hidden px-2  mx-auto items-center' id='over-ride'>

                    <LazyLoadImage src={product.image} alt="ERROR" className='max-w-full min-h-[60%] sm:min-h-[60%] max-h-full object-contain  m-auto  cursor-pointer' effect='blur' onClick={handleClick} />

                </div>
                <aside className='px-3 flex flex-col gap-1'>

                    <p className='  w-full mt-2 truncate'>{product.title}</p>
                    <p className='text-sm w-full '>${product.price}</p>
                    <Rating rating={product.rating.rate} />

                    <aside className=' w-full text-sm text-white'>
                        {

                            <button className=' bg-blue-500 px-2 w-max py-[2px] lg:px-3 rounded-sm '>Add To Cart</button>

                        }
                    </aside>
                </aside>







            </section>

        </main>
    )
}

export default SingleProduct