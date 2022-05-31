import React, { useRef, useState, useEffect } from "react";
import "./Canvas.css";
import { useSelector } from "react-redux";

const Canvas = () =>{
    const cnvsColor = useSelector((state) => state.canvasColor.value);
    const thumbText = useSelector((state) => state.textInput.value);
    const textSize = useSelector((state) => state.textSizing.value);
    const textColor = useSelector((state) => state.textColor.value);
    const cnvsSize = useSelector((state) => state.canvasSizing.value);
    //const textColor = useSelector((state) => state.textColor.value);

    const canvas = useRef(null);

    console.log(cnvsSize.value[0], cnvsSize.value[1]);

    useEffect(() => {
        const currentCanvas = canvas.current.getContext("2d")
        currentCanvas.fillStyle = cnvsColor 
        currentCanvas.fillRect(0, 0, cnvsSize.value[0], cnvsSize.value[1])
        currentCanvas.font = textSize.value + " Noto Sans CJK KR"
        currentCanvas.fillStyle = textColor
        currentCanvas.fillText(thumbText, cnvsSize.value[0] / 2, cnvsSize.value[1] / 2)
        currentCanvas.textBaseline = "middle"
        currentCanvas.textAlign = "center"
        //thumbName = thumbText; //For Making Thumbnail image file name.
    }, [canvas, cnvsColor, textColor, thumbText, textSize, cnvsSize])

    return(
        <div>
            <div id="divCanvas">
                <canvas 
                    ref = { canvas }
                    width = { cnvsSize.value[0] }
                    height = { cnvsSize.value[1] }
                />
            </div> {/* End of divCanvas */}
        </div>
        
    )
}

export default Canvas;