import { createSlice } from "@reduxjs/toolkit";

//input text, text Sizing, Canvas Sizing, Color Change.

const initThumbText = "";

export const textInputSlice = createSlice({
    name: "textInput",
    initialState: {value: initThumbText},
    reducers: {
        textInput: ( state, action ) => {
            state.value = action.payload
        },
    },
});

export default textInputSlice.reducer;