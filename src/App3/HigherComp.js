import React, { useState } from 'react'

const HigherComp = (Wrapped) => {
    const HocComp=()=>{
        const[count,setCount]=useState(0);
        const[num,setNum]=useState(0);
        const handleClick=()=>{
            setCount(count+1);
        }
        const handleHover=()=>{
            setNum(num+1)
        }
        return <Wrapped count={count} number={num} click={handleClick}  hover={handleHover}/>
    }
  return HocComp;
}

export default HigherComp
