import React from 'react';
import {Routes,Route} from 'react-router-dom'
import {Login,SignUp,Cart,Home,MyAccount,Shop} from '../Pages';


function CustomRoutes() {
  return (
    <div className='w-full'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/me' element={<MyAccount/>}/>
          <Route path='/shop/:id' element={<Shop/>}/>
        </Routes>
    </div>
  )
}

export default CustomRoutes