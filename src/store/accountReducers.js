// accountSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    balance: 0, //Initial balance value
};

const accountSlice = createSlice({
    // Name of the slice of state that we will implement in our empty store.
    name: "account",
    initialState,
    
    //The reducer is used to manipulate the initial state or current state.
    reducers: {
        //Action types the reducer will identify for how to manipulate this slice of state.
        //Action to increase the balance amount by the input deposit value
        deposit: (state, action) => {
            state.balance += action.payload;
        },
        //Action to decrease the balance amount by the withdrawal input value
        withdraw: (state, action) => {
            state.balance -= action.payload;
        },
        //Action to increase the balance amount by 5%
        addInterest: (state) => {
            state.balance *= 1.05;
        },
        //Action to decrease the valance by 15%
        applyCharges: (state) => {
            state.balance *= 0.85;
        },
    },
});
// Action creators are generated for each case reducer function.
export const { deposit, withdraw, addInterest, applyCharges } = accountSlice.actions;
// Exporting the reducer function we will implement into our empty store, previously created.
export default accountSlice.reducer;
