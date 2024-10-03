import { useState } from "react";
const Number = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => add()}>ADD</button>
      <button onClick={() => minus()}>MINUS</button>
    </div>
  );
};
export default Number;
