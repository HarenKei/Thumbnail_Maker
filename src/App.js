import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker, BlockPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';


import './App.css';


const Thumbnail = () =>{
  const [color, setColor] = useState('#dae5e8');
  const [showButton, setShowButton] = useState(false);
  const canvas = useRef(null);
  const [thumbText, setThumbText] = useState('');

  useEffect(() => {
      const ctx = canvas.current.getContext("2d")
      ctx.fillStyle= color
      ctx.fillRect(0, 0, 960, 540)

      ctx.font = "60px Noto Sans CJK KR"
      ctx.fillStyle = "white"
      ctx.fillText(thumbText, (800/2), (500/2))
      ctx.textBaseline = "middle"
      ctx.textAlign = "center"

  }, [canvas, thumbText, color])
  
  const onDownloadBtn = () =>{
    const card = canvas.current;
    const fileName = setThumbText.current;
    
    domtoimage
      .toBlob(card)
      .then((blob) => {
        saveAs(blob,'thumbnail.png');
      });
  }




  
return (
  <div>
    <div id="divHeader">
        <h1>STARGAZER blog Thumbnail Maker</h1>

        <div id="divGithubLink">
            <a href="https://github.com/HarenKei/Thumbnail_Maker"><FontAwesomeIcon icon={faGithub} color="black" size="2x"/></a>
        </div>
    </div>
    <div id="divCanvas">
      <canvas 
        ref={ canvas } 
        width="800px"
        height="500px"
      /> 
    
    </div>

    <div id="divCanvasAdjustment">

      <div id="divColorpicker">
        <button onClick={()=>setShowButton(showButton=>!showButton)}>
          {showButton ? '배경 색상 선택창 닫기' : '배경 색상 선택하기'}
        </button>
        {showButton && (<BlockPicker
                          color={color}
                          onChangeComplete={(color) => setColor(color.hex)}/>
                        )
        }
      </div>

      <div id="divImageSelect">
        <button className='thumbDown' onClick={onDownloadBtn}>
        썸네일 저장
        </button>
      </div>
   
     <div id="divTextInput">
        <input type="text" placeholder="썸네일 텍스트" 
          value={ thumbText } 
          onChange = {e=> setThumbText(e.target.value)} 
        />
      </div>
    </div>
  </div>
)
}
export default Thumbnail;