import React from "react";

// Material-UI import
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

const MainInfo = ({ name, biography, setName, setBiography }) => {
  return (
    <Grid container direction="column" justify="center">
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Full Name"
        variant="filled"
        color="secondary"
        size="small"
        multiline
        rows={2}
        required
      ></TextField>
      <TextField
        value={biography}
        onChange={(e) => setBiography(e.target.value)}
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
