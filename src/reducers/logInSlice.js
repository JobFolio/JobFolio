import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const logInSlice = createSlice({
    name: 'logIn',
    initialState: {
        isClicked: false
    },
    reducers: {
        confirmLogIn: (state, action) => {
            state.isClicked = true;
        }
    }
});

export const { confirmLogIn } = logInSlice.actions;

export default logInSlice.reducer;