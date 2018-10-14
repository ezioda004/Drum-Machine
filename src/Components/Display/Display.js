import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
  state = {
    currVolume: 100
  };
  volumeSlider = e => {
    [...this.props.audioRef.current.children].forEach(
      pad => (pad.children[0].volume = e.target.value/100)
    );
    this.setState({
      currVolume: e.target.value
    });
  };
  render() {
    return (
      <div id="display">
        <h1>
          <span className="first-word">Drum</span>{" "}
          <span className="second-word">Machine</span>
        </h1>
        <div className="screen">
          <div className="inside">
            <h2>{this.props.name}</h2>
          </div>
          <div className="volume">
          <i className="fas fa-volume-up fa-lg"></i>
            <input
              type="range"
              id="vol"
              name="volume"
              min="0"
              max="100"
              onChange={this.volumeSlider}
              value={this.state.currVolume}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
