import React, { useContext } from "react";
import ExperienceCard from "./ExperienceCard";
import { ExperienceContext } from "../../contexts/ExperienceContext";

// Material-UI import
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
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

const ExperienceSection = () => {
  const classes = useStyles();
  const { addForm } = useContext(ExperienceContext);

  return (
    <Container>
      <Divider style={{ background: "black" }} variant="fullWidth" />
      <Grid className={classes.position} container alignItems="center">
        <WorkIcon className={classes.work}></WorkIcon>
        <Typography align="left" variant="h4">
          Experience
        </Typography>
      </Grid>
      <ExperienceCard />
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
      <Divider
        style={{ background: "black" }}
        className={classes.divider}
        variant="fullWidth"
      />
    </Container>
  );
};

export default ExperienceSection;
