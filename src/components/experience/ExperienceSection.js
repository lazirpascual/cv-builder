import React, { useContext } from "react";
import ExperienceCard from "./ExperienceCard";
import { ExperienceContext } from "../../contexts/ExperienceContext";
import { BuildContext } from "../../contexts/BuildContext";

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
  const { build } = useContext(BuildContext);

  return (
    <Container>
      <Divider style={{ background: "black" }} variant="fullWidth" />
      <Grid className={classes.position} container alignItems="center">
        <WorkIcon fontSize="large" className={classes.work}></WorkIcon>
        <Typography align="left" variant="h4">
          Work Experience
        </Typography>
      </Grid>
      <Divider variant="fullWidth" />
      <ExperienceCard />
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

export default ExperienceSection;
