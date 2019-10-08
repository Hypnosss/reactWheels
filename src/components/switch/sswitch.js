import React, { Component } from 'react';
import "./sswitch.css"

class sswitch extends Component {
  constructor(props) {
    super(props);
    this.handleClickDemo1 = this.handleClickDemo1.bind(this);

    this.state = {
      demo1Active: false,
    }
  }
  
  componentDidMount() {
    let demo1 = document.getElementsByClassName("demo1Wrapper")[0];
    demo1.addEventListener("click", this.handleClickDemo1);
  }

  componentWillUnmount() {
    let demo1 = document.getElementsByClassName("demo1Wrapper")[0];
    demo1.removeEventListener("click", this.handleClickDemo1);
  }

  handleClickDemo1() {
    let demo1 = document.getElementsByClassName("demo1Wrapper")[0];
    let isActive = this.state.demo1Active;
    this.setState({
      demo1Active: !isActive,
    });
    // console.log(1)
    if(isActive) {
      demo1.classList.remove("active");
      demo1.classList.add("notActive");
    } else {
      demo1.classList.remove("notActive");
      demo1.classList.add("active");
    }
  }

  render() { 
    return (
      <div className="switch">
        <h3>switch</h3>
        <div className="demo1Wrapper">
          <div className="demo1">
            <div className="demo1Switch"></div>
          </div>
        </div>
        
      </div>
    );
  }
}
 
export default sswitch;