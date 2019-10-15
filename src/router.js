import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./components/main";
import Scroll from "./components/scroll/scroll";
import SlideNav from "./components/slideNav";
import Pagination from "./components/pagination/pagination";
import DropDown from "./components/dropDown/dropDown";
import InputNumber from "./components/inputNumber/inputNumberHook";
import SSwitch from "./components/switch/sswitch";
import CheckBox from "./components/checkBox/checkBox";
import DatePicker from "./components/datePicker/datePicker";
// import Test from "./components/test/test";
import Drawer from "./components/drawer/drawer";

class AppRouter extends Component {
  render() { 
    return ( 
      <Router>
        <div className="left">
          <SlideNav></SlideNav>
        </div>
        <div className="right">
          <div className="rightMain">
            <Route path="/" exact component={Main}/>
            <Route path="/scroll" component={Scroll}/>
            <Route path="/pagination" component={Pagination}/>
            <Route path="/dropDown" component={DropDown}/>
            <Route path="/inputNumber" component={InputNumber}/>
            <Route path="/switch" component={SSwitch}/>
            <Route path="/checkBox" component={CheckBox}/>
            <Route path="/datePicker" component={DatePicker}/>
            <Route path="/drawer" component={Drawer}/>
          </div>
        </div>
      </Router>
    );
  }
}
 
export default AppRouter;