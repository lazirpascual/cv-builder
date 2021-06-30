import React, { useContext } from "react";
import EducationCard from "./EducationCard";
import { EducationContext } from "../../contexts/EducationContext";
import { BuildContext } from "../../contexts/BuildContext";

// Material-UI import
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  position: {
    marginTop: 15,
  },
  work: {
    marginRight: 10,
  },
  divider: {
    marginTop: 20,
  },
});

const EducationSection = () => {
  const classes = useStyles();
  const { addForm } = useContext(EducationContext);
  const { build } = useContext(BuildContext);

  return (
    <Container>
      <Grid className={classes.position} container alignItems="center">
        <SchoolIcon fontSize="large" className={classes.work}></SchoolIcon>
        <Typography align="left" variant="h4">
          Education
        </Typography>
      </Grid>
      <Divider variant="fullWidth" />
      <EducationCard />
      {build ? (
        <Button
          className={classes.position}
          type="submit"
          onClick={() => addForm()}
          color="secondary"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add More
        </Button>
      ) : null}

      <Divider
        style={{ background: "black" }}
        className={classes.divider}
        variant="fullWidth"
      />
    </Container>
  );
};

export default EducationSection;
