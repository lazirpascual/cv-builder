import React, { useContext, useState } from "react";
import SkillsCard from "./SkillsCard";
import { SkillsContext } from "../../contexts/SkillsContext";
import { BuildContext } from "../../contexts/BuildContext";

// Material-UI import
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { TextField } from "@material-ui/core";

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
  button: {
    marginTop: 12,
    marginLeft: 20,
  },
  items: {
    marginTop: 10,
    marginBottom: 20,
  },
});

const SkillsSection = () => {
  const classes = useStyles();
  const [skill, setSkill] = useState("");
  const { addForm } = useContext(SkillsContext);
  const { build } = useContext(BuildContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addForm(skill);
    setSkill("");
  };

  return (
    <Container>
      <Grid className={classes.position} container alignItems="center">
        <BuildIcon fontSize="large" className={classes.work}></BuildIcon>
        <Typography align="left" variant="h4">
          Skills
        </Typography>
      </Grid>
      <Divider variant="fullWidth" />
      <Grid container direction="row" alignItems="center">
        {build ? (
          <form onSubmit={handleSubmit}>
            <TextField
              className={classes.items}
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              label="Skills"
              type="text"
              variant="outlined"
              color="secondary"
              multiline
              required
              margin="dense"
            ></TextField>
            <Button
              className={classes.button}
              type="submit"
              color="secondary"
              variant="contained"
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          </form>
        ) : null}
      </Grid>
      <SkillsCard />
      <Divider
        style={{ background: "black" }}
        className={classes.divider}
        variant="fullWidth"
      />
    </Container>
  );
};

export default SkillsSection;
