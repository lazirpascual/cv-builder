import { Grid } from "@material-ui/core";
import React from "react";
import MainInfo from "./MainInfo";
import SecondaryInfo from "./SecondaryInfo";

// Material-UI import
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    padding: 10,
  },
  spacing: {
    marginBottom: 20,
  },
});

const PersonalInfo = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="row">
        <Grid item xs={6} md={6} lg={6} className={classes.field}>
          <MainInfo />
        </Grid>
        <Grid item xs={6} md={6} lg={6} className={classes.field}>
          <SecondaryInfo />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PersonalInfo;
