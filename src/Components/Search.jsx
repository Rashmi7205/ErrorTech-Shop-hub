import React, { useEffect, useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

function Search({isSearching,onclick}) {

    const productList = useSelector((state)=>state?.product?.productList);

    const [searchedList,setSearchedList] = useState([]);
    const [searchItem,setSearchItem]  =useState("");

    const handleSearch = ()=>{
        if(searchItem){
            const res = productList.filter((item)=>item.title.replace(" ","").includes(searchItem))
            setSearchedList(res);
        }
        else{
            setSearchedList([]);
        }
    } 

    useEffect(()=>{
        handleSearch();
    },[searchItem]);


  return (
    <>
    <button
    className="fixed top-[83vh] left-5 bg-orange-500 p-3 text-white rounded-full "
    onClick={onclick}
    >
      <FaSearch/>
    </button>
    {
        isSearching &&( <div className='w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.7)] z-20 flex flex-col items-center justify-center'>
            <div className='flex gap-2'>
                <input type="text" 
                className='w-[250px] h-[40px] outline-none rounded-md px-2 text-black '
               onChange={(e)=>setSearchItem(e.target.value)}
               />
                <button
                className='bg-orange-500 p-3 text-white rounded-full'
                type='button'
                onClick={onclick}>cancel</button>
            </div>
            <div className='flex flex-wrap w-full lg:w-4/5 gap-4 transition-all  duration-1000 ease-in-out my-8 '>
                {
                    searchedList?.slice(0,4)?.map((item)=><ProductCard key={item?.id} data={item}/>)
                }
            </div>
        </div>)
        
    }
   
    </> 
    
  )
}

export default Search