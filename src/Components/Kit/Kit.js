import React, { Component } from "react";
import Display from "../Display/Display";
import "./Kit.css";
export const sounds = [
  {
    key: "Q",
    keycode: 81,
    id: "tom-tom-1",
    class: "tom1",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  },
  {
    key: "W",
    keycode: 87,
    id: "side-base",
    class: "side-base",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    key: "E",
    keycode: 69,
    id: "tom-tom-2",
    class: "tom2",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    key: "A",
    keycode: 65,
    id: "close-hi-hat",
    class: "cym1",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    key: "S",
    keycode: 83,
    id: "cymbal-1",
    class: "cym2",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    key: "D",
    keycode: 68,
    id: "close-hi-hat-2",
    class: "cym1",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  },
  {
    key: "Z",
    keycode: 90,
    id: "kick",
    class: "base",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    key: "X",
    keycode: 88,
    id: "kick-hi-hat",
    class: "base cym1",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    key: "C",
    keycode: 67,
    id: "cymbal-2",
    class: "cym2",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  }
];
class Kit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.myRef = React.createRef();
  }
  static clear;
  componentWillReceiveProps(nextProps) {
    this.playSound(nextProps.keyPress.toUpperCase());
  }
  playSound(code) {
    [...this.myRef.current.children].forEach(pad => {
      let audio = pad.children[0];
      if (audio && audio.id === code) {
        // console.log(pad.focus())
        clearTimeout(Kit.clear);
        pad.focus();
        Kit.clear = setTimeout(() => pad.blur(), 250);
        this.setState({
          name: pad.id
        });
        audio.currentTime = 0;
        audio.play();
      }
    });
  }
  clickHandler = e => {
    this.props.clickSoundHandler({ key: e.target.children[0].id });
    this.playSound(e.target.children[0].id);
  };
  render() {
    let drumPads = sounds.map((pad, i) => (
      <div key={i} id={pad.id} className="drum-pad" onClick={this.clickHandler} tabIndex = '0'>
        <audio className="clip" id={pad.key} src={pad.sound} />
        {pad.key}
      </div>
    ));
    return (
      <div id="drum-machine" >
      <div className = "drum-wrapper" ref={this.myRef}>
      {drumPads}
      </div>
        <Display audioRef = {this.myRef} name={this.state.name} />
       
      </div>
    );
  }
}

export default Kit;
