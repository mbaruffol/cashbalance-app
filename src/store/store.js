import { createStore } from "@reduxjs/toolkit";
import accountReducers from "./accountReducers"
// Configure the Redux store with the accountReducer
// with the relevant settings you will need in the future.
const store = createStore({
    reducer: {
        account: accountReducers,
    },
});

export default store;