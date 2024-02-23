import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import logInReducer from './logInSlice.js';
import editPageSlice from './editPageSlice.js';

const store = configureStore({
    reducer: {
       confirmLogIn: logInReducer, 
       editClicked: editPageSlice,
    }
});

setupListeners(store.dispatch);
export default store;