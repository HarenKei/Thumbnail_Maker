import { createSlice } from "@reduxjs/toolkit";

const initButton = false;

export const buttonSlice = createSlice({
    name: "buttonState",
    initialState: { value : initButton},
    reducers:{
        buttonOn: (state) => {
            state.value = true;
        },
        buttonOff: (state) => {
            state.value = initButton;
        },
    },
})

export const { buttonOn, buttonOff } = buttonSlice.actions;
export default buttonSlice.reducer;
