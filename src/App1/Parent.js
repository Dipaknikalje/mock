import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [name, setName] = useState("John");

  const handleClick = () => {
    setName("Advait");
  };
  return (
    <div>
      <Child name={name} Click={handleClick} />
    </div>
  );
};

export default Parent;
