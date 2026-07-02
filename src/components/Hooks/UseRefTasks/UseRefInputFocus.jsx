import { useEffect, useRef } from "react";

const UseRefInputFocus = () => {
  const inputEle = useRef();

  useEffect(()=>{
    inputEle.current.focus();
  }, [])

  return (
    <div>
      <input type="text" ref={inputEle} />
      <button
        onClick={() => {
          inputEle.current.focus();
          console.log(inputEle.current.value);
          inputEle.current.value = "";
        }}
      >
        Click
      </button>
    </div>
  );
};

export default UseRefInputFocus;
