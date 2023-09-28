import React, {  useState } from "react";
import Child from "./Child";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(100);

  return (
    <div>
      <Child />
      {/* <h1>{memoHook}</h1> */}
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{add}</h1>
      <button onClick={() => setAdd(add - 1)}>Decrement</button>
    </div>
  );
};

export default Hooks;
