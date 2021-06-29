import React from "react";

// Material-UI import
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

const SecondaryInfo = () => {
  return (
    <Grid container direction="column">
      <TextField
        label="Address"
        variant="outlined"
        color="secondary"
        size="small"
        margin="dense"
        required
      ></TextField>
      <TextField
        label="Phone Number"
        variant="outlined"
        color="secondary"
        size="small"
        margin="dense"
        required
      ></TextField>
      <TextField
        label="Email"
        variant="outlined"
        color="secondary"
        size="small"
        margin="dense"
        required
      ></TextField>
      <TextField
        label="LinkedIn"
        variant="outlined"
        color="secondary"
        size="small"
        margin="dense"
      ></TextField>
    </Grid>
  );
};

export default SecondaryInfo;
