import React from 'react';
import Title from './components/Title';
import Canvas from './components/Canvas';
import styled from 'styled-components';

const App = () =>{
return (
  <AppMainStyle>
    <div id="divHeader">
      <Title/>
    </div>

    <div id="divDisplayCanvas">
      <Canvas/>

    </div>
    <div id="contrlotest">
    </div>
    
  </AppMainStyle> 
)
}

const AppMainStyle = styled.div`
    background-color: #91C788;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: #FEFFDE;

    @font-face {
      font-family: 'Noto Sans CJK KR';
      font-style: normal;
      font-weight: 100;
      src: url("styles/fonts/NotoSansKR-Light.woff2") format('woff2'),
      url("styles/fonts/NotoSansKR-Light.woff") format('woff'),
      url("styles/fonts/NotoSansKR-Light.otf") format('truetype')
    }

    @font-face {
      font-family: 'Noto Sans CJK KR';
      font-style: normal;
      font-weight: normal;
      src: url("styles/fonts/NotoSansKR-Regular.woff2") format('woff2'),
      url("styles/fonts/NotoSansKR-Regular.woff") format('woff'),
      url("styles/fonts/NotoSansKR-Regular.otf") format('truetype')
    }


    @font-face {
      font-family: 'Noto Sans CJK KR';
      font-style: normal;
      font-weight: 500;
      src: url("styles/fonts/NotoSansKR-Medium.woff2") format('woff2'),
      url("styles/fonts/NotoSansKR-Medium.woff") format('woff'),
      url("styles/fonts/NotoSansKR-Medium.otf") format('truetype')
    }

    @font-face {
      font-family: 'Noto Sans CJK KR';
      font-style: normal;
      font-weight: bold;
      src: url("styles/fonts/NotoSansKR-Bold.woff2") format('woff2'),
      url("styles/fonts/NotoSansKR-Bold.woff") format('woff'),
      url("styles/fonts/NotoSansKR-Bold.otf") format('truetype')
    }
    @import url(https://fonts.googleapis.com/css?family=Josefin+Slab:100,300,400,600,700);

    #divCanvasContainer{
  width : 960px;
  height : 540px;
  display: flex;
  justify-content: center;
  align-items: center;
}



button {
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
}


button:hover {
  background: #a4ee34;
  cursor:pointer;
}

select{
  display : block;
  width : 120px;
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