import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker, BlockPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';


import './App.css';


const App = () =>{
  const [color, setColor] = useState('#dae5e8');
  const [showButton, setShowButton] = useState(false);
  const canvas = useRef(null);
  const [thumbText, setThumbText] = useState('');
  const [textSize, setTextSize] = useState('');
  const [cnvsWidth, setCnvsWidth] = useState(960);
  const [cnvsHeight, setCnvsHeight] = useState(540);
  var thumbName ='';

  useEffect(() => {
    var txtSize = textSize;
      const ctx = canvas.current.getContext("2d")
      //Start of canvas useEffect
      ctx.fillStyle= color
      ctx.fillRect(0, 0, cnvsWidth, cnvsHeight)

      ctx.font = "80px Noto Sans CJK KR"
      ctx.fillStyle = "white"
      ctx.fillText(thumbText, (800/2), (500/2))
      ctx.textBaseline = "middle"
      ctx.textAlign = "center"
      //End of canvas useEffect

      thumbName = thumbText; //For Making Thumbnail file name.
  }, [canvas, thumbText, color, cnvsWidth, cnvsHeight])

  const onDownloadBtn = () =>{
    const CurCanvas = canvas.current;

    domtoimage //제작된 썸네일 다운로드
  
      .toBlob(CurCanvas)
      .then((blob,) => {
        saveAs(blob, thumbName);
      });
  }
  
  

  
return (
  <div>
    <div id="divHeader">
        <h1>STARGAZER blog Thumbnail Maker</h1>

        <div id="divGithubLink"> {/* 내 깃허브 링크 (feat. fontawesome) */}
            <a href="https://github.com/HarenKei/Thumbnail_Maker"><FontAwesomeIcon icon={faGithub} color="black" size="2x"/></a>
        </div>
    </div> {/* End of divHeader */}

    <div id="divCanvas">
      <canvas 
        ref={ canvas } 
        width= {cnvsWidth} 
        height= {cnvsHeight}
      /> {/*캔버스 크기 가변적으로 고치고 싶음*/}
    </div> {/* End of divCanvas */}

    <div id="divCanvasAdjustment"> 

      <div id="divColorpicker">
        <button onClick={()=>setShowButton(showButton=>!showButton)}>
          {showButton ? '배경 색상 선택창 닫기' : '배경 색상 선택하기'}
        </button>
        {showButton && (<SketchPicker
                          color={color}
                          onChangeComplete={(color) => setColor(color.hex)}/>
                        )
        }
      </div> {/* End of divColorpicker */}

      <div id="divThumbnailSave">
        <button className='thumbDown' onClick={onDownloadBtn}>
        썸네일 저장
        </button>
      </div> {/* End of divThumbnailSave */}
   
     <div id="divTextInput">
        <input type="text" placeholder="썸네일 텍스트" 
          value={ thumbText } 
          onChange = {e=> setThumbText(e.target.value)} 
        />
      </div> { /* End of divTextInput */ }
    <div id = "divCnavsWidth">
      <input type = "text" placeholder = "width"
        value = { cnvsWidth }
        onChange = {e => setCnvsWidth(e.target.value)}
      />
    </div>
    <div id = "divCnavsHeight">
      <input type = "text" placeholder = "height"
        value = { cnvsHeight }
        onChange = {e => setCnvsWidth(e.target.value)}
      />
    </div>
    <div id="divTextSize">
      <input type = "text" placeholder = "폰트 사이즈"
        value = { textSize }
        onChange = {e => setTextSize(e.target.value)}
      />
    </div> { /* End of divTextSize */}

    </div> {/* End of divCanvasAdjustment */}

  </div> 
)
}
export default App;