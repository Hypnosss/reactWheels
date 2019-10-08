import React, { Component } from 'react';
import "./inputNumber.css"

class inputNumber extends Component {
  constructor(props) {
    super(props);
    this.handleClickAdd1 = this.handleClickAdd1.bind(this);
    this.handleClickMinus1 = this.handleClickMinus1.bind(this);
    this.handleInput1 = this.handleInput1.bind(this);
    this.handleMouseEnter1 = this.handleMouseEnter1.bind(this);
    this.handleMouseLeave1 = this.handleMouseLeave1.bind(this);

    this.state = {
      n: 0,
    }
  }
  
  componentDidMount() {
    let add1 = document.getElementById("add1");
    let minus1 = document.getElementById("minus1");
    add1.addEventListener("click", this.handleClickAdd1);
    minus1.addEventListener("click", this.handleClickMinus1);

    let input1 = document.getElementById("input1");
    input1.value = 0;

    let demo1 = document.getElementsByClassName("demo1")[0];
    demo1.addEventListener("mouseenter", this.handleMouseEnter1);
    demo1.addEventListener("mouseleave", this.handleMouseLeave1);
  }
  
  componentWillUnmount() {
    let add1 = document.getElementById("add1");
    let minus1 = document.getElementById("minus1");
    add1.removeEventListener("click", this.handleClickAdd1);
    minus1.removeEventListener("click", this.handleClickMinus1);

    let demo1 = document.getElementsByClassName("demo1")[0];
    demo1.removeEventListener("mouseenter", this.handleMouseEnter1);
    demo1.removeEventListener("mouseleavee", this.handleMouseLeave1);
  }
  
  handleClickAdd1() {
    let input = document.getElementById("input1");
    
    let n = this.state.n;
    input.value = ++n;
    this.setState({
      n: n,
    });
  }

  handleClickMinus1() {
    let input = document.getElementById("input1");

    let n = this.state.n;
    input.value = --n;
    this.setState({
      n: n,
    });
  }

  handleInput1() {
    // console.log("input")
    let input1 = document.getElementById("input1");
    let n = input1.value - 0;
    if(n) {
      this.setState({
        n: n,
      });
    }
  }

  handleMouseEnter1() {
    let demo1 = document.getElementsByClassName("demo1")[0];
    demo1.classList.remove("notActive");
    demo1.classList.add("active");
  }

  handleMouseLeave1() {
    let demo1 = document.getElementsByClassName("demo1")[0];
    demo1.classList.remove("active");
    demo1.classList.add("notActive");
  }

  handleMouseEnterAdd1() {

  }

  render() { 
    return (
      <div className="inputNumber">
        <h3>inputNumber</h3>

        <div className="demo1 notActive">
          <input id="input1" className="notActiveInput"/>
          <div className="btns">
            <div id="add1">↑</div>
            <div id="minus1">↓</div>
          </div>
        </div>
      
      </div>
    );
  }
}
 
export default inputNumber;