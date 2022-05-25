import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker, BlockPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import Select from 'react-select';
import './App.css';
import { text } from '@fortawesome/fontawesome-svg-core';


const App = () =>{
  const fontSizeOptions = [ 
    { label: "50px", value: "50px" },
    { label: "70px", value: "70px" },
    { label: "80px", value: "80px" },
    { label: "100px", value: "100px" },
    { label: "120px", value: "120px" },
    { label: "150px", value: "150px" }
  ];

  const canvasSizePreset = [
    {label : "640px", value :[640, 360] },
    {label : "800px", value : [800, 450]},
    {label : "864px", value : [864, 486]},
    {label : "960px", value : [960, 540]},
  ];

  const [color, setColor] = useState('#FEFFDE'); //canvas color
  const [showButton, setShowButton] = useState(false); // canvas color
  const [showTxtButton, setShowTxtButton] = useState(false); // text color
  const canvas = useRef(null);// canvas 
  const [thumbText, setThumbText] = useState(''); //canvas text
  const [cnvsSize, setCnvsSize] = useState(canvasSizePreset[1]); 
  const [textSize, setTextSize] = useState(fontSizeOptions[2]);
  const [textColor, setTextColor] = useState('#52734D'); 
  
  console.log(cnvsSize);
  
  
  var thumbName ='';

  useEffect(() => { 

      const ctx = canvas.current.getContext("2d")
      //Start of canvas useEffect
      ctx.fillStyle = color
      ctx.fillRect(0, 0, cnvsSize.value[0],cnvsSize.value[1])
      ctx.font = textSize.value + " Noto Sans CJK KR"
      ctx.fillStyle = textColor 
      ctx.fillText(thumbText, cnvsSize.value[0] / 2, cnvsSize.value[1] / 2)
      ctx.textBaseline = "middle"
      ctx.textAlign = "center"
      //End of canvas useEffect

      thumbName = thumbText; //For Making Thumbnail file name.
  }, [canvas, thumbText, color, cnvsSize, textColor, textSize])

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
    <div id="divHeader">
        <p>STARGAZER Blog Thumbnail Maker</p>

        <div id="divGithubLink"> {/* 내 깃허브 링크 (feat. fontawesome) */}
            <a href="https://github.com/HarenKei/Thumbnail_Maker"><FontAwesomeIcon icon={faGithub} color="black" size="2x"/></a>
        </div>
    </div> {/* End of divHeader */}

    <div id="divCanvasContainer">
      <div id="divCanvas">
       <canvas 
         ref = { canvas } 
         width = { cnvsSize.value[0] } 
         height = { cnvsSize.value[1] }
        /> {/*캔버스 크기 가변적으로 고치고 싶음*/}
    </div> {/* End of divCanvas */}
    </div>

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
      <div id = "divColorpicker">
          <button onClick = {()=>setShowButton(showButton=>!showButton)}>
            {showButton ? '배경 색상 선택창 닫기' : '배경 색상 선택하기'}
         </button>
         {showButton && (<SketchPicker
                           color={ color }
                           onChangeComplete={ (color) => setColor(color.hex) }/>
                         )
           }
      </div> {/* End of divColorpicker */}

      <div id = "divTxtColorpicker">
        <button onClick = {()=>setShowTxtButton(showTxtButton=>!showTxtButton)}>
          { showTxtButton ? '폰트 색상 선택창 닫기' : '폰트 색상 선택하기' }
        </button>
        {showTxtButton && (<SketchPicker
                          color={ textColor }
                          onChangeComplete={ e => setTextColor(e.hex) }/>
                        )
        }
      </div>

      <div id = "divCnavsSize">
        <Select 
           className = "canvasWidHei" 
           placeholder = "Width * Height"
           options = { canvasSizePreset } 
           value = { cnvsSize }
           defaultValue = { cnvsSize[1] }
           onChange = { e => setCnvsSize(e) }
        />
      </div>

      <div id = "divSelectSize">
      <Select 
      className = "fontSize" 
      placeholder = "폰트 사이즈"
      options = { fontSizeOptions } 
      value = { textSize }
      defaultValue = { textSize[2] }
      onChange = { e => setTextSize(e) }
      />
    </div>{/* End of divSelectSize*/}
     </div>
   

    </div> {/* End of divCanvasAdjustment */}

  </div> 
)
}
export default App;