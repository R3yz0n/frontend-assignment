import React, { useEffect, useState } from 'react'
import Rating from './Rating';
// import Rating from './Rating'

const Filters = ({ nav }) => {
    const [rate, setRate] = useState(3);
    const onClick = (i) => setRate(i);




    return (
        <section className={` absolute top-[1px] left-0 md:block md:static md:w-64 px-4 py-6 bg-gray-700 text-white h-[85vh] z-50 duration-300 ease-in-out ${nav ? 'ml-0' : 'md:ml-0 ease-in-out ml-[-90%]'}`}>



            <h1 className='text-2xl md:text-2xl font-sans font-semibold pb-3'>Filter Products</h1>
            <div>
                <p className='py-2  font-mono flex gap-2'>
                    <input className='cursor-pointer' type="radio" name='group1'
                    />
                    <span>Ascending</span>
                </p>
                <p className='py-2    flex gap-2'>
                    <input className='cursor-pointer' type="radio" name='group1'
                    />
                    <span>Descending</span>
                </p>

                <p className='py-2    flex gap-2'>
                    <input className='cursor-pointer' type="checkbox" />
                    <span>Include out of stock</span>
                </p>

                <p className='py-2    flex gap-2'>
                    <input className='cursor-pointer' type="checkbox" />
                    <span>Fast Delivery only</span>
                </p>

                <p className='py-2 text-[15px]'>
                    <select className='text-black px-3 rounded py-[4px]'>
                        <option disabled selected hidden>Choose category</option>
                        <option>Electronics</option>
                        <option>Clothings</option>
                        <option>Shoes</option>
                        <option>Books</option>
                    </select>
                </p>

                <p className='flex'>
                    <span className='py-2 pr-2'>Rating:</span>
                    <Rating rating={5} />

                </p>

                <button className='text-black bg-white w-[80%] rounded-md mt-3  py-1 font-semibold text-sm hover:opacity-80' >Clear Filters</button>





            </div>

        </section >
    )
}

export default Filters