import { createSlice } from "@reduxjs/toolkit";

const thumbNameInit = "";

export const thumbNameSlice = createSlice({
    name: "thumbName",
    initialState: {value: thumbNameInit},
    reducers:{
        addThumbName: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { addThumbName } = thumbNameSlice.actions
export default thumbNameSlice.reducer;

