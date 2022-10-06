import React, { useState, useRef, forwardRef} from 'react';
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
import styled from 'styled-components';



const Controller = forwardRef(({}, canvasRef) => {

    const customStyles = {
        control: (base, state) => ({
          ...base,
          background: "#FEFFDE",
          color: "#91C788",
          // Overwrittes the different states of border
          borderColor: state.isFocused ? "green" : "yellow",
          // Removes weird border around container
          boxShadow: state.isFocused ? null : null,
          "&:hover": {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "red" : "blue"
          }
        })
      };

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
      ]; //Thumbnail Canvas Size Select Options.

    const dispatch = useDispatch();
    const [showCanvasButton, setShowCanvasButton] = useState(false);
    const [showTxtButton, setShowTxtButton] = useState(false);
    const cnvsColor = useSelector((state) => state.canvasColor.value);
    const cnvsSize = useSelector((state) => state.canvasSizing.value);
    const thumbText = useSelector((state) => state.textInput.value);
    const textSize = useSelector((state) => state.textSizing.value);
    const txtColor = useSelector((state) => state.textColor.value);
    const thumbName = useSelector((state) => state.thumbName.value);
      
    const onDownloadBtn = () =>{
        const CurCanvas = canvasRef.current;
        domtoimage //제작된 썸네일 다운로드
          .toBlob(CurCanvas)
          .then((blob,) => {
            saveAs(blob, thumbName);
          });
      }

    return(
        <div>
            <ControllerMainStyle>
                <TextAndSizeCtrlStyle>
                        <InputTextStyle
                            type = "text" 
                            placeholder = "썸네일 텍스트" 
                            value = { thumbText } 
                            onChange = { e=> dispatch(textInput(e.target.value)) } 
                        />

                        <CtrlButtonStyle
                            onClick = { onDownloadBtn }>
                            썸네일 저장
                        </CtrlButtonStyle>
                </TextAndSizeCtrlStyle>

                <OtherCanvasCtrlStyle>
                    <div id = "divCanvasColor">
                        <CtrlButtonStyle
                            onClick = {()=>setShowCanvasButton(setShowCanvasButton => !setShowCanvasButton)}>
                            {showCanvasButton ? '배경 색상 선택창 닫기' : '배경 색상 선택하기'}
                        </CtrlButtonStyle>
                        {showCanvasButton && (<SketchPicker
                                                    color={ cnvsColor }
                                                    onChangeComplete={ (color) => dispatch(chageCanvasColor((color.hex))) }/>
                                    
                            )
                        }
                    </div> {/* End of divColorpicker */}

                    <div id = "divTxtColor">
                        <CtrlButtonStyle
                        onClick = {()=> setShowTxtButton(setShowTxtButton=>!setShowTxtButton)}>
                        { showTxtButton? '폰트 색상 선택창 닫기' : '폰트 색상 선택하기' }
                        </CtrlButtonStyle>
                        {showTxtButton && (<BlockPicker
                                                color={ txtColor }
                                                onChangeComplete={ (color) => dispatch(textColorChagne(color.hex)) }/>
                            )
                        }
                    </div> {/* End of divTxtColor */}

                    <div id = "divCanvasSize">
                        썸네일 사이즈
                        <Select 
                           className = "canvasSize" 
                           options = { canvasSizePreset } 
                           value = { cnvsSize }
                           defaultValue = { cnvsSize[1] }
                           onChange = { (value) => dispatch(canvasSizing(value)) }
                           styles = {customStyles}
                        />
                    </div>

                    <div id = "divSelectSize">
                        폰트 사이즈
                        <Select 
                          className = "fontSize" 
                          options = { fontSizePreset } 
                          value = { textSize }
                          defaultValue = { textSize[1] }
                          onChange = { (value) => dispatch(textSizing(value)) }
                          styles = {customStyles}
                        />
                    </div>{/* End of divSelectSize*/}


                </OtherCanvasCtrlStyle>

            </ControllerMainStyle>
        </div>

    )

});

const ControllerMainStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top : 50px;
`;

const TextAndSizeCtrlStyle = styled.div`
    display: flex;
    flex-direction: row;
    margin : 0, auto;
    justify-content : center;
    align-items: center;
    color : black;

`;

const OtherCanvasCtrlStyle = styled.div`
    display: flex;
    flex-direction: row;
    margin : 0, auto;
    justify-content : center;
    align-items: center;
`;

const InputTextStyle = styled.input`
    width : 37em;
    display:block;
    background-color: #FEFFDE;
    color:#2e2e2e;
    margin:0, auto;
    margin-right: 10px;
    border: 3px solid #52734D;
    border-radius:10px;
    font-size:11pt;
    text-align:center;
    padding:10px 20px;
`;

const CtrlButtonStyle = styled.button`
    display: block;
    position: relative;
    float: left;
    width: 180px;
    padding: 0;
    margin: 10px 20px 10px 0;
    padding:10px 20px;
    font-weight: 600;
    text-align: center;
    color: #2e2e2e;
    border-radius: 10px;
    border: 3px solid #52734D;
    transition: all 0.2s ;
    background: #FEFFDE;


    :hover {
    background: #a4ee34;
    cursor:pointer;
    }
`;
export default Controller;