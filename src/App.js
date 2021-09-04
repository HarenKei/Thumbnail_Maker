import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const Thumbnail = () =>{
  const [image, setImage] = useState(null)
  const canvas = useRef(null)
  const [thumbText, setThumbText] = useState(null)
  
  useEffect(()=>{
    const bgImage = new Image();
    bgImage.src = "./image/background.jpeg"
    bgImage.onload = () => setImage(bgImage)
  }, [])

  const onChange = (event) => {
    /*  event: 사용자의 액션에 따라서 자동으로 이벤트가 
    생성되며, 특정한 파라미터가 없을경우, 기본 파라미터로 이벤트 객체가 생성된다. */
      setThumbText(event.target.value);
  }


return (
  <div>
    <h1>STARGAZER blog Thumbnail Maker!</h1>

    <div>
      <canvas ref={ canvas } width="800px" height="500px" /> {/*썸네일의 배경이 될 이미지를 표시하며, 텍스트 작성을 보여준다.*/}
    </div>
    <div>
      썸네일 텍스트 : <input type="text" value={ thumbText } onChange={onChange} />
      { thumbText }
    </div>
  </div>
)
}

export default Thumbnail;
