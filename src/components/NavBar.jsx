import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='bg-white py-3 shadow-2xl'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        {/* Logo Section */}
        <div>
          <Link to='/'><h1 className='font-bold text-3xl'><span className='text-red-500 font-serif text-[33px]'>E</span>lectriiii</h1></Link>
        </div>
        <div className='flex gap-1 cursor-pointer text-gray-700 items-center '>

        </div>
      </div>
    </div>
  )
}

export default NavBar
