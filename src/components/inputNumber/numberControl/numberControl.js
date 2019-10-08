import React from "react";
import AddOrMinus from "./addOrMinus/addOrMinus";

function numberControl(props) {
  function handleMouseEnter(e) {
    e.persist();
    e.target.classList.add("active");
  }

  function handleMouseLeave(e) {
    e.persist();
    e.target.classList.remove("active");
  }
  
  return (
    <div className="numberControl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <AddOrMinus content="↑" clickHandler={props.handleAdd} classNamePlus="add"/>
      <AddOrMinus content="↓" clickHandler={props.handleMinus} classNamePlus="minus"/>
    </div>
  )
}

export default numberControl;