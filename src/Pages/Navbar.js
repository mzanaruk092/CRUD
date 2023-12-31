import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <div className='w-full h-16 bg-blue-600 flex items-center px-10 py-2 justify-between'>
        <Link to='/' className='text-white text-3xl font-semibold font-Montserrat'>Crud</Link>
        <Link to='add-user' className='w-48 flex justify-center items-center bg-white text-green-300 font-semibold text-xl h-12 rounded-lg'>Add Users</Link>
    </div>
  )
}

export default Navbar