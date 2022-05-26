import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker, BlockPicker } from 'react-color';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import Select from 'react-select';
import './App.css';
import Title from './Title';
import { text } from '@fortawesome/fontawesome-svg-core';

const fontSizePreset = [ 
  { label: "50px", value: "50px" },
  { label: "70px", value: "70px" },
  { label: "80px", value: "80px" },
  { label: "100px", value: "100px" },
  { label: "120px", value: "120px" },
  { label: "150px", value: "150px" }
]; //Thumbnail Font Size Select Options.

const canvasSizePreset = [
  {label : "640px", value :[640, 360] },
  {label : "800px", value : [800, 450]},
  {label : "864px", value : [864, 486]},
  {label : "960px", value : [960, 540]},
]; //Canvas Size Select Options preset.


const App = () =>{
  const [canvasColor, setCanvasColor] = useState('#FEFFDE'); //canvas color states.
  const [showCanvasButton, setShowCanvasButton] = useState(false); // canvas color button states.
  const [textColor, setTextColor] = useState('#52734D'); //text color states.
  const [showTxtButton, setShowTxtButton] = useState(false); // text color

  const canvas = useRef(null);// canvas useRef.
  const [canvasSize, setCanvasSize] = useState(canvasSizePreset[1]); //canvas size states.

  const [thumbText, setThumbText] = useState(''); //canvas text states.
  const [textSize, setTextSize] = useState(fontSizePreset[2]); //text size states.
    
  var thumbName =''; //var for image file name.

  useEffect(() => {
      const currentCanvas = canvas.current.getContext("2d")
      currentCanvas.fillStyle = canvasColor
      currentCanvas.fillRect(0, 0, canvasSize.value[0],canvasSize.value[1])
      currentCanvas.font = textSize.value + " Noto Sans CJK KR"
      currentCanvas.fillStyle = textColor 
      currentCanvas.fillText(thumbText, canvasSize.value[0] / 2, canvasSize.value[1] / 2)
      currentCanvas.textBaseline = "middle"
      currentCanvas.textAlign = "center"
      thumbName = thumbText; //For Making Thumbnail image file name.
  }, [canvas, thumbText, canvasColor, canvasSize, textColor, textSize])

  const onDownloadBtn = () =>{
    const CurCanvas = canvas.current;
    domtoimage //제작된 썸네일 다운로드
      .toBlob(CurCanvas)
      .then((blob,) => {
        saveAs(blob, thumbName);
      });
  }

return (
  <div id="divWrap">
    
    <Title/> {/* header */}

    <div id="divCanvasContainer">
      <div id="divCanvas">
        <canvas 
          ref = { canvas } 
          width = { canvasSize.value[0] } 
          height = { canvasSize.value[1] }
        />
      </div> {/* End of divCanvas */}
    </div> {/* End of divCanvasContainer */}

    <div id = "divCanvasAdjustment">

      <div id = "divTextAndSize">

        <div id="divTextInput">
            <input type = "text" placeholder = "썸네일 텍스트" 
              value = { thumbText } 
              onChange = { e=> setThumbText(e.target.value) } 
            />
        </div> { /* End of divTextInput */ }

        <div id = "divThumbnailSave">
            <button className = 'thumbDown' onClick = { onDownloadBtn }>
            썸네일 저장
            </button>
        </div> {/* End of divThumbnailSave */}

      </div>{/* End of divTextAndSize */}

    <div id = "divOterAdjustment">

      <div id = "divCanvasColor">
          <button onClick = {()=>setShowCanvasButton(showCanvasButton=>!showCanvasButton)}>
            {showCanvasButton ? '배경 색상 선택창 닫기' : '배경 색상 선택하기'}
         </button>
         {showCanvasButton && (<SketchPicker
                           color={ canvasColor }
                           onChangeComplete={ (color) => setCanvasColor(color.hex) }/>
                         )
           }
      </div> {/* End of divColorpicker */}

      <div id = "divTxtColor">
          <button onClick = {()=>setShowTxtButton(showTxtButton=>!showTxtButton)}>
            { showTxtButton ? '폰트 색상 선택창 닫기' : '폰트 색상 선택하기' }
          </button>
          {showTxtButton && (<SketchPicker
                            color={ textColor }
                            onChangeComplete={ (color) => setTextColor(color.hex) }/>
                          )
          }
      </div> {/* End of divTxtColor */}

      <div id = "divCanvasSize">
        <Select 
           className = "canvasSize" 
           placeholder = "Width * Height"
           options = { canvasSizePreset } 
           value = { canvasSize }
           defaultValue = { canvasSize[1] }
           onChange = { (value) => setCanvasSize(value) }
        />
      </div>

      <div id = "divSelectSize">
       <Select 
          className = "fontSize" 
          placeholder = "폰트 사이즈"
          options = { fontSizePreset } 
          value = { textSize }
          defaultValue = { textSize[2] }
          onChange = { (value) => setTextSize(value) }
        />
      </div>{/* End of divSelectSize*/}

    </div> {/* End of divCanvasAdjustment */}
   
  </div> {/* End of divWrap */}

</div> 
)
}
export default App;