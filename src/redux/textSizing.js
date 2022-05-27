import { createSlice } from "@reduxjs/toolkit";

//input text, text Sizing, Canvas Sizing, Color Change.

const fontSizePreset = [ 
    { label: "50px", value: "50px" },
    { label: "70px", value: "70px" },
    { label: "80px", value: "80px" },
    { label: "100px", value: "100px" },
    { label: "120px", value: "120px" },
    { label: "150px", value: "150px" }
  ]; //Thumbnail Font Size Select Options.

const initTextSize = { value : fontSizePreset[2].value };

export const textSizeSlice = createSlice({
    name: "textSize",
    initialState: {value: initText},
    reducers: {
        textSizing: ( state, action ) => {
            state.value = action.payload
        },
    },
});

export default textSizeSlice.reducer;