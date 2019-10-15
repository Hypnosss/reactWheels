import React, { useState } from "react";
import "./draw.css";

function Drawer(props) {
  const [demo1IsActive, changeDemo1IsActive] = useState(false);

  function handleDemo1BtnClick() {
    changeDemo1IsActive(true);
    // console.log(demo1IsActive)
  }

  function handleDemo1DrawerLeftClick() {
    changeDemo1IsActive(false);
  }

  return (
    <div className="drawer">
      <h3>drawer</h3>
      <div className={demo1IsActive ? "demo1 active" : "demo1"}>
        <div className="demo1Cover">
          <div className="drawerLeft" onClick={handleDemo1DrawerLeftClick}></div>
          <div className="drawRight">
            something
          </div>
        </div>
        <button onClick={handleDemo1BtnClick}>demo1</button>
      </div>
    </div>
  )
}

export default Drawer;