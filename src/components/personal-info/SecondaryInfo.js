import React from "react";

// Material-UI import
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  icon: {
    marginTop: 15,
    marginRight: 10,
  },
});

const SecondaryInfo = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <LocationOnIcon className={classes.icon} />
        <TextField
          label="Address"
          variant="standard"
          color="secondary"
          size="small"
          required
        ></TextField>
      </Grid>
      <Grid item>
        <CallIcon className={classes.icon} />
        <TextField
          label="Phone Number"
          variant="standard"
          size="small"
          color="secondary"
          required
        ></TextField>
      </Grid>
      <Grid item>
        <EmailIcon className={classes.icon} />
        <TextField
          label="Email"
          variant="standard"
          color="secondary"
          size="small"
          required
        ></TextField>
      </Grid>
      <Grid item>
        <LinkedInIcon className={classes.icon} />
        <TextField
          label="LinkedIn"
          variant="standard"
          color="secondary"
          size="small"
        ></TextField>
      </Grid>
    </Grid>
  );
};

export default SecondaryInfo;
