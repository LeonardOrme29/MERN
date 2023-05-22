import { createSlice } from "@reduxjs/toolkit";

export const colorFrameSlice=createSlice({
    name:'colorFrame',
    initialState:{
        frame:null
    },
    reducers:{
        color:(state,action)=>{
            state.frame=action.payload; //payload === la data
        },
        clear:(state)=>{
            state.frame=null;
        }
    }
})
export const {color,clear}=colorFrameSlice.actions;
export default colorFrameSlice.reducer;