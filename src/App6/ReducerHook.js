import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return 0;
  }
};
const ReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>number:{count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
};

export default ReducerHook;
