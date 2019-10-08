import React, { useState } from "react";
import NumberControl from "./numberControl/numberControl";
import "./inputNumberHook.css"


function InputNumberHook() {
  const [number, setNumber] = useState(0);

  function add() {
    setNumber(number + 1);
  }

  function minus() {
    setNumber(number - 1);
  }

  return (
    <div className="inputNumber">
      <h3>inputNumber</h3>
      <div className="demo1 demo">
        <input value={number}/>
        <NumberControl handleAdd={add} handleMinus={minus}/>
      </div>
    </div>
  )
}

export default InputNumberHook;