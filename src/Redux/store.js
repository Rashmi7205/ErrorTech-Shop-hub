import {configureStore} from '@reduxjs/toolkit';
import  authSlice  from './slices/Authslice';
import  productSlice  from './slices/Productslice';

const store = configureStore({
    reducer:{
        auth:authSlice,
        product:productSlice
    }
});

export default store;