import React, { Component } from "react";
import t1 from "./icons/t1.svg";
import base from "./icons/base.svg";
import side from "./icons/side-drum.svg";
import c1 from "./icons/cymbals.svg";
import c2 from "./icons/cymbals1.svg";
import Kit, { sounds } from "./Components/Kit/Kit";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKey: "",
      addTo: {
        cym1: false,
        cym2: false,
        base: false,
        tom1: false,
        tom2: false,
        "side-base": false
      }
    };
  }
  static clear;
  componentDidMount() {
    document.addEventListener("keydown", e => {
      clearTimeout(App.clear);
      sounds.forEach(pad => {
        if (pad.key === e.key.toUpperCase()) {
          this.setState(prevState => ({
            currentKey: e.key,
            addTo: {
              [pad.class]: !prevState.addTo[pad.class]
            }
          }));
          App.clear = setTimeout(() => {
            this.setState(prevState => ({
              currentKey: "",
              addTo: {
                [pad.class]: !prevState.addTo[pad.class]
              }
            }));
          }, 2000);
        }
      });
    });
  }
  render() {
    const { addTo: part } = this.state;
    return (
      <div className="App">
        <div className="section1">
          <div className="cym">
            <img className={`c2 ${part.cym2 ? "play" : ""}`} src={c2} alt="" />
          </div>
        </div>
        <div className="section2">
          <div className="tom">
            <div className="tom1-container">
              <img className={`tt t1 ${part.tom1 ? "play" : ""}`} src={t1} />
            </div>
            <div className="side-base">
              <img
                src={side}
                className={`${part["side-base"] ? "play" : ""}`}
              />
            </div>
          </div>
          <div className="base">
            <img
              src={base}
              className={`${part.base ? "play" : ""}`}
              height="300"
              width="300"
            />
          </div>
          <div className="tom">
            <div className="tom2-container">
              <img className={`tt t2 ${part.tom2 ? "play" : ""}`} src={t1} />
            </div>

            <img className={`c1 ${part.cym1 ? "play" : ""}`} src={c1} alt="" />
          </div>
        </div>
        <Kit keyPress={this.state.currentKey} />
      </div>
    );
  }
}

export default App;
