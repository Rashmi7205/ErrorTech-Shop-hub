import React, { useState } from 'react';
import {CartItem, Nav} from '../Components';
import { useSelector } from 'react-redux';

function Cart() {

  const cartList = useSelector((state)=>state?.auth?.cart);

  return (
    <div className='w-full flex flex-col h-[100vh]-min'>
        {/* Navigation section */}
        <Nav/>
        {/* Body section */}
        <div className='w-full text-center my-3 flex flex-col items-center justify-around gap-5'>
          {/* heading */}
            <h1 className='text-4xl font-bold'>Shopping Cart</h1>
          {/* Shipping Details section*/}
          <div className='w-full md:w-2/5 flex flex-col items-center justify-around gap-3'>
          {
            cartList?.map((item)=><CartItem key={item.id} data={item}/>)
          } 
          </div>
          {/* Checkout section */}
        </div>

    </div>
  )
}

export default Cart