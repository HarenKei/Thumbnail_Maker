import React from 'react';
import './App.css';
import Title from './components/Title';
import Canvas from './components/Canvas';




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
    </div>
    
  </div> 
)
}
export default App;