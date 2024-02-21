import { createSlice } from '@reduxjs/toolkit';

const editPageSlice = createSlice({
    name: 'editPage',
    initialState: {
        isClicked: false
    },
    reducers: {
        editClicked: (state, action) => {
            state.isClicked = true;
        }
    }
});

export const { editClicked } = editPageSlice.actions;

export default editPageSlice.reducer;