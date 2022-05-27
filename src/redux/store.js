import { configureStore } from "@reduxjs/toolkit";
import textSizeReducer from './textSizing';
import textInputReducer from './textInput';
import canvasSizeReducer from "./canvasSizing";

export default configureStore({
    reducer: {
        textSizing: textSizeReducer,
        textInput: textInputReducer,
        canvasSizing: canvasSizeReducer,

    }
})