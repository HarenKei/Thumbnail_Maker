import React, { useRef, useState, useEffect } from "react";
import "./Canvas.css";
import Controller from "../Controller";

const Canvas = (props) =>{

    useEffect(() => {
        const ctx = props.Controllerthumbnail.current.getContext("2d")
        ctx.fillStyle = props.color
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
                ref = { props.canvas } 
                width = { props.cnvsSize.value[0] } 
                height = { props.cnvsSize.value[1] }
                />  {/*캔버스 크기 가변적으로 고치고 싶음*/}
            </div> {/* End of divCanvas */}

            <Controller/>
        </div>
        
    )
}

export default Canvas;