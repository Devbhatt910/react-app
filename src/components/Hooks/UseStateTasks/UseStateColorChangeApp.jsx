import { useState } from 'react';

const UseStateColorChangeApp = () => {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    setColor(color === "red" ? "blue" : "red");
  };

  return (
    < div style={{ backgroundColor: color , color:"white"}}>
      <h2>Color is : {color}</h2>

      <button onClick={changeColor}>
        {color === "red" ? "Change to Blue" : "Change to Red"}
      </button>
    </div>
  );
}

export default UseStateColorChangeApp;
