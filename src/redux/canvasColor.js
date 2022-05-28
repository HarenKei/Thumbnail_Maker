import { createSlice } from "@reduxjs/toolkit";

const initCanvasColor = '#FEFFDE';

export const canvasColorSlice = createSlice({
    name: "canvasColor",
    initialState: {value : initCanvasColor},
    reducers: {
        chageCanvasColor: (state, action) =>{
            state.value = action.payload
        },
    },

});

export const { chageCanvasColor } = canvasColorSlice.actions;
export default canvasColorSlice.reducer;
