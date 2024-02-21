import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import logInReducer from './logInSlice.js';

const store = configureStore({
    reducer: {
       confirmLogIn: logInReducer, 
    }
});

setupListeners(store.dispatch);
export default store;