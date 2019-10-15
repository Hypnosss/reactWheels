import React, { Component } from 'react';
import "./test.css";



class test extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    // this.setTextInputRef = this.setTextInputRef.bind(this)
    this.focusTextInput = this.focusTextInput.bind(this)

    this.state = {
      n: 1,
      nn: 0
    }
  }

  componentDidMount() {
    let intt = setInterval(() => {
      console.log(this.textInput);
      this.setState({nn: ++this.state.nn});
      if(this.state.nn > 1000) {
        clearInterval(intt)
      }
    }, 1000);
  }

  setTextInputRef(ele) {
    console.log(ele);
    console.log(this.textInput)
    this.textInput = ele;
  }

  focusTextInput() {
    this.setState({n: ++this.state.n});
  }

  render() {

    return (
      <div>
        <input
          type="text"
        />
        <div ref={this.setTextInputRef.bind(this)}>{this.state.n}</div>
        <div ref={el => this.textInput2 = console.log(el)}>{this.state.n}</div>
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}


class Test1 extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() { 
    return (
    <div>
      test1
    </div>);
  }
}


function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    render() {
      const {forwardedRef, ...rest} = this.props;
      return <WrappedComponent ref={forwardedRef} {...rest} />;
      // return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}

 

export default test;
