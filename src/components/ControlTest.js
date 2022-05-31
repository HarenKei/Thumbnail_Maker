import React, {useState} from 'react';
import { SketchPicker, BlockPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { chageCanvasColor } from '../redux/canvasColor';
import { textInput } from '../redux/textInput';
import { textSizing } from '../redux/textSizing';
import { textColorChagne } from '../redux/textColor';
import { canvasSizing } from '../redux/canvasSizing';
import Select from 'react-select';


const fontSizePreset = [ 
    { label: "50px", value: "50px" },
    { label: "70px", value: "70px" },
    { label: "80px", value: "80px" },
    { label: "100px", value: "100px" },
    { label: "120px", value: "120px" },
    { label: "150px", value: "150px" }
  ]; //Thumbnail Font Size Select Options.

  const canvasSizePreset = [
    {label : "640px", value : [640, 360] },
    {label : "800px", value : [800, 450]},
    {label : "864px", value : [864, 486]},
    {label : "960px", value : [960, 540]},
  ];

const ControlTest = () => {
    const dispatch = useDispatch();

    const [showCanvasButton, setShowCanvasButton] = useState(false); // canvas color button states.
    const [showTxtButton, setShowTxtButton] = useState(false);
    
    const cnvsColor = useSelector((state) => state.canvasColor.value);
    const thumbText = useSelector((state) => state.textInput.value);
    const textSize = useSelector((state) => state.textSizing.value);
    const txtColor = useSelector((state) => state.textColor.value);
    const cnvsSize = useSelector((state) => state.canvasSizing.value);

    console.log("console/ControlTest.js -- cnvsSize.value[0]: " +  cnvsSize.value[0]);


    return (
        <div>
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

            <div id="divTextInput">
                <input 
                    type = "text" 
                    placeholder = "썸네일 텍스트" 
                    value = { thumbText } 
                    onChange = { e=> dispatch(textInput(e.target.value)) } 
                />
            </div> { /* End of divTextInput */ }

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

            <div id = "divTxtColor">
                        <button 
                        onClick = {()=>setShowTxtButton(setShowTxtButton=>!setShowTxtButton)}>
                        { showTxtButton ? '폰트 색상 선택창 닫기' : '폰트 색상 선택하기' }
                        </button>
                        {showTxtButton && (<SketchPicker
                                                color={ txtColor }
                                                onChangeComplete={ (color) => dispatch(textColorChagne((color.hex)))}/>
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
        </div>
    )
}

export default ControlTest;
