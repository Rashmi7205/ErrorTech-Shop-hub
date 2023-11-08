import React,{useState} from 'react';
import { useDispatch} from 'react-redux';
import { login } from '../Redux/slices/Authslice';
import { Link, useNavigate } from 'react-router-dom';
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';

function Login() {

  const [showPass,setShowPass] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData,setUserData] =useState({
    email:"",
    password:"",
  });

  const handleInputChange = (e)=>{
    setUserData({
      ...userData,
      [e.target.name]:e.target.value
    })
  }

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    if(!userData.email || !userData.password){
      alert("All Fields are mandatory");
      return;
    }
    const {payload} = dispatch(login(userData))
    if(payload){
      setUserData({
        email:"",
        password:"",
      })
      navigate('/')
    }

  }


  return (
    <div className='w-full h-[90vh]'>
        <form
        className='w-[90]% md:w-[350px] md:h-[400px] flex flex-col gap-4 capitalize items-center  justify-around mx-auto my-[100px] bg_gr py-5 
        rounded-xl
        ' 
        onSubmit={handleFormSubmit}
        >
          <h1 className='font-semibold text-3xl'>Login</h1>
          <label htmlFor='email'
          className='w-[80%] text-left font-semibold'
          >Email:</label>
          <input type="email" name="email" id="email"
          className='w-[80%] rounded-md px-2 text-sm py-1 outline-none '
          placeholder='Enter Your email'
          onChange={handleInputChange}
          value={userData.email}
          />
          <label htmlFor='password'
           className='w-[80%] text-left font-semibold'
          >password:</label>
          <div className='w-[80%] bg-white rounded-md flex '>
          <input type={`${showPass?"text":"password"}`} name="password" id="password"
           className='w-[80%] rounded-md px-2 text-sm py-1 outline-none bg-transparent'
           placeholder='Enter Your password'
           onChange={handleInputChange}
           value={userData.password}
          />
          <button 
          className='w-[20%] h-full block text-center text-xl'
          type='button'
          onClick={()=>setShowPass(!showPass)}
          >
            {
              
              !showPass?<AiFillEyeInvisible/>:<AiFillEye/>
            }
          </button>
          </div>
         
          <button className='w-4/5 bg-orange-400 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 py-2'
          type='submit'
          >
            Login
          </button>
          <div className='flex font-sm'><p>Have Not An account yet ? </p> <Link to='/signup'
          className='text-blue-400 px-2'
          >Create one</Link></div>
        </form>
    </div>
  )
}

export default Login