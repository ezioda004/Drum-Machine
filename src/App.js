import React, { Component } from "react";
import t1 from "./icons/t1.svg";
import base from "./icons/base.svg";
import side from "./icons/side-drum.svg";
import c1 from "./icons/cymbals.svg";
import c2 from "./icons/cymbals1.svg";
import Kit, { sounds } from "./Components/Kit/Kit";
import Footer from "./Components/Footer/Footer";
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
    document.addEventListener("keydown", this.soundToAnimation);
  }
  clickSoundHandler = e => {
    //This handler gets the Key clicked from Kit component and passes to soundToAnimation
    this.soundToAnimation(e);
  };
  soundToAnimation = e => {
    //Clearning any previous pending setTimeout
    clearTimeout(App.clear);
    const addMoreToState = (obj, bool) =>
      obj.includes(" ")
        ? obj.split(" ").reduce((a, c) => void (a[c] = bool) || a, {})
        : {
            [obj]: bool
          };
    sounds.forEach(pad => {
      if (pad.key === e.key.toUpperCase()) {
        console.log(pad.class.includes(" "), typeof pad.class);
        this.setState(prevState => ({
          currentKey: e.key,
          addTo: addMoreToState(pad.class, true)
        }));
        App.clear = setTimeout(() => {
          this.setState(prevState => ({
            currentKey: "",
            addTo: addMoreToState(pad.class, false)
          }));
        }, 750);
      }
    });
  };
  render() {
    const { addTo: part } = this.state;
    return (
      <main>
        <div className="App">
        <div className="section1">
          <div className="cym">
            <img
              className={`c2 ${part.cym2 ? "play-cym2" : ""}`}
              src={c2}
              alt=""
            />
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
                className={`${part["side-base"] ? "play-cym-sidekick" : ""}`}
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

            <img
              className={`c1 ${part.cym1 ? "play-cym-sidekick" : ""}`}
              src={c1}
              alt=""
            />
          </div>
        </div>
        <Kit clickSoundHandler = {this.clickSoundHandler} keyPress={this.state.currentKey} />
      </div>
      <Footer />
      </main>
    );
  }
}

export default App;
