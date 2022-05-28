import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker, BlockPicker } from 'react-color';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import Select from 'react-select';
import './App.css';
import Title from './components/Title';
import Canvas from './components/Canvas';
import ControlTest from './components/ControlTest';
import { text } from '@fortawesome/fontawesome-svg-core';




const App = () =>{
return (
  <div id="divWrap">
    <div id="divHeader">
      <Title/>
    </div>

    <div id="divDisplayCanvas">
      <Canvas/>

    </div>
    <div id="contrlotest">
      <ControlTest/>
    </div>
    
  </div> 
)
}
export default App;