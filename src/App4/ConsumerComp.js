import React from "react";
import { data } from "./ContextApi";
const ConsumerComp = () => {
  return (
    <data.Consumer>
        {
            (name)=>{
                return(
                    <>
                    <h1>Name::{name}</h1>
    
                    </>
                )
            }
        }
    </data.Consumer>
  );
};

export default ConsumerComp;
