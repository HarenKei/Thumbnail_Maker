import React, { useRef, useEffect, forwardRef } from "react";
import "./Canvas.css";
import { useSelector, useDispatch } from "react-redux";
import { addThumbName } from "../../redux/thumbName";
import Controller from "../Controller";
import Download from "../Controller/Download";




const Canvas = () => {
    const dispatch = useDispatch();
    const cnvsColor = useSelector((state) => state.canvasColor.value);
    const thumbText = useSelector((state) => state.textInput.value);
    const textSize = useSelector((state) => state.textSizing.value);
    const textColor = useSelector((state) => state.textColor.value);
    const cnvsSize = useSelector((state) => state.canvasSizing.value);
    const thumbName = useSelector((state) => state.thumbName.value);
    //const textColor = useSelector((state) => state.textColor.value);
    const cnvsRef = useRef();

    useEffect(() => {
        const currentCanvas = cnvsRef.current.getContext("2d")
        currentCanvas.fillStyle = cnvsColor 
        currentCanvas.fillRect(0, 0, cnvsSize.value[0], cnvsSize.value[1])
        currentCanvas.font = textSize.value + " Noto Sans CJK KR"
        currentCanvas.fillStyle = textColor
        currentCanvas.fillText(thumbText, cnvsSize.value[0] / 2, cnvsSize.value[1] / 2)
        currentCanvas.textBaseline = "middle"
        currentCanvas.textAlign = "center"
        dispatch(addThumbName(thumbText));
        const nameRef = thumbText;
    }, [cnvsRef, cnvsColor, textColor, thumbText, textSize, cnvsSize, thumbName])

    

    return(
        <div>
            <div id="divCanvas">
                <canvas 
                    ref = { cnvsRef }
                    width = { cnvsSize.value[0] }
                    height = { cnvsSize.value[1] }
                />
            </div> {/* End of divCanvas */}

            <Controller ref = { cnvsRef }/>
        </div>
        
    )
};

export default Canvas;