import React, { useState } from "react";

function ProductDetails({ data, onClose }) {
  return (
    <div className="w-full px-5 h-[100vh] absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] z-50 flex items-end justify-center flex-col">
      <div className="w-[90%] h-auto flex items-end justify-center flex-col">
        <button
          className="px-3 py-1 bg-orange-400 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 "
          onClick={onClose}
        >
          X
        </button>
        <div className="w-[90%] md:w-[400px] h-[300px] bg-white self-center rounded-md p-5 text-[14px] ">

            <img src={data?.image} alt="" className="w-[100px] h-[150px]" />
            <h4>{data?.title}</h4>
            <div className="flex font-semibold items-center justify-between w-full text-[13px]">
              <h3 className="text-yellow-900">${data.price}</h3>{" "}
              <h3>
                Quantity <span className="p-1 bg-white rounded-md">1</span>
              </h3>
          </div>
          <h3>Time:{data?.time}</h3>
          <h3>Date : {data?.date}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
