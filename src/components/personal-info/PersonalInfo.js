import { Grid, Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import MainInfo from "./MainInfo";
import SecondaryInfo from "./SecondaryInfo";
import { BuildContext } from "../../contexts/BuildContext";

// Material-UI import
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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
  switch: {
    marginTop: 20,
    marginLeft: 11,
  },
}));

const PersonalInfo = () => {
  const classes = useStyles();
  const { toggleBuild } = useContext(BuildContext);

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
        <Grid item xs="auto" md="auto" lg="auto">
          <FormControlLabel
            className={classes.switch}
            onChange={toggleBuild}
            control={<Switch />}
            label="Preview"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PersonalInfo;
