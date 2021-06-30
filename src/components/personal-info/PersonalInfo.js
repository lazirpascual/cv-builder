import { Grid, Avatar } from "@material-ui/core";
import React from "react";
import MainInfo from "./MainInfo";
import SecondaryInfo from "./SecondaryInfo";

// Material-UI import
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  field: {
    padding: 10,
  },
  spacing: {
    marginBottom: 20,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const PersonalInfo = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="row">
        <Grid item xs="auto" md="auto" lg="auto" className={classes.field}>
          <Avatar className={classes.large}>User</Avatar>
        </Grid>
        <Grid item xs={4} md={6} lg={6} className={classes.field}>
          <MainInfo />
        </Grid>
        <Grid item xs="auto" md="auto" lg="auto" className={classes.field}>
          <SecondaryInfo />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PersonalInfo;
