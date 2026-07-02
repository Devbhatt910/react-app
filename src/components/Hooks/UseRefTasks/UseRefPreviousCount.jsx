import { useEffect, useRef, useState } from "react";

const UseRefPreviousCount = () => {
  const [count, setCount] = useState(0);

  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <>
      <h2>Current : {count}</h2>
      <h2>Previous : {previousCount.current}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};

export default UseRefPreviousCount;
