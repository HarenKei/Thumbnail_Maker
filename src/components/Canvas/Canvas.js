import React, { useRef, useState, useEffect } from "react";
import "./Canvas.css";
import { useSelector } from "react-redux";

const Canvas = () =>{
    const cnvsColor = useSelector((state) => state.canvasColor.value);
    const [textColor, setTextColor] = useState("black");
    //const cnvsSize = useSelector((state) => state.canvasSizing.value);
    //const textColor = useSelector((state) => state.textColor.value);

    const canvas = useRef(null);

    useEffect(() => {
        const currentCanvas = canvas.current.getContext("2d")
        currentCanvas.fillStyle = cnvsColor 
        currentCanvas.fillRect(0, 0, 800, 500)
        currentCanvas.font = "80px Noto Sans CJK KR"
        currentCanvas.fillStyle = textColor
        currentCanvas.fillText("Redux 테스트", 800 / 2, 500 / 2)
        currentCanvas.textBaseline = "middle"
        currentCanvas.textAlign = "center"
        //thumbName = thumbText; //For Making Thumbnail image file name.
    }, [canvas, cnvsColor, textColor])

    return(
        <div>
            <div id="divCanvas">
                <canvas 
                    ref = { canvas }
                    width = "800px"
                    height = "500px"
                />
            </div> {/* End of divCanvas */}
        </div>
        
    )
}

export default Canvas;