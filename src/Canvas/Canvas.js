import React, { useRef, useState, useEffect } from "react";
import "./Canvas.css";

const Canvas = () =>{
    const thumbnail = useRef(null);// Thumbnail Canvas
    const [color, setColor] = useState('#FFC745'); //canvas color
    const [thumbText, setThumbText] = useState('텍스트 입력'); //canvas text
    const [cnvsWidth, setCnvsWidth] = useState(800); //canvas width
    const [cnvsHeight, setCnvsHeight] = useState(540);

    useEffect(() => {
        const ctx = thumbnail.current.getContext("2d")
        ctx.fillStyle = color
        ctx.fillRect(0, 0, cnvsWidth, cnvsHeight)
        ctx.font = textSize.value + " Noto Sans CJK KR"
        ctx.fillStyle = textColor 
        ctx.fillText(thumbText, cnvsWidth/2, cnvsHeight/2)
        ctx.textBaseline = "middle"
        ctx.textAlign = "center"
        //End of canvas useEffect
    }, [thumbnail, cnvsWidth, cnvsHeight, textSize, thumbText])
    
    
    return(
        <div>
            <div id="divCanvas">
                <canvas 
                ref = { canvas } 
                width = { cnvsSize.value[0] } 
                height = { cnvsSize.value[1] }
                />  {/*캔버스 크기 가변적으로 고치고 싶음*/}
            </div> {/* End of divCanvas */}
        </div>
    )
}

export default Canvas;