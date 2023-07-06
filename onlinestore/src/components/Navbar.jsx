import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { MdShoppingCart } from 'react-icons/md'

const Navbar = () => {

    const [searchValue, setSearchValue] = useState('')
    const handleSearch = (e) => {
    }
    return (
        <header className='w-full px-2 bg-[rgb(31,41,55)] py-2 text-white flex gap-4 items-center justify-evenly'>

            <nav className='text-2xl font-semibold'>
                Online Store
            </nav>

            <div className="relative mb-2 mt-3 flex w-1/3 flex-wrap items-stretch   ">
                <input type="search" className="relative focus:shadow-md shadow-black m-0 -mr-0.5 block w-[1px]  min-w-0 flex-auto rounded-l border-2 border-solid border-gray-200 bg-transparent bg-clip-padding px-3  text-lg text-white font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:border-gray-300  focus:text-white  focus:outline-none" placeholder="Search food here" />

                <motion.button className="relative z-[2] flex items-center rounded-r bg-blue-500 px-6 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md  hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg" type="button" >
                    <BsSearch className='text-xl text-white' />

                </motion.button>
            </div>

            <motion.div className='relative cursor-pointer'  >

                <p> <MdShoppingCart className='text-[32px] text-white' /></p>
                <div className='w-[25px] h-[25px] rounded-full bg-red-500 flex items-center justify-center absolute -top-[18px] -right-2 '>
                    <p className='text-primary text-base font-sans font-semibold '>{1}</p>
                </div>

            </motion.div>




        </header >
    )
}

export default Navbar