import React, { Component } from 'react';
import "./dropDown.css";

class dropDown extends Component {
  constructor(props) {
    super(props);
    this.handleClick1 = this.handleClick1.bind(this);

    this.state = {
      demo1IsActive: false,
    }
  }

  handleClick1() {
    let list1 = document.getElementsByClassName("dropDownList1")[0];
    let isActive = this.state.demo1IsActive;
    this.setState({
      demo1IsActive: !isActive,
    });

    if(isActive) {
      list1.classList.remove("active");
      list1.classList.add("notActive");
    } else {
      list1.classList.remove("notActive");
      list1.classList.add("active");
    }
  }

  componentDidMount() {
    let a1 = document.getElementById("dropDownBtn1");
    a1.addEventListener("click", this.handleClick1); 
  }

  componentWillUnmount() {
    let a1 = document.getElementById("dropDownBtn1");
    a1.addEventListener("click", this.handleClick1);
  }

  render() {
    return (
      <div className="dropDown">
        <h3>drop down</h3>
        <div className="demo1 demo">
          <span id="dropDownBtn1">
            demo1
          </span>
          <ul className="dropDownList1 notActive">
            <li>176869</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default dropDown;


/*
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Hover me <Icon type="down" />
    </a>
  </Dropdown>,
  mountNode,
);



var x = 1, y = z = 0;
function add(n) {
  return n = n + 1;
}
y = add(x);
function add(n) {
  return n = n + 3;
}
z = add(x);

console.log(x, y, z)
}
*/