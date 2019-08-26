import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import { OscSetAmp, OscGetAmp, OscSetFreq, OscGetFreq } from "./AudioAPI.ts";

class Oscillator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ampval: OscGetAmp(this.props.comp),
      freqval: OscGetFreq(this.props.comp)
    };
  }

  render() {
    let style = this.props.selecting
      ? { color: "primary", variant: "contained" }
      : { color: "default", variant: "contained" };

    return (
      <Grid container spacing={3} alignItems="center">
        <Grid container item spacing={2} alignItems="center">
          <Grid item xs align="center">
            <Button
              color={style.color}
              variant={style.variant}
              disableRipple={true}
              fullWidth={true}
              onClick={() => this.props.setOut(this.props.comp, this.props.id)}
            >
              {this.props.selecting ? "Cancel" : "Set Output"}
            </Button>
          </Grid>
        </Grid>
        <Grid container item spacing={2} xs={12}>
          <Grid item xs={8}>
            <Typography variant="h6">Amplitude:</Typography>
          </Grid>
          <Grid item xs={4}>
            <Input
              style={{ width: 56 }}
              value={OscGetAmp(this.props.comp)}
              margin="dense"
              onChange={event => {
                OscSetAmp(
                  this.props.comp,
                  event.target.value === "" ? "" : Number(event.target.value)
                );
                this.setState({
                  ampval:
                    event.target.value === "" ? "" : Number(event.target.value)
                });
              }}
              inputProps={{
                step: 0.01,
                min: 0.0,
                max: 1.0,
                type: "number",
                "aria-labelledby": "input-slider"
              }}
            />
          </Grid>
        </Grid>
        <Grid container item spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              min={0.0}
              max={1.0}
              step={0.001}
              value={OscGetAmp(this.props.comp)}
              onChange={(event, newValue) => {
                OscSetAmp(this.props.comp, newValue);
                this.setState({ ampval: newValue });
              }}
              aria-labelledby="input-slider"
            />
          </Grid>
        </Grid>
        <Grid container item spacing={2} xs={12} alignItems="center">
          <Grid item xs={8} align="center">
            <Typography variant="h6" align="center">
              Frequency:
            </Typography>
          </Grid>
          <Grid item xs={4} align="center">
            <Input
              style={{ width: 56 }}
              value={OscGetFreq(this.props.comp)}
              margin="dense"
              onChange={event => {
                OscSetFreq(
                  this.props.comp,
                  event.target.value === "" ? "" : Number(event.target.value)
                );
                this.setState({
                  freqval:
                    event.target.value === "" ? "" : Number(event.target.value)
                });
              }}
              inputProps={{
                step: 1,
                min: 220,
                max: 1760,
                type: "number",
                "aria-labelledby": "input-slider"
              }}
            />
          </Grid>
        </Grid>
        <Grid container item spacing={2} alignItems="center">
          <Grid item xs align="center">
            <Slider
              min={220}
              max={1760}
              step={1}
              value={OscGetFreq(this.props.comp)}
              onChange={(event, newValue) => {
                OscSetFreq(this.props.comp, newValue);
                this.setState({ freqval: newValue });
              }}
              aria-labelledby="input-slider"
            />
          </Grid>
        </Grid>
        <Grid container item spacing={2} alignItems="center">
          <Grid item xs align="center">
            <Button
              color="default"
              variant="contained"
              fullWidth={true}
              disableRipple={true}
              onClick={() => this.props.deleteComp()}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Oscillator;
