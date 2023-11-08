import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    productList:JSON.parse(localStorage.getItem('productList'))||[]
}

export const getAllProduct = createAsyncThunk('/getallproduct',async ()=>{
    try {
        const {data} = await axios.get('https://fakestoreapi.com/products')
        localStorage.setItem('productList',JSON.stringify(data));
        return (data);
    } catch (error) {
        console.log(error);
    }
});


 const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProduct.fulfilled,(state,action)=>{
            state.productList = action.payload    
        })
    }
});

export default productSlice.reducer