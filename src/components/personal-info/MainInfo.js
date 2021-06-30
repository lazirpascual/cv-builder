import React from "react";

// Material-UI import
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

const MainInfo = () => {
  return (
    <Grid container direction="column" justify="center">
      <TextField
        label="Full Name"
        variant="filled"
        color="secondary"
        size="small"
        multiline
        rows={2}
        required
      ></TextField>
      <TextField
        label="Biography"
        variant="filled"
        color="secondary"
        multiline
        rows={4}
        margin="dense"
        required
      ></TextField>
    </Grid>
  );
};

export default MainInfo;
