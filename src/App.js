import React, { Component } from "react";
import t1 from "./icons/t1.svg";
import base from "./icons/base.svg";
import side from "./icons/side-drum.svg";
import c1 from "./icons/cymbals.svg";
import c2 from "./icons/cymbals1.svg";
import "./App.css";
const sounds = {
  snare: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  sidestick: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  "Punchy kick":
    "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  "Closed hi-hat": "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  "Open hi-hat": "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  "Closed HH-2": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  kick: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  "kick and hi-hat":
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  "open hh-2": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
};
class App extends Component {
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
              <img className="tt t1" src={t1} />
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

        {/* <img src = {drum} height = "200" width = "200"/>
       <img src = {drum} height = "200" width = "200"/>
       <img src = {drum} height = "200" width = "200"/> */}
      </div>
    );
  }
}

export default App;
