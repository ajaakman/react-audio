import React from "react";
import Grid from "@material-ui/core/Grid";
import { GetComponent } from "./AudioComps.js";
import Typography from "@material-ui/core/Typography";

const Controls = props => {
  return (
    <div className="rsidebar">
      <Grid container spacing={3} className="sidebar" align="center">
        <Grid item xs align="center">
          <Typography variant="h4" align="center">
            Controls:
          </Typography>
        </Grid>
        <Grid item xs align="center">
          {GetComponent(
            props.type,
            props.comp,
            props.deleteComp,
            props.setOut,
            props.selecting
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Controls;
