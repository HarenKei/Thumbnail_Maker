import React, { useRef, useState, useEffect } from "react";
import "./Canvas.css";

const Canvas = () =>{
    const canvas = useRef(null);// canvas
    const [color, setColor] = useState('#FFC745'); //canvas color
    const [thumbText, setThumbText] = useState('텍스트 입력'); //canvas text
    const [cnvsWidth, setCnvsWidth] = useState(800); //canvas width
    const [cnvsHeight, setCnvsHeight] = useState(540);
    
    
    return(
        <div>
            
        </div>
    )
}