import { createSlice } from "@reduxjs/toolkit";

const initCanvasColor = "#FEFFDE";

export const canvasColorSlice = createSlice({
    name: "canvasColor",
    initialState: {value : initCanvasColor},
    reducers: {
        canvasColor: (state, action) =>{
            state.value = action.payload
        },
    },

});

export default canvasColorSlice.reducer;