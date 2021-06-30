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

const useStyles = makeStyles({
  position: {
    marginTop: 15,
  },
  work: {
    marginRight: 10,
  },
});

const ExperienceSection = () => {
  const classes = useStyles();
  const { addForm } = useContext(ExperienceContext);

  return (
    <Container>
      <Grid container alignItems="center">
        <WorkIcon className={classes.work}></WorkIcon>
        <Typography align="left" variant="h6">
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
    </Container>
  );
};

export default ExperienceSection;
