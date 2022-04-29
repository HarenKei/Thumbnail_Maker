import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker, BlockPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import Select from 'react-select';
import './App.css';


const App = () =>{
  const [color, setColor] = useState('#dae5e8');
  const [showButton, setShowButton] = useState(false);
  const [showTxtButton, setShowTxtButton] = useState(false);
  const canvas = useRef(null);
  const [thumbText, setThumbText] = useState('');
  const [cnvsWidth, setCnvsWidth] = useState(800);
  const [cnvsHeight, setCnvsHeight] = useState(500);
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
  

  var thumbName ='';

  useEffect(() => { 
      
      const ctx = canvas.current.getContext("2d")
      //Start of canvas useEffect
      ctx.fillStyle = color
      ctx.fillRect(0, 0, cnvsWidth, cnvsHeight)
      ctx.font = textSize + " Noto Sans CJK KR"
      console.log(ctx.font)
      ctx.fillStyle = textColor 
      ctx.fillText(thumbText, (cnvsWidth/2), (cnvsHeight/2))
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

      <div id = "divThumbnailSave">
        <button className = 'thumbDown' onClick = { onDownloadBtn }>
        썸네일 저장
        </button>
      </div> {/* End of divThumbnailSave */}
   
     <div id="divTextInput">
        <input type = "text" placeholder = "썸네일 텍스트" 
          value = { thumbText } 
          onChange = { e=> setThumbText(e.target.value) } 
        />
      </div> { /* End of divTextInput */ }

    <div id = "divCnavsWidth">
      width : 
      <input type = "text" placeholder = "width"
        value = { cnvsWidth }
        onChange = { e => setCnvsWidth(e.target.value) }
      />
    </div>

    <div id = "divCnavsHeight">
      height : 
      <input type = "text" placeholder = "height"
        value = { cnvsHeight }
        onChange = { e => setCnvsHeight(e.target.value) }
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


    </div> {/* End of divCanvasAdjustment */}

  </div> 
)
}
export default App;