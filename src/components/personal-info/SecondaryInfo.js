import React, { useContext } from "react";

// Material-UI import
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core";
import { PersonalInfoContext } from "../../contexts/PersonalInfoContext";

const useStyles = makeStyles({
  icon: {
    marginTop: 15,
    marginRight: 10,
  },
});

const SecondaryInfo = ({
  address,
  phone,
  email,
  linkedIn,
  setAddress,
  setPhone,
  setEmail,
  setLinkedIn,
}) => {
  const classes = useStyles();
  const { personalInfo } = useContext(PersonalInfoContext);

  return (
    <Grid container direction="column">
      <Grid item>
        <LocationOnIcon className={classes.icon} />
        <TextField
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
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
