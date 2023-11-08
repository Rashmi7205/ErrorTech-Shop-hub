import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { orderProduct, removeProductFromCart } from '../Redux/slices/Authslice';
import {BsTrash} from 'react-icons/bs';

function CartItem({data}) {

    const dispatch = useDispatch();

    const [productData,setProductData] = useState({
        ...data,
        quantity:1,
    });

    const handleProductOrder = ()=>{
        dispatch(orderProduct(productData))
    }

    const handleRemoveFromCart = ()=>{
        dispatch(removeProductFromCart(productData.id));
    }

    const decreaseQuan = ()=>{
        if(productData.quantity > 1){
            setProductData({
                ...productData,
                quantity:productData.quantity-1,
                price:((productData.quantity-1) * (parseFloat(data.price)))
            })
        }
    }
    const increaseQuan = ()=>{
            setProductData({
                ...productData,
                quantity:productData.quantity+1,
                price:((productData.quantity +1)* (parseFloat(data.price)))
            })
    }

  return (
    <div 
    className='w-[90%] h-[150px] flex bg-[rgba(255,255,255,0.5)] rounded-md shadow-md lg:p-5 p-2'>
      <img src={productData?.image} alt="image" 
      className='md:w-1/5 h-[90%] bg_gr p-3'
      />
      <div className='w-4/5 h-full flex flex-col items-center justify-between gap-1'>
          <h1 className='font-semibold text-[14px]'>{productData.title}</h1>
          <div className='flex items-center justify-between gap-3'>
              <span className='text-yellow-600 font-semibold'>${productData.price}</span>
              <button className='lg:px-3 px-2 py-1  bg-orange-500 text-white'
              onClick={decreaseQuan}
              >-</button>
              <span className='lg:px-3 px-2 py-1 bg-white text-black font-bold'>{productData?.quantity}</span>
              <button className='lg:px-3 px-2 py-1 bg-orange-500 text-white'
              onClick={increaseQuan}
              >+</button>
          </div>
          <div className='flex gap-4'>
              <button className='rounded-md lg:px-3 px-1 py-1 font-semibold bg-orange-500 text-white text-[14px]'
              type='button'
            onClick={handleProductOrder}
>BuyNow</button>
              <button className='lg:px-3 lg:py-1  px-1 rounded-md font-semibold bg-red-600 text-white text-[14px]'
              onClick={handleRemoveFromCart}
              >
                <BsTrash/>
              </button>
          </div>
      </div>
    </div>
  )
}

export default CartItem