import { createSlice } from "@reduxjs/toolkit";

//input text, text Sizing, Canvas Sizing, Color Change.

const canvasSizePreset = [
    {label : "640px", value : [640, 360] },
    {label : "800px", value : [800, 450]},
    {label : "864px", value : [864, 486]},
    {label : "960px", value : [960, 540]},
  ]; //Canvas Size Select Options preset.

const initCanvasSize = { value : canvasSizePreset[1] };

export const canvasSizeSlice = createSlice({
    name: "canvasSize",
    initialState: {value: initCanvasSize},
    reducers: {
        canvasSizing: ( state, action ) => {
            state.value = action.payload
        },
    },
});

export default canvasSizeSlice.reducer;