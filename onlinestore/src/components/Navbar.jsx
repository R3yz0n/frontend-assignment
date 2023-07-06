import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { MdShoppingCart } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assests/logo.png'


const Navbar = () => {
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState('')
    const handleSearch = (e) => {
        setSearchValue(e.target.value)

    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(searchValue);
        // history.push(`/search-results?query=${encodeURIComponent(searchValue)}`);
        navigate(`/search?query=${encodeURIComponent(searchValue)}`);





    }
    return (
        <header className='w-full px-2 bg-[rgb(31,41,55)]  text-white flex gap-4 items-center justify-evenly'>

            <Link to='/' className='text-2xl font-semibold cursor-pointer flex gap-4 items-center'>
                <img src={Logo} className='h-20 w-24' alt="" />
                <span>
                    Online Store
                </span>

            </Link>

            <form className="relative mb-2 mt-3 flex w-1/3 flex-wrap items-stretch   ">
                <input type="search" className="relative focus:shadow-md shadow-black m-0 -mr-0.5 block w-[1px]  min-w-0 flex-auto rounded-l border-2 border-solid border-gray-200 bg-transparent bg-clip-padding px-3  text-lg text-white font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:border-gray-300  focus:text-white  focus:outline-none" placeholder="Search product here." value={searchValue} onChange={handleSearch} />

                <motion.button className="relative z-[2] flex items-center rounded-r bg-blue-500 px-6 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md  hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg" type="submit" onClick={handleClick} >
                    <BsSearch className='text-xl text-white' />

                </motion.button>
            </form>

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