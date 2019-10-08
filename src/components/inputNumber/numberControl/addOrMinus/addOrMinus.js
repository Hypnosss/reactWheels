import React from "react";

function addOrMinus(props) {
  function handleMouseEnter(e) {
    e.persist();
    e.target.parentElement.classList.add("active");
    e.target.classList.add("active");
  }

  function handleMouseLeave(e) {
    e.persist();
    e.target.parentElement.classList.remove("active");
    e.target.classList.remove("active");
  }

  let classListStr = "addOrMinus" + " " + props.classNamePlus;

  return (
    <div className={classListStr} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={props.clickHandler}>
      {props.content}
    </div>
  )
}

export default addOrMinus;