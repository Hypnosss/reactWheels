import React, { useState, useEffect } from "react";
import "./checkBox.css"

function CheckBox() {
  const [checkedNum, changeCheckedNum] = useState(0);

  function checkBoxChange(e) {
    e.persist();

    let cover = e.target.parentNode.children[0];
    if(e.target.checked) {
      cover.classList.remove("notActive");
      cover.classList.add("active");
    } else {
      cover.classList.remove("active");
      cover.classList.add("notActive");
    }

    let parent = document.getElementsByClassName("parent")[0];
    let childrenNum = parent.attributes.num.nodeValue - 0;

    if(e.target.parentNode.classList.contains("parent")) {
      let ttChecked = e.target.checked;
      for(let node of e.target.parentNode.parentNode.children) {
        if(node.classList.contains("child")) {
          node.children[1].checked = ttChecked;
        }
      }
      if(ttChecked) {
        changeCheckedNum(childrenNum);
      } else {
        changeCheckedNum(0);
      }
    } else if(e.target.parentNode.classList.contains("child")) {
      // console.log(checkedNum)
      if(e.target.checked) {
        changeCheckedNum(checkedNum + 1);
      } else {
        changeCheckedNum(checkedNum - 1);
      }
     
    }
  }

  useEffect(() => {
    // console.log(checkedNum)
    // console.dir(childrenNum)
    let parent = document.getElementsByClassName("parent")[0];
    let childrenNum = parent.attributes.num.nodeValue - 0;
    // console.log(childrenNum, checkedNum)

    parent.children[1].checked = (checkedNum === childrenNum);
    if(checkedNum > 0 && checkedNum < childrenNum) {
      parent.classList.add("some");
    } else {
      parent.classList.remove("some");
    }
  });

  return (
    <div className="checkBox">
      <h3>checkbox</h3>
      <div className="demo1 demo">
        <div className="cover notActive"></div>
        <input type="checkbox" onChange={checkBoxChange} id="demo1Checkbox"/>
        <label htmlFor="demo1Checkbox" className="demo1Label">1243</label>
      </div>

      <div className="demo2">
        <div className="demo parent" num="2">
          <div className="cover notActive"></div>
          <input type="checkbox" onChange={checkBoxChange} id="demo1Checkbox"/>
          <label htmlFor="demo1Checkbox" className="demo1Label">parent</label>
        </div>
        <div className="demo child">
          <div className="cover notActive"></div>
          <input type="checkbox" onChange={checkBoxChange} id="demo1Checkbox"/>
          <label htmlFor="demo1Checkbox" className="demo1Label">child1</label>
        </div>
        <div className="demo child">
          <div className="cover notActive"></div>
          <input type="checkbox" onChange={checkBoxChange} id="demo1Checkbox"/>
          <label htmlFor="demo1Checkbox" className="demo1Label">child2</label>
        </div>
      </div>
    </div>
  )
}

export default CheckBox;