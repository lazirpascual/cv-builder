import React from "react";

// Material-UI import
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

const MainInfo = () => {
  return (
    <Grid container direction="column" justify="center">
      <TextField
        label="Full Name"
        variant="outlined"
        color="secondary"
        size="medium"
        multiline
        rows={2}
        margin="dense"
        required
      ></TextField>
      <TextField
        label="small bio about yourself"
        variant="outlined"
        color="secondary"
        multiline
        rows={5}
        margin="dense"
        required
      ></TextField>
    </Grid>
  );
};

export default MainInfo;
