import React, { Component } from "react";
import "./Display.css";
class Display extends Component {
  render() {
    return (
      <div id="display">
        <h1>
          <span className="first-word">Drum</span>{" "}
          <span className="second-word">Machine</span>
        </h1>
        <div className="screen">
            <div className = "inside">
                <h2>{this.props.name}</h2>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Display;
