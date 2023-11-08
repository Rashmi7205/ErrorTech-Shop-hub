import React, { useEffect } from 'react';
import {Footer, Nav,ProductCard} from '../Components'
import {useDispatch,useSelector} from 'react-redux'
import { getAllProduct } from '../Redux/slices/Productslice';

function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state)=>state?.product?.productList);
  useEffect(()=>{
    // If the ititial produts are availbale in storage 
    if(!productList.length){
    dispatch(getAllProduct());
    }
  },[]);
  return (
    <div className='w-full flex flex-col gap-4'>
      <Nav/>
      <div className='w-full flex flex-col items-center h-[1000px]  relative '>
          <div className={`bg-orange-500 h-2/5 w-[90%]  rounded-lg absolute top-0`}></div>
          <div className='w-[90%] mx-auto absolute top-[150px] flex  flex-col   items-center '>
            <h1 className='w-full my-3 text-center font-bold  text-3xl'>Shop Hub</h1>
            <div className='w-full flex items-center justify-around flex-wrap gap-x-10 gap-y-5  '>
              {
                productList?.slice(0,4).map((product)=><ProductCard data={product}/>)
              }
            </div>
            <h1 className='w-full my-10 text-center font-bold  text-3xl'>Related Products</h1>
            <div className='w-full flex items-center justify-around flex-wrap gap-x-10 gap-y-5  '>
              {
                productList?.slice(4,8).map((product)=><ProductCard data={product}/>)
              }
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home