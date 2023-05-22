import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import buildFrameReducer from '../features/buildFrame/bulidFrameSlice';
import colorFrameReducer from '../features/colorFrame/colorFrameSlice';



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth:authReducer,
    buildFrame:buildFrameReducer,
    colorFrame:colorFrameReducer
  },
});
