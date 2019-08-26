import React from "react";
import Typography from "@material-ui/core/Typography";

const Error = props => {
  return (
    <Typography
      variant="h4"
      style={{
        position: "absolute",
        width: "100%",
        textAlign: "center",
        bottom: "50%"
      }}
    >
      {props.element} failed to initialize with error code: {props.code}
    </Typography>
  );
};

export default Error;
