import { createSlice } from "@reduxjs/toolkit";

const CanvasColorInit = "#52734D";

export const drawSlice = createSlice({
    name: "drawCanvas",
    initialState: {value: CanvasColorInit},
    reducers:{
        cnvsColorChange: (state, action) => {
            state.value = action.payload
        },
    }
})