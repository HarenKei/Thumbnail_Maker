import React, { useState, useEffect, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { SketchPicker, BlockPicker } from 'react-color';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import Select from 'react-select';
import { text } from '@fortawesome/fontawesome-svg-core';

const Controller = () => {

    const [cnvsColor, setCnvsColor] = useState("#FEFFDE");

    const dispatch = useDispatch();

    const canvasSizePreset = [
        {label : "640px", value : [640, 360] },
        {label : "800px", value : [800, 450]},
        {label : "864px", value : [864, 486]},
        {label : "960px", value : [960, 540]},
      ];
    var thumbName =''; //var for image file name.
  
    const onDownloadBtn = () =>{
      const CurCanvas = canvas.current;
      domtoimage //제작된 썸네일 다운로드
        .toBlob(CurCanvas)
        .then((blob,) => {
          saveAs(blob, thumbName);
        });
    }

    return(
        <div>
            <div id = "divControllerWrap">

                <div id = "divTextAndSize">

                    <div id="divTextInput">
                        <input 
                            type = "text" 
                            placeholder = "썸네일 텍스트" 
                            value = { thumbText } 
                            onChange = { e=> dispatch(textInput(e.target.value)) } 
                            />
                    </div> { /* End of divTextInput */ }

                    <div id = "divThumbnailSave">
                        <button 
                            className = 'thumbDown'
                            onClick = { onDownloadBtn }>
                            썸네일 저장
                        </button>
                    </div> {/* End of divThumbnailSave */}

                </div>{/* End of divTextAndSize */}

                <div id = "divOterAdjustment">

                    <div id = "divCanvasColor">
                        <button 
                            onClick = {()=>dispatch(cnvsColorChange((showCanvasButton=>!showCanvasButton)))}>
                            {showCanvasButton ? '배경 색상 선택창 닫기' : '배경 색상 선택하기'}
                        </button>
                        {showCanvasButton && (<SketchPicker
                                                    color={ cnvsColor }
                                                    onChangeComplete={ (color) => dispatch(cnvsColorChange((color.hex))) }/>
                            )
                        }
                    </div> {/* End of divColorpicker */}

                    <div id = "divTxtColor">
                        <button 
                        onClick = {()=>dispatch(textSizing((showTxtButton=>!showTxtButton)))}>
                        { showTxtButton ? '폰트 색상 선택창 닫기' : '폰트 색상 선택하기' }
                        </button>
                        {showTxtButton && (<SketchPicker
                                                color={ textColor }
                                                onChangeComplete={ (color) => dispatch(textColor(color.hex)) }/>
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


                </div>

            </div>
        </div>

    )

}

export default Controller;