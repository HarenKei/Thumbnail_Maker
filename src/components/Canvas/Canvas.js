import React, { useRef, useState, useEffect } from "react";
import "./Canvas.css";
import Controller from "../Controller";

const Canvas = (props) =>{

    return(
        <div>
            <div id="divCanvas">
                <canvas 
                    ref = { props.canvas } 
                    width = { props.cnvsSize.value[0] } 
                    height = { props.cnvsSize.value[1] }
                />
            </div> {/* End of divCanvas */}

            <Controller/>
        </div>
        
    )
}

export default Canvas;