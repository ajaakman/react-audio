import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import shortid from "shortid";
import Typography from "@material-ui/core/Typography";
import { AudioComps } from "./AudioComps.js";

const Selector = props => {
  return (
    <div className="lsidebar">
      <Grid container spacing={3} className="sidebar">
        <Grid item xs>
          <Typography variant="h4" align="center">
            Create:
          </Typography>
        </Grid>
        {AudioComps.map(comp => {
          return (
            <Grid item xs align="center" key={shortid.generate()}>
              <Button
                color="default"
                variant="contained"
                fullWidth={true}
                disableRipple={true}
                onClick={() => props.createComp(comp)}
              >
                {comp}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Selector;
