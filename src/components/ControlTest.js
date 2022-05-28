import React, {useState} from 'react';
import { SketchPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { chageCanvasColor } from '../redux/canvasColor';

const ControlTest = () => {
    const [showCanvasButton, setShowCanvasButton] = useState(false); // canvas color button states.
    const dispatch = useDispatch();
    const cnvsColor = useSelector((state) => state.canvasColor.value);
    return (
        <div>
            <div id = "divCanvasColor">
                        <button 
                            onClick = {()=>setShowCanvasButton((showCanvasButton=>!showCanvasButton))}>
                            {showCanvasButton ? '배경 색상 선택창 닫기' : '배경 색상 선택하기'}
                        </button>
                        {showCanvasButton && (<SketchPicker
                                                    color={ cnvsColor }
                                                    onChangeComplete={ (color) => dispatch(chageCanvasColor((color.hex))) }/>
                            )
                        }
                    </div> {/* End of divColorpicker */}
        </div>
    )
}

export default ControlTest;
