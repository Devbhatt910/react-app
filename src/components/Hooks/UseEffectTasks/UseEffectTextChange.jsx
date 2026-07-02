import { useEffect, useState } from "react";

const UseEffectTextChange = () => {

    const [text,setText] = useState("Hello World");

    useEffect(()=>{
        setTimeout(()=>{
            setText("Hello React");
        },2000)
    },[])

  return (
    <div>
      <h3>Hello ! , {text}</h3>
    </div>
  )
}

export default UseEffectTextChange
