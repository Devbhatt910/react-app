import { useState } from "react";

const UseStateTextHideShow = () => {

    const [showText, setShowText] = useState(false);


    const setShowtext = ()=>{
        setShowText(!showText);
    }


  return (
    <div>
      <h2>{showText ? "This is conditional based text" : ''}</h2>
      <button onClick={setShowtext}>Toggle Text</button>
    </div>
  )
}

export default UseStateTextHideShow
