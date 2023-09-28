import React from "react";
import HigherComp from "./HigherComp";
const ClickC = (props) => {
  return (
    <div>
      <h1>Click COunter</h1>
      <h2>Number: {props.count}</h2>
      <button onClick={props.click}>Increment</button>
    </div>
  );
};

export default HigherComp(ClickC);
