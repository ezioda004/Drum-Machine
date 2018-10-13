import React, { Component } from "react";
import "./Display.css";
class Display extends Component {
  render() {
    return (
      <div id="display">
        <h1>Drum Machine</h1>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Display;
