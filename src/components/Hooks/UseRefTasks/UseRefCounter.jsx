import { useRef } from "react";

const UseRefCounter = () => {

    const countRef = useRef(0);

    const increase = () => {
        countRef.current++;
        console.log(countRef.current);
    };

    return (
        <button onClick={increase}>
            Increase
        </button>
    );
}

export default UseRefCounter
