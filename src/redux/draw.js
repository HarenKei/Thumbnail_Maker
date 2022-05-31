import { createSlice } from "@reduxjs/toolkit";
import { useRef } from "react";


export const drawSlice = createSlice({
    name: "drawCanvas",
    initialState: {value: canvasInit},
    reducers:{
        cnvsState: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { cnvsState } = drawSlice.actions;
export default drawSlice.reducer;

