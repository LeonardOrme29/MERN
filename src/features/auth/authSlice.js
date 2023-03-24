import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
    name:'auth',
    initialState:{
        user:null
    },
    reducers:{
        addAuth:(state,action)=>{
            state.user=action.payload; //payload === la data
        },
        logout:(state)=>{
            state.user=null;
        }
    }
})
export const {addAuth,logout}=authSlice.actions;
export default authSlice.reducer;
