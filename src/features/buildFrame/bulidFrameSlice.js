import { createSlice } from "@reduxjs/toolkit";

export const buildFrameSlice=createSlice({
    name:'buildFrame',
    initialState:{
        frame:null
    },
    reducers:{
        build:(state,action)=>{
            state.frame=action.payload; //payload === la data
        },
        clear:(state)=>{
            state.frame=null;
        }
    }
})
export const {build,clear}=buildFrameSlice.actions;
export default buildFrameSlice.reducer;