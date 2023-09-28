import React from "react";

const Child = (props) => {
  return (
    <div>
      <h1>Data render below</h1>
      <h1>My name is {props.name}</h1>
      <button onClick={props.Click}>Click here</button>
    </div>
  );
};

export default Child;
