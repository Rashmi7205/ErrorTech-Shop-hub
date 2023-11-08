import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import {AiOutlineMenu,AiFillCloseCircle} from 'react-icons/ai';
import {BsFillBagFill} from 'react-icons/bs';
import {FcShop} from 'react-icons/fc';

function Nav() {
  const navLinks = [
    {
      title:'Home',
      slug:'/'
    },
    {
      title:'Shop',
      slug:'/shop/1'
    },
    {
      title:'Contact',
      slug:'/contact'
    },
    {
      title:'Login',
      slug:'/login'
    },
    {
      title:'SignUp',
      slug:'/signup'
    },
    {
      title:'My Account',
      slug:'/me'
    }

  ]

  const [isOpen,setIsOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <nav className='w-full h-[70px] font-semibold flex items-center justify-between px-5 z-10 mb-4'>
      <div className='w-2/5 md:1/5 cursor-pointer flex  items-center lg:px-10 gap-3 lg:text-2xl'
      onClick={()=>navigate('/')}
      >
        <FcShop/> Shop Hub
      </div>
      {/* desktop nav */}
      <div className='hidden lg:block w-3/5 '>
          <ul className='w-full flex items-center justify-around'>
            {
              navLinks.map((navLink)=><li key={navLink.title}>
                <Link to={navLink.slug}>{navLink.title}</Link>
              </li>)
            }
          </ul>
      </div>
      <button
      onClick={()=>navigate('/cart')}
      className='p-2 bg-white rounded-full '>
            <BsFillBagFill/>
      </button>
      {/* mobile nav */}
      <div className='lg:hidden flex flex-col relative h-full  transition-all duration-3000 ease-in-out'>
          <button onClick={()=>setIsOpen(!isOpen)}
          className='absolute right-0 top-5  bg-white p-2 rounded-full'
          >
            {
              !isOpen ?<AiOutlineMenu/>:<AiFillCloseCircle/>
          }
            
          </button>
          <ul className={`${isOpen?"flex w-[200px]  top-10 right-[-10px]":"hidden w-0  top-10 right-[-100px]"} items-center  flex-col absolute my-2 gap-5 h-[90vh] bg-orange-300 py-7`}>
            {
              navLinks.map((navLink)=><li 
              className='w-full text-center'
              key={navLink.title}>
                <Link to={navLink.slug}>{navLink.title}</Link>
              </li>)
            }
          </ul>
      </div>
      
    </nav>  
  )
}

export default Nav