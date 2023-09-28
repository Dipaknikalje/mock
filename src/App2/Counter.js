import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Number: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click here</button>
    </div>
  );
};

export default Counter;
