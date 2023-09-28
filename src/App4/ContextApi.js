import React, { createContext } from "react";
import ConsumerComp from "./ConsumerComp";
const data = createContext(0);

const ContextApi = () => {
  const name = "dipak";

  return (
    <data.Provider value={name}>
      <ConsumerComp />
    </data.Provider>
  );
};

export default ContextApi;
export { data };
