import React, {useState, useSyncExternalStore} from 'react';
import { SketchPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { chageCanvasColor } from '../redux/canvasColor';
import { textInput } from '../redux/textInput';
import { textSizing } from '../redux/textSizing';
import Select from 'react-select';

const fontSizePreset = [ 
    { label: "50px", value: "50px" },
    { label: "70px", value: "70px" },
    { label: "80px", value: "80px" },
    { label: "100px", value: "100px" },
    { label: "120px", value: "120px" },
    { label: "150px", value: "150px" }
  ]; //Thumbnail Font Size Select Options.

const ControlTest = () => {

    const [showCanvasButton, setShowCanvasButton] = useState(false); // canvas color button states.
    const dispatch = useDispatch();
    const cnvsColor = useSelector((state) => state.canvasColor.value);
    const thumbText = useSelector((state) => state.textInput.value);
    const textSize = useSelector((state) => state.textSizing.value);

    console.log(textSize.value);


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
        </div>
    )
}

export default ControlTest;
