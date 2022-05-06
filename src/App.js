import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker, BlockPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import Select from 'react-select';
import './App.css';


const App = () =>{
  const [color, setColor] = useState('#dae5e8'); //canvas color
  const [showButton, setShowButton] = useState(false); // canvas color
  const [showTxtButton, setShowTxtButton] = useState(false); // text color
  const canvas = useRef(null);// canvas 
  const [thumbText, setThumbText] = useState(''); //canvas text
  const [cnvsWidth, setCnvsWidth] = useState(800); //canvas width
  const [cnvsHeight, setCnvsHeight] = useState(540);
  const [textSize, setTextSize] = useState("80px");
  const [textColor, setTextColor] = useState('#ffffff'); 
  const options = [ 
    { label: "50px", value: "50px" },
    { label: "70px", value: "70px" },
    { label: "80px", value: "80px" },
    { label: "100px", value: "100px" },
    { label: "120px", value: "120px" },
    { label: "150px", value: "150px" }
  ];
  const widthOptions = [
    {label : "640px", value : 640},
    {label : "800px", value : 800},
    {label : "864px", value : 864},
    {label : "960px", value : 960},
  ];
  const heightOptions = [
    {label : "360px", value : 360},
    {label : "450px", value : 450},
    {label : "486px", value : 486},
    {label : "540px", value : 540},
  ];
  var thumbName ='';

  useEffect(() => { 
      var width = cnvsWidth.value;
      var height = cnvsHeight.value;
      
      const ctx = canvas.current.getContext("2d")
      //Start of canvas useEffect
      ctx.fillStyle = color
      ctx.fillRect(0, 0, 800, 500)
      ctx.font = textSize.value + " Noto Sans CJK KR"
      console.log(ctx.font)
      ctx.fillStyle = textColor 
      ctx.fillText(thumbText, 800/2, 500/2)
      ctx.textBaseline = "middle"
      ctx.textAlign = "center"
      //End of canvas useEffect

      thumbName = thumbText; //For Making Thumbnail file name.
  }, [canvas, thumbText, color, cnvsWidth, cnvsHeight, textColor, textSize])

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
        ref = { canvas } 
        width = { cnvsWidth } 
        height = { cnvsHeight }
      /> {/*캔버스 크기 가변적으로 고치고 싶음*/}
    </div> {/* End of divCanvas */}

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
           options = { widthOptions } 
           value = { cnvsWidth }
           onChange = { e => setCnvsWidth(e) }
        />
      </div>

      <div id = "divSelectSize">
      <Select 
      className = "fontSize" 
      placeholder = "폰트 사이즈"
      options = { options } 
      value = { textSize }
      onChange = { e => setTextSize(e) }
      />
    </div>{/* End of divSelectSize*/}
     </div>
   

    </div> {/* End of divCanvasAdjustment */}

  </div> 
)
}
export default App;