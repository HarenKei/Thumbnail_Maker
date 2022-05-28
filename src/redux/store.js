import { configureStore } from "@reduxjs/toolkit";
import textSizeReducer from './textSizing';
import textInputReducer from './textInput';
import canvasSizeReducer from "./canvasSizing";
import canvasColorReducer from "./canvasColor";

export default configureStore({
    reducer: {
        textSizing: textSizeReducer,
        textInput: textInputReducer,
        canvasSizing: canvasSizeReducer,
        canvasColor: canvasColorReducer,

    }
})