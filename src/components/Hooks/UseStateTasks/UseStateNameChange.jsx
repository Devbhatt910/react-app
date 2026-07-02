import { useState } from "react";

const UseStateNameChange = () => {

    const [name,setName] = useState('');


    const changeName = () => {
        const inputName = document.querySelector('input').value;
        setName(inputName);
    }

  return (
    <div>
      <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
      <button onClick={changeName} >Change Name</button>

      Name is : {name}
    </div>
  )
}

export default UseStateNameChange
