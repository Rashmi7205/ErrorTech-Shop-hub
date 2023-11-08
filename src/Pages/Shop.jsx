import React, { useState } from "react";
import { Nav,ProductCard } from "../Components";
import {useSelector} from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";

function Shop() {

  // Get all product list
  const productList = useSelector((state)=>state?.product?.productList);

  //get current product id 
  const {id} = useParams();

  // get current product details from product list 
  const productData = productList[id-1];

  // Available color and the sizes
  const colors = ['#D2DE32','#39A7FF','#363062','#FF6C22'];
  const sizes = ['41','21','23','34','12','41','21','23','34','12'];

  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center justify-around">
      {/* Navigation section */}
      <Nav />
      {/* Body section */}
      {
        // if Product data is available show the product details
        productData &&(
          <div className="w-full flex flex-col items-center h-[1500px]  lg:h-[100vh] relative">
            {/* Top backgroud section */}
          <div className="bg-orange-500 h-2/5 w-[95%]  rounded-lg absolute top-0">
            <h1 className="w-full text-center font-semibold py-4 text-3xl">Product Details</h1>
          </div>
          {/* Product details section */}
          <div className="absolute top-40 w-[90%] md:py-7 mx-auto bg-[#f1d6c4] p-2 flex flex-wrap items-center justify-around rounded-3xl shadow-md bg_gr">
            <div className="w-full md:w-[25%] flex flex-wrap">
              {/* Product title */}
              <h1 className="font-bold text-blue-600 text-3xl">{productData.title}</h1>
              {/* Product description */}
              <p className="text-sm py-2 text-slate-500">{productData.description.slice(0,300)}</p>
              <div className="flex flex-wrap gap-5">
                {/* First image */}
                <img src={productList[(productData.id+1)%productList.length].image} 
                className="w-[100px] h-[100px] my-3 bg-slate-400 rounded-md"
                alt="image" 
                onClick={()=>navigate(`/shop/${productList[(productData.id+1)%productList.length].id}`)}
                />
                {/* Second image */}
                 <img src={productList[(productData.id+2)%productList.length].image} 
                className="w-[100px] h-[100px] my-3 bg-slate-400 rounded-md"
                alt="image" 
                onClick={()=>navigate(`/shop/${productList[(productData.id+2)%productList.length].id}`)}
                />
                {/* Third image */}
                 <img src={productList[(productData.id+3)%productList.length].image} 
                className="w-[100px] h-[100px] my-3 bg-slate-400 rounded-md"
                alt="image" 
                onClick={()=>navigate(`/shop/${productList[(productData.id+3)%productList.length].id}`)}
                />

              </div>
            </div>
            {/* Product image */}
            <div className="w-full md:w-[350px] h-[350px] border-t-2 border-b-2 border-fe7c558a rounded-full flex flex-col items-center justify-center p-5">
              <img src={productData.image} 
              alt={productData.title} 
              className="w-[90%] h-[90%] border-2 rounded-full bg_gr p-3 "
              />
              <h1 className="text-md font-bold text-yellow-800">${productData.price}</h1>
            </div>
            {/* Other details section */}
            <div className="w-full md:w-[30%] flex flex-col gap-5 justify-around">
              <div className="w-full">
                <h1 className="font-semibold">Reviews:</h1>
                <div className="flex flex-wrap gap-2">
                   {productData.rating.rate} ({productData.rating.count})
                </div>
              </div>
              <div>
                <h1 className="font-semibold">Select Color:</h1>
                <ul className="w-full flex flex-wrap gap-2">
                  {
                    colors.map((col)=><li key={col}
                    className="border-2 w-[30px] h-[30px] p-4 rounded-full block cursor-pointer"
                    >
                      <div className={`bg-red-400 w-full h-full`}></div>
                    </li>)
                  }
                </ul>
              </div>
              <div>
                <h1 className="font-semibold">Select Size:</h1>
                <ul className="w-full flex flex-wrap gap-2">
                  {
                  sizes.map((size)=><li key={size}
                    className="border-2 px-3 py-2 font-bold br_gr text-center rounded-md block cursor-pointer"
                    >
                      {size}
                    </li>)
                  }
                  </ul>
              </div>
              <button className="w-full bg-slate-600 font-semibold text-white py-3 rounded-lg shadow-sm hover:bg-slate-800">Add To Cart</button>
            </div>
          </div>
        </div>
        )
      }
      {/* Related Products */}
      <div className='w-full flex items-center justify-around flex-wrap gap-x-10 gap-y-5 '>
              {
                productList?.slice(0,4).map((product)=><ProductCard data={product}/>)
              }
      </div>   
    </div>
  );
}

export default Shop;
