import React, { useContext } from "react";
import { PersonalInfoContext } from "../../contexts/PersonalInfoContext";

// Material-UI import
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  field: {
    padding: 20,
  },
  spacing: {
    marginLeft: 100,
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    marginTop: 20,
    marginRight: 10,
  },
  switch: {
    marginTop: 20,
    marginLeft: 11,
    marginBottom: 20,
  },
  icon: {
    margin: 20,
  },
}));

const PersonalInfoList = () => {
  const classes = useStyles();
  const { personalInfo } = useContext(PersonalInfoContext);

  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={6} md={6} lg={6} className={classes.field}>
        <Typography className={classes.switch} variant="h4">
          {personalInfo.name}
        </Typography>
        <Typography className={classes.switch} variant="body1">
          {personalInfo.biography}
        </Typography>
      </Grid>
      <Grid item xs={6} md={6} lg={6} className={classes.field}>
        <Grid container className={classes.icon}>
          <LocationOnIcon className={classes.spacing} />
          <Typography>{personalInfo.address}</Typography>
        </Grid>
        <Grid container className={classes.icon}>
          <CallIcon className={classes.spacing} />
          <Typography>{personalInfo.phone}</Typography>
        </Grid>
        <Grid container className={classes.icon}>
          <EmailIcon className={classes.spacing} />
          <Typography>{personalInfo.email}</Typography>
        </Grid>
        <Grid container className={classes.icon}>
          <LinkedInIcon className={classes.spacing} />
          <Typography>{personalInfo.linkedIn}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PersonalInfoList;
