import React from "react";
import Oscillator from "./Oscillator.jsx";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Controls = props => {
  let type = null;
  switch (props.type) {
    case "Oscillator":
      type = (
        <Grid item xs align="center">
          <Oscillator
            comp={props.comp}
            deleteComp={props.deleteComp}
            setOut={props.setOut}
            selecting={props.selecting}
          />
        </Grid>
      );
      break;
    default:
      type = null;
  }

  return (
    <div className="rsidebar">
      <Grid container spacing={3} className="sidebar" align="center">
        <Grid item xs align="center">
          <Typography variant="h4" align="center">
            Controls:
          </Typography>
        </Grid>
        {type}
      </Grid>
    </div>
  );
};

export default Controls;
