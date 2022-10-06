import React from 'react';
import Title from './components/Title';
import Canvas from './components/Canvas';
import styled from 'styled-components';


const App = () =>{
return (
  <AppMainStyle>
      <Title/>
      <Canvas/>
  </AppMainStyle> 
)
}

const AppMainStyle = styled.div`

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

    background-color: #91C788;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    font-family: 'Pretendard-Regular';
    height: 100%;
  


select{
  display : block;
  width : 200px;
  line-height: 40px;
  height : 40px;
}

input{
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
}

#divTextInput input{
  width : 580px;
}

#divCanvas{
  display : flex;
  margin:0 auto;
  justify-content: center;
  
}

#divCanvasAdjustment{
  display: flex;
  flex-direction: column;
  margin-top : 50px;
}

#divTextAndSize{
  display: flex;
  flex-direction: row;
  margin : 0, auto;
  justify-content : center;
  align-items: center;
  color : black;
}
#divOterAdjustment{
  display: flex;
  flex-direction: row;
  margin : 0, auto;
  justify-content : center;
  align-items: center;
}
`;
export default App;