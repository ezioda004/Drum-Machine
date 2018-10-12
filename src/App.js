import React, { Component } from "react";
import t1 from "./icons/t1.svg";
import base from "./icons/base.svg";
import side from "./icons/side-drum.svg";
import c1 from "./icons/cymbals.svg";
import c2 from "./icons/cymbals1.svg";
import Kit from "./Components/Kit/Kit";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentKey: ''
    }

  }
  componentDidMount(){
    document.addEventListener("keydown", e => {
      this.setState({
        currentKey: e.key
      });
    })
  }
  render() {
    return (
      <div className="App">
        <div className="section1">
          <div className="cym">
            <img className="c2" src={c2} alt="" />
          </div>
        </div>
        <div className="section2">
          <div className="tom">
            <div className="tom1-container">
              <img className="tt t1 play" src={t1} />
            </div>
            <div className="side-base">
              <img src={side} />
            </div>
          </div>
          <div className="base">
            <img src={base} height="300" width="300" />
          </div>
          <div className="tom">
            <div className="tom2-container">
              <img className="tt t2" src={t1} />
            </div>

            <img className="c1" src={c1} alt="" />
          </div>
        </div>
        <Kit keyPress = {this.state.currentKey}/>
      </div>
    );
  }
}

export default App;
