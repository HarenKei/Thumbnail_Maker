import { configureStore } from "@reduxjs/toolkit";
import textSizeReducer from './textSizing';
import textInputReducer from './textInput';
import canvasSizeReducer from "./canvasSizing";
import canvasColorReducer from "./canvasColor";
import textColorReducer from "./textColor";
import buttonReducer from "./button";
import thumbNameReducer from "./thumbName";
export default configureStore({
    reducer: {
        textSizing: textSizeReducer,
        textInput: textInputReducer,
        textColor: textColorReducer,
        canvasSizing: canvasSizeReducer,
        canvasColor: canvasColorReducer,
        buttonState: buttonReducer,
        thumbName: thumbNameReducer,
    }
})