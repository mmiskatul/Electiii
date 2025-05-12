import { MapPin } from 'lucide-react'
import React from 'react'
import { FaCaretDown } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    const location=false;
  return (
    <div className='bg-white py-3 shadow-2xl'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        {/* Logo Section */}
        <div className='flex gap-7 items-center'>
          <Link to='/'><h1 className='font-bold text-3xl'><span className='text-red-500 font-serif text-[33px]'>E</span>lectriiii</h1></Link>
            <div className='flex gap-1 cursor-pointer text-gray-700 items-center '>
            <MapPin className='text-red-500'/>
            <span className='font-semibold'>{location ? <div>

            </div> :"Add Address"}</span>
            <FaCaretDown className=''/>
        </div>
        </div>
        {/* Menu Section */}
        <nav>
            <ul className='flex gap-7 text-xl font-semibold '>
               <NavLink  to={'/'} className={({isActive})=>`${isActive? "border-b-3 transition-all border-red-500":"text-black "} cursor-pointer  hover:border-b-3 hover:border-red-500 transition-all`}><li>Home</li></NavLink>
                <NavLink to={'/products'} className={({isActive})=>`${isActive? "border-b-3 transition-all border-red-500":"text-black "} cursor-pointer hover:border-b-3 hover:border-red-500 transition-all`}><li>Products</li></NavLink>
                <NavLink to={'/about'} className={({isActive})=>`${isActive? "border-b-3 transition-all border-red-500":"text-black "} cursor-pointer hover:border-b-3 hover:border-red-500 transition-all`}><li>About</li></NavLink>
                <NavLink to={'/contact'} className={({isActive})=>`${isActive? "border-b-3 transition-all border-red-500":"text-black "} cursor-pointer hover:border-b-3 hover:border-red-500 transition-all`}><li>Contact</li></NavLink>
            </ul>
            
            </nav>       
      </div>
    </div>
  )
}

export default NavBar
