import { useEffect } from "react";
import { useState } from "react";

const UseEffectCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <h3>Count: {count}</h3>
    </div>
  );
};

export default UseEffectCounter;
