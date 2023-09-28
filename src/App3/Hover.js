import React from 'react'
import HigherComp from './HigherComp'
const Hover = (props) => {
  return (
    <div>
      <h1>Hover Counter</h1>
      <h2>Number:{props.number}</h2>
      <button onMouseOver={props.hover}>Increment</button>
    </div>
  )
}

export default HigherComp (Hover)
