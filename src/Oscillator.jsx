import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";

class Oscillator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ampval: this.props.comp.GetAmp(),
      freqval: this.props.comp.GetFreq(),
      phaseval: this.props.comp.GetPhase(),
      waveval: this.props.comp.GetWave()
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
        <Grid container item spacing={2} alignItems="center">
          <Grid item xs align="center">
            <RadioGroup
              row
              value={this.props.comp.GetWave().toString()}
              onChange={event => {
                this.props.comp.SetWave(Number(event.target.value));
                this.setState({ waveval: event.target.value });
              }}
            >
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Sine"
                value="0"
                labelPlacement="end"
              />
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Square"
                value="1"
                labelPlacement="end"
              />
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Triangle"
                value="2"
                labelPlacement="end"
              />
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Sawtooth "
                value="3"
                labelPlacement="end"
              />
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Noise"
                value="4"
                labelPlacement="end"
              />
            </RadioGroup>
          </Grid>
        </Grid>
        <Grid container item spacing={2} xs={12}>
          <Grid item xs={8}>
            <Typography variant="h6">Amplitude:</Typography>
          </Grid>
          <Grid item xs={4}>
            <Input
              style={{ width: 56 }}
              value={this.props.comp.GetAmp()}
              margin="dense"
              onChange={event => {
                this.props.comp.SetAmp(
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
              value={this.props.comp.GetAmp()}
              onChange={(event, newValue) => {
                this.props.comp.SetAmp(newValue);
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
              value={this.props.comp.GetFreq()}
              margin="dense"
              onChange={event => {
                this.props.comp.SetFreq(
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
              value={this.props.comp.GetFreq()}
              onChange={(event, newValue) => {
                this.props.comp.SetFreq(newValue);
                this.setState({ freqval: newValue });
              }}
              aria-labelledby="input-slider"
            />
          </Grid>
        </Grid>
        <Grid container item spacing={2} xs={12} alignItems="center">
          <Grid item xs={8} align="center">
            <Typography variant="h6" align="center">
              Phase:
            </Typography>
          </Grid>
          <Grid item xs={4} align="center">
            <Input
              style={{ width: 56 }}
              value={this.props.comp.GetPhase()}
              margin="dense"
              onChange={event => {
                this.props.comp.SetPhase(
                  event.target.value === "" ? "" : Number(event.target.value)
                );
                this.setState({
                  phaseval:
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
              min={0}
              max={1}
              step={0.001}
              value={this.props.comp.GetPhase()}
              onChange={(event, newValue) => {
                this.props.comp.SetPhase(newValue);
                this.setState({ phaseval: newValue });
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
