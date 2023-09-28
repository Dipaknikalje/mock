import React, { createContext } from "react";
import UseConHook from "./UseConHook";
const data1 = createContext(0);
const UseConHookApi = () => {
  const name = "Advait";
  return (
    <data1.Provider value={name}>
      <UseConHook />
    </data1.Provider>
  );
};

export default UseConHookApi;
export { data1 };
