import { createSlice } from "@reduxjs/toolkit";

const initText;

export const controlSlice = createSlice({
    name: "Controller",
    initialState: {value:initText},
    reducers: {
        textSizing: {state, action} => {
        },
    }


});

export default controlSlice.reducer;