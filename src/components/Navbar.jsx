import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-50 left-0 w-full bg-blue-200 p-6 flex items-center justify-between'>
      <h1 className='text-4xl font-semibold font-serif bg-clip-text text-transparent bg-linear-to-r from-emerald-700 to-indigo-800'>ShopperStop</h1>
        <div className='flex justify-around gap-6'>
            <Link to='/' className='text-xl text-indigo-600 font-semibold'>Home</Link>
            <Link to='/cart' className='text-xl text-indigo-600 font-semibold'><i className="ri-shopping-cart-fill"></i></Link>
            <Link to='/wishlist' className='text-xl text-indigo-600 font-semibold'><i className="ri-heart-add-2-fill"></i></Link>
        </div>
    </div>
  )
}

export default Navbar
