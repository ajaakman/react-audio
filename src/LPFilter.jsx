import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import { LPSetCutoff, LPGetCutoff } from "./AudioAPI.ts";

class LPFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cutoffval: LPGetCutoff(this.props.comp)
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
            <Typography variant="h6">Cutoff:</Typography>
          </Grid>
          <Grid item xs={4}>
            <Input
              style={{ width: 64 }}
              value={LPGetCutoff(this.props.comp)}
              margin="dense"
              onChange={event => {
                LPSetCutoff(
                  this.props.comp,
                  event.target.value === "" ? "" : Number(event.target.value)
                );
                this.setState({
                  cutoffval:
                    event.target.value === "" ? "" : Number(event.target.value)
                });
              }}
              inputProps={{
                step: 1,
                min: 0,
                max: 20000,
                type: "number",
                "aria-labelledby": "input-slider"
              }}
            />
          </Grid>
        </Grid>
        <Grid container item spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              min={0}
              max={20000}
              step={1}
              value={LPGetCutoff(this.props.comp)}
              onChange={(event, newValue) => {
                LPSetCutoff(this.props.comp, newValue);
                this.setState({ cutoffval: newValue });
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

export default LPFilter;
