import React, { Component } from 'react';
import "./pagination.css";

class pagination extends Component {
  constructor(props) {
    super(props);
    this.demo1HandleClick = this.demo1HandleClick.bind(this);
    this.demo2HandleClick = this.demo2HandleClick.bind(this);

    this.state = {
      demo1Total: 5,
      demo1ActiveLi: 1,
      demo2Total: 30,
      demo2NumPerPage: 5,
      demo2Active: 1,
    }
  }

  demo1HandleClick(e) {
    let ul = document.getElementsByClassName("demo1Ul")[0];

    let lis = [];
    for(let mem of [...ul.children]) {
      // console.dir(mem.no)
      if(mem.nodeName === "LI") {
        lis.push(mem);
      }
    }

    // console.log(lis.indexOf(e.target));
    let activeLi = this.state.demo1ActiveLi;
    // console.log(activeLi)
    if(lis.indexOf(e.target) === lis.length - 1) {//>
      if(activeLi < 5) {
        this.setState({
          demo1ActiveLi: activeLi + 1,
        });
        lis[activeLi].classList.remove("active");
        lis[activeLi + 1].classList.add("active");
      }
    } else if(lis.indexOf(e.target) === 0) {//<
      if(activeLi > 1) {
        this.setState({
          demo1ActiveLi: activeLi - 1,
        });
        lis[activeLi].classList.remove("active");
        lis[activeLi - 1].classList.add("active");
      }
    } else {
      this.setState({
        demo1ActiveLi: lis.indexOf(e.target),
      });
      lis[activeLi].classList.remove("active");
      lis[lis.indexOf(e.target)].classList.add("active");
    }
  }

  demo2HandleClick(e) {
    const total = this.state.demo2Total;
    const n2 = this.state.demo2NumPerPage;
    let active2 = this.state.demo2Active;

    let ul = document.getElementsByClassName("demo2Ul")[0];
    let lis = [];
    for(let mem of [...ul.children]) {
      if(mem.nodeName === "LI") {
        lis.push(mem);
      }
    }

    if(lis.indexOf(e.target) === lis.length - 1) {
      if(active2 < total) {
        active2 ++;
      }
    } else if(lis.indexOf(e.target) === 0) {
      if(active2 > 1) {
        active2 --;
      }
    } else if(lis.indexOf(e.target) !== -1){
      active2 = (e.target.innerText - 0);
    }
    // console.log(active2)
    this.setState({
      demo2Active: active2,
    });

    /*
    1 1   1
    2 2   2
    3 3   3
    4 3   4
    5 3   4   
    9 3   5
    10 4  6

    */

    lis = [];
    for(let mem of [...ul.children]) {
      if(mem.nodeName === "LI") {
        lis.push(mem);
      }
    }

    for(let li of lis) {
      li.classList.remove("active");
    }
    if(active2 <= 2 + Math.floor(n2 / 2)) {
      lis[active2].classList.add("active");
    } else if(active2 >= total - Math.floor(n2 / 2) + 1) {
      lis[active2 - total + 2 + 2 * Math.floor(n2 / 2)].classList.add("active");
    } else {
      // console.log(2 + Math.floor(n2 / 2));
      // for(let mem of lis) {
      //   console.log(mem.innerHTML)
      // }
      lis[2 + Math.floor(n2 / 2)].classList.add("active");
    }
  }

  produceDemo2Jsx() {
    const total = this.state.demo2Total;
    const n2 = this.state.demo2NumPerPage;
    let active2 = this.state.demo2Active;
    let demo2Jsx = [];

    if(active2 - Math.floor(n2 / 2) >= 2) {
      demo2Jsx.push(
        <li>1</li>
      );
    }
    if(active2 - Math.floor(n2 / 2) >= 3) {
      demo2Jsx.push(
        <span>...</span>
      );
    }

    if(active2 - Math.floor(n2 / 2) < 1) {
      for(let i = 1; i <= n2; i++) {
        demo2Jsx.push(
          <li>{i}</li>
        );
      }
    } else if(active2 + Math.floor(n2 / 2) > total) {
      for(let i = total - n2 + 1; i <= total; i++) {
        demo2Jsx.push(
          <li>{i}</li>
        );
      }
    } else {
      for(let i = active2 + Math.floor(n2 / 2) - n2 + 1; i <= active2 + Math.floor(n2 / 2); i++) {
        demo2Jsx.push(
          <li>{i}</li>
        );
      }
    }

    if(active2 + Math.floor(n2 / 2) <= total - 2) {
      demo2Jsx.push(
        <span>...</span>
      );
    }
    if(active2 + Math.floor(n2 / 2) <= total - 1) {
      demo2Jsx.push(
        <li>{total}</li>
      );
    }
    return demo2Jsx;
  }

  componentDidMount() {
    let ul1 = document.getElementsByClassName("demo1Ul")[0];
    let ul2 = document.getElementsByClassName("demo2Ul")[0];
    
    ul1.addEventListener("click", this.demo1HandleClick);
    ul2.addEventListener("click", this.demo2HandleClick);

    ul1.children[1].classList.add("active");
    ul2.children[1].classList.add("active");
  }

  componentWillUnmount() {
    let ul1 = document.getElementsByClassName("demo1Ul")[0];
    let ul2 = document.getElementsByClassName("demo2Ul")[0];
    
    ul1.removeEventListener("click", this.demo1HandleClick);
    ul2.removeEventListener("click", this.demo2HandleClick);
  }

  render() { 
    let n1 = this.state.demo1Total;
    let demo1Jsx = [];
    for(let i = 1; i <= n1; i++) {
      demo1Jsx.push(
        <li data={i}>{i}</li>
      )
    }
    
    let demo2Jsx = this.produceDemo2Jsx();
    return (
      <div className="pagination">
        <h3>pagination</h3>
        <div className="demo1">
          <ul className="demo1Ul">
            <li>&lt;</li>
            {demo1Jsx}
            <li>&gt;</li>
          </ul>
        </div>

        <div className="demo2">
          <ul className="demo2Ul">
          <li>&lt;</li>
            {demo2Jsx}
          <li>&gt;</li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default pagination;