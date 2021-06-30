import React, { useContext } from "react";
import { SkillsContext } from "../../contexts/SkillsContext";

// Material-UI import
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    marginTop: -20,
  },
});

const SkillsForm = ({ form }) => {
  const classes = useStyles();
  const { deleteForm } = useContext(SkillsContext);

  return (
    <Grid item xs={6} md={4} lg={3}>
      <li className={classes.list}>
        {form.skill}
        <IconButton color="secondary" onClick={() => deleteForm(form.id)}>
          <ClearIcon />
        </IconButton>
      </li>
    </Grid>
  );
};

export default SkillsForm;
