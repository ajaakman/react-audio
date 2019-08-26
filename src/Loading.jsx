import React from "react";
import Typography from "@material-ui/core/Typography";

const Loading = () => {
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
      Loading...
    </Typography>
  );
};

export default Loading;
