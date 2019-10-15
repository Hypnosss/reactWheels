import React, { Component } from 'react';
import {Link} from "react-router-dom";

class slideNav extends Component {
  render() { 
    return (
      <div className="slideNav">
        <h1>nav</h1>
        <ul>
          <li>
            <Link to="/">main</Link>
          </li>
          <li>
            <Link to="/scroll">scroll</Link>
          </li>
          <li>
            <Link to="/pagination">pagination</Link>
          </li>
          <li>
            <Link to="/dropDown">drop down</Link>
          </li>
          <li>
            <Link to="/inputNumber">inputNumber</Link>
          </li>
          <li>
            <Link to="/switch">switch</Link>
          </li>
          <li>
            <Link to="/checkBox">checkBox</Link>
          </li>
          <li>
            <Link to="/datePicker">date picker</Link>
          </li>
          <li>
            <Link to="/drawer">drawer</Link>
          </li>
        </ul>
      </div>
    );
  }
}
 
export default slideNav;