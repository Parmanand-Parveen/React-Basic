import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import DropDown from '../DropDown/DropDown'

function Header() {
  return (
    <>
 <div>
    <nav className='flex max-w-7xl justify-between p-4 items-center'>
      <Link to="/">
         <img
           src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
           className="mr-3 h-12"
           alt="Logo"
      ></img>
      </Link>
    <div className='order-3 flex justify-around gap-3'>
      <Link>
        <button className='px-3 py-1'>
            Login 
        </button>
      </Link>
      <Link to="#">
        <button className='px-3 py-1 bg-orange-600 text-white rounded-md'>
            Get Started 
        </button>
      </Link>
    </div>
    <div className='order-2 sm:flex gap-3 sm:block hidden'>
      <NavLink to="/" className={({isActive})=>`${isActive?'text-orange-700':'text-gray-700' } hover:text-orange-700`}>
        Home
      </NavLink>
      <NavLink to="/about" className={({isActive})=>`${isActive?'text-orange-700':'text-gray-700' } hover:text-orange-700`}>
        {DropDown}
      </NavLink>
      <NavLink to="/contact" className={({isActive})=>`${isActive?'text-orange-700':'text-gray-700' } hover:text-orange-700`}>
         Contact Us
      </NavLink>
      <NavLink to="/github" className={({isActive})=>`${isActive?'text-orange-700':'text-gray-700' } hover:text-orange-700`}>
         Github
      </NavLink>

    </div>

    </nav>
 </div>
    


    </>
  )
}

export default Header