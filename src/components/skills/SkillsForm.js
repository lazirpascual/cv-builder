import React, { useContext } from "react";
import { SkillsContext } from "../../contexts/SkillsContext";
import { BuildContext } from "../../contexts/BuildContext";

// Material-UI import
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    marginLeft: 20,
  },
});

const SkillsForm = ({ form }) => {
  const classes = useStyles();
  const { deleteForm } = useContext(SkillsContext);
  const { build } = useContext(BuildContext);

  return (
    <Grid item xs={6} md={4} lg={4}>
      <li className={classes.list}>
        {form.skill}
        {build ? (
          <IconButton color="primary" onClick={() => deleteForm(form.id)}>
            <ClearIcon />
          </IconButton>
        ) : null}
      </li>
    </Grid>
  );
};

export default SkillsForm;
