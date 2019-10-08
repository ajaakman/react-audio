import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Slider from "@material-ui/core/Slider";
import shortid from "shortid";

class MasterMixer extends Component {
  constructor(props) {
    super(props);
    this.state = { ampval: this.props.audio.GetAmp() };
    this.id = shortid.generate();
  }

  render() {
    let style = null;
    if (this.props.selecting)
      style = { backgroundColor: "#303F9F", borderRadius: "7px" };

    return (
      <div
        onClick={() => {
          this.props.selecting &&
            this.props.selectOut(
              this.props.selecting,
              this.props.audio,
              this.id
            );
        }}
        className={"masterMixer " + this.id}
      >
        <Grid container spacing={2} style={style}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider
              className="centered"
              min={0.0}
              max={1.0}
              step={0.001}
              value={this.props.audio.GetAmp()}
              onChange={(event, newValue) => {
                if (!this.props.selecting) {
                  this.props.audio.SetAmp(newValue);
                  this.setState({ ampval: newValue });
                }
              }}
            />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MasterMixer;
