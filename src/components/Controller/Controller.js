import React, { useState, useRef, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SketchPicker, BlockPicker } from 'react-color';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

import Select from 'react-select';


import { textInput } from '../../redux/textInput';
import { textSizing } from '../../redux/textSizing';
import { textColorChagne } from '../../redux/textColor';
import { canvasSizing } from '../../redux/canvasSizing';
import { chageCanvasColor } from '../../redux/canvasColor';

const Controller = forwardRef((props, ref) => {


    const fontSizePreset = [ 
        { label: "50px", value: "50px" },
        { label: "70px", value: "70px" },
        { label: "80px", value: "80px" },
        { label: "100px", value: "100px" },
        { label: "120px", value: "120px" },
        { label: "150px", value: "150px" }
      ]; //Thumbnail Font Size Select Options.

    const canvasSizePreset = [
        {label : "640 * 360", value : [640, 360] },
        {label : "800 * 450", value : [800, 450]},
        {label : "864 * 486", value : [864, 486]},
        {label : "960 * 540", value : [960, 540]},
      ];

    const dispatch = useDispatch();

    const [showCanvasButton, setShowCanvasButton] = useState(false);
    const [showTxtButton, setShowTxtButton] = useState(false);

    const cnvsColor = useSelector((state) => state.canvasColor.value);
    const cnvsSize = useSelector((state) => state.canvasSizing.value);
    const thumbText = useSelector((state) => state.textInput.value);
    const textSize = useSelector((state) => state.textSizing.value);
    const txtColor = useSelector((state) => state.textColor.value);
    const thumbName = useSelector((state) => state.thumbName.value);
    const canvas = { canvasRef };
      
    const onDownloadBtn = () =>{
        const CurCanvas = canvas.current;
        domtoimage //제작된 썸네일 다운로드
          .toBlob(CurCanvas)
          .then((blob,) => {
            saveAs(blob, thumbName);
          });
          console.log(thumbName);
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
                            onClick = {()=>setShowCanvasButton(setShowCanvasButton => !setShowCanvasButton)}>
                            {showCanvasButton ? '배경 색상 선택창 닫기' : '배경 색상 선택하기'}
                        </button>
                        {showCanvasButton && (<SketchPicker
                                                    color={ cnvsColor }
                                                    onChangeComplete={ (color) => dispatch(chageCanvasColor((color.hex))) }/>
                                    
                            )
                        }
                    </div> {/* End of divColorpicker */}

                    <div id = "divTxtColor">
                        <button 
                        onClick = {()=> setShowTxtButton(setShowTxtButton=>!setShowTxtButton)}>
                        { showTxtButton? '폰트 색상 선택창 닫기' : '폰트 색상 선택하기' }
                        </button>
                        {showTxtButton && (<BlockPicker
                                                color={ txtColor }
                                                onChangeComplete={ (color) => dispatch(textColorChagne(color.hex)) }/>
                            )
                        }
                    </div> {/* End of divTxtColor */}

                    <div id = "divCanvasSize">
                        <Select 
                           className = "canvasSize" 
                           placeholder = "Width * Height"
                           options = { canvasSizePreset } 
                           value = { cnvsSize }
                           defaultValue = { cnvsSize[1] }
                           onChange = { (value) => dispatch(canvasSizing(value)) }
                        />
                    </div>

                    <div id = "divSelectSize">
                        <Select 
                          className = "fontSize" 
                          placeholder = "폰트 사이즈"
                          options = { fontSizePreset } 
                          value = { textSize }
                          defaultValue = { textSize[1] }
                          onChange = { (value) => dispatch(textSizing(value)) }
                        />
                    </div>{/* End of divSelectSize*/}


                </div>

            </div>
        </div>

    )

});

export default Controller;