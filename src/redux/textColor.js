import { createSlice } from "@reduxjs/toolkit";

const initTextColor = "#52734D";

export const textColorSlice = createSlice({
    name: "textColor",
    initialState: {value: initTextColor},
    reducers:{
        textColorChagne : (state, action) => {
            state.value = action.payload
        }

    },

})

export const { textColorChagne } = textColorSlice.actions;
export default textColorSlice.reducer;