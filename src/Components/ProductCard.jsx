import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BsFillBagFill} from 'react-icons/bs';
import {FaExpandArrowsAlt} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductToCart, orderProduct } from '../Redux/slices/Authslice';

function ProductCard({data}) {

  useEffect(() => {
    AOS.init();
  }, [])

  const navigate= useNavigate();
  const dispatch = useDispatch();
  // Get user login status
  const isLoggedIn = useSelector((state)=>state?.auth?.isLoggedIn);


  // To handle the order product
  const handleOrderProduct = (item)=>{

      if(!isLoggedIn){
        alert('Login to order the product');
        navigate('/login');
        return;
      }
    
      const time = new Date().toLocaleTimeString();
      const date = new Date().toLocaleDateString();

      dispatch(orderProduct({...item,time,date}));
  }

  // To hand;le the addto cart funtionality
  const handleAddToCart = (item)=>{
      if(!isLoggedIn){
        alert('Please Login to get Products')
        navigate('/login')
        return;
      }
      dispatch(addProductToCart(item))
  }

  return (
    <div className='w-[270px] h-[350px] bg-[#fff] rounded-md shadow-md flex flex-col items-center justify-around p-3'
    data-aos="fade-up"
    data-aos-duration="1000"
    >
        {/* Top section */}
        <div className="w-full h-1/5 flex items-center justify-between px-6 ">
        {/* Button for product details */}
        <button className='p-3 bg-orange-400 text-white rounded-full'
        onClick={()=>navigate(`/shop/${data.id}`)}
        >
            <FaExpandArrowsAlt/>
          </button>
          {/* Button for add to cart */}
          <button className='p-3 bg-orange-400 text-white rounded-full'
          onClick={()=>handleAddToCart(data)}
          >
            <BsFillBagFill/>
          </button>
        </div>
        {/* Body section */}
        <div className="w-full h-2/5">
          <img src={data?.image} alt={data?.title} 
          className='w-[90%] h-[100%] mx-auto'
          />
        </div>
        {/* bottom sectiom */}
        <div className="w-full h-2/5 flex flex-col items-center justify-around">
          <h1 className='text-xl font-semibold text-blue-600 '>{data?.title}</h1>
          <div className='w-full flex items-center justify-around'>
            <h1 className=' font-semibold text-yellow-800'>${data?.price}</h1>
           {/* Button for order product */}
            <button className='py-2 px-3 rounded-md  bg-orange-400 text-white '
            onClick={()=>handleOrderProduct(data)}
            >Buy Now</button>
          </div>
        </div>
    </div>
  )
}

export default ProductCard;