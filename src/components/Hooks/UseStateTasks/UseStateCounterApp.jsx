import { useState } from 'react';

const UseStateCounterApp = () => {
  const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
      setCounter(counter + 1);
    };
    const decrementCounter = () => {
        if(counter > 0){
            setCounter(counter - 1);
        }
    };
    const resetCounter = () => {
      setCounter(0);
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    );
}

export default UseStateCounterApp
