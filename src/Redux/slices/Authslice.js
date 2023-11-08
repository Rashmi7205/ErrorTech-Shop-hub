import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';


const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn')||false,
    user:JSON.parse(localStorage.getItem('user')) || {},
    cart:JSON.parse(localStorage.getItem('cart'))||[],
    orders:JSON.parse(localStorage.getItem('orders'))||[],
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        // User Login 
        login:(state,action)=>{
            state.isLoggedIn =true;
            state.user = action.payload;
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('user',JSON.stringify(action.payload));
        },
        // Register new user
        register:(state,action)=>{
            state.isLoggedIn =true;
            state.user = action.payload;
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('user',action.payload);
        },
        // Logout user
        logout:(state)=>{
            state.isLoggedIn =false;
            state.user={}
            localStorage.clear();
        },
        //Update current user password
        updatePassword:(state,action)=>{
            if(!state.isLoggedIn){
                alert('Login To access This Route');
                return false;
            }
            if(state.user && (state.user?.password !== action.payload?.oldPassword)){
                alert('Invalid Old Password');
                return false;
            }
            state.user = {
                ...state.user,
                password:action.payload.newPassword
            }
            alert('Password Updated Successfully');
            return;
           
        },
        // Add a new Product To cart
        addProductToCart:(state,action)=>{
            // get the product
            state.cart.push(action.payload);
            localStorage.setItem('cart',JSON.stringify(state.cart));
            alert(`${action.payload.title} is Added To Your cart`)
        },
        //Remove a product from cart
        removeProductFromCart:(state,action)=>{
            state.cart = state.cart.filter((item)=>item.id != action.payload);
            localStorage.setItem('cart',JSON.stringify(state.cart));
            alert('Item Removed Succsessfully')
        },
        //order Product
        orderProduct:(state,action)=>{
            state.orders.push(action.payload);
            localStorage.setItem('orders',JSON.stringify(state.orders));
            alert(`${action.payload?.title} Orderd Successfully | Go To My Account To see the Order Details `);
        },

    },
    extraReducers:(builder)=>{
        
    }
});

export const {login,logout,register,
    addProductToCart,removeProductFromCart,
    updatePassword,orderProduct
}  =  authSlice.actions;

export default authSlice.reducer