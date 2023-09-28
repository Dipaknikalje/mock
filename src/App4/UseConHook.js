import React, { useContext } from "react";
import { data1 } from "./UseConHookApi";

const UseConHook = () => {
  const name = useContext(data1);
  return (
    <div>
      <h1>My name is {name}</h1>
    </div>
  );
};

export default UseConHook;
