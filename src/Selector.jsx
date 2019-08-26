import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Selector = props => {
  return (
    <div className="lsidebar">
      <Grid container spacing={3} className="sidebar">
        <Grid item xs>
          <Typography variant="h4" align="center">
            Create:
          </Typography>
        </Grid>
        <Grid item xs align="center">
          <Button
            color="default"
            variant="contained"
            fullWidth={true}
            disableRipple={true}
            onClick={() => props.createComp("Oscillator")}
          >
            Oscillator
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Selector;
