import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full my-8 h-[100px] flex items-center justify-around '>
      <Link to='/'>Home</Link>
      <p className='text-[10px]'>Copyright @ {new Date().getFullYear()} | All right Resrverd </p>
      <Link to='/shop/1'>shop</Link>
    </div>
  )
}

export default Footer