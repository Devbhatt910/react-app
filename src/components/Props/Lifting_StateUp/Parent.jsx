import { useState } from "react";

import Child from "./Child";

const Parent = () => {

    const [text,setText] = useState('');

  return(
    <>
        <Child text={setText}/>
        <h4>{text}</h4>
    </>
  ); 
};

export default Parent;
