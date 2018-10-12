import React, { Component } from "react";
const sounds = [
  {
    key: "Q",
    keycode: 81,
    id: "snare",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  },
  {
    key: "W",
    keycode: 87,
    id: "sideDrum",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    key: "E",
    keycode: 69,
    id: "punchyKick",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    key: "A",
    keycode: 65,
    id: "closeHH",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    key: "S",
    keycode: 83,
    id: "openHH",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    key: "D",
    keycode: 68,
    id: "closeHH2",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  },
  {
    key: "Z",
    keycode: 90,
    id: "kick",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    key: "X",
    keycode: 88,
    id: "kickAndHH",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    key: "C",
    keycode: 67,
    id: "openHH2",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  }
];
class Kit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myRef = React.createRef();

  }
  componentWillReceiveProps(props){
      this.playSound(props.keyPress.toUpperCase());
  }
  playSound(code){
      [...this.myRef.current.children].forEach(pad => pad.id == code ? pad.children[0].play() : null)
  }
  clickHandler = (e) => {
      this.playSound(e.target.id)
  }
  render() {
    let x = sounds.map((pad, i) => (
      <div key={i} id={pad.key} className="drum-pad" onClick = {this.clickHandler}>
        <audio className="clip" id={pad.id} src={pad.sound} />
        {pad.key}
      </div>
    ));
    return <div ref={this.myRef}>{x}</div>;
  }
}

export default Kit;
