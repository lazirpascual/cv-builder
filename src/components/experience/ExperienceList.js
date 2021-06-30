import React, { useContext } from "react";
import { ExperienceContext } from "../../contexts/ExperienceContext";

// Material-UI import
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/Edit";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  position: {
    paddingLeft: 15,
  },
  company: {
    paddingTop: 7,
  },
  date: {
    paddingLeft: 5,
  },
});

const ExperienceList = ({ form, toggleEdit }) => {
  const classes = useStyles();
  const { deleteForm } = useContext(ExperienceContext);

  return (
    <div>
      <Grid container alignItems="center">
        <Typography className={classes.company} variant="h6" gutterBottom>
          {form.company}
        </Typography>
        <Typography className={classes.position}>—</Typography>
        <Typography className={classes.position} variant="h6" color="secondary">
          {form.position}
        </Typography>
      </Grid>
      <Grid container>
        <Typography gutterBottom>{form.startDate}</Typography>
        <Typography className={classes.date}>-</Typography>
        <Typography className={classes.date} gutterBottom>
          {form.endDate}
        </Typography>
      </Grid>
      <Typography variant="subtitle1" color="textSecondary">
        {form.description}
      </Typography>
      <Grid container justify="flex-end">
        <IconButton>
          <EditIcon onClick={() => toggleEdit()} />
        </IconButton>
        <IconButton color="secondary" onClick={() => deleteForm(form.id)}>
          <DeleteOutlined />
        </IconButton>
      </Grid>
    </div>
  );
};

export default ExperienceList;
