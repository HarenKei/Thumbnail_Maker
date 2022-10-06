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
`;
export default App;