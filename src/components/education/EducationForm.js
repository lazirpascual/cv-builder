import React, { useContext, useEffect, useState } from "react";
import { EducationContext } from "../../contexts/EducationContext";

// Material-UI import
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import SaveIcon from "@material-ui/icons/Save";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  position: {
    marginLeft: 15,
  },
  company: {
    marginTop: 15,
  },
  date: {
    marginLeft: 30,
    marginTop: 15,
  },
});

const EducationForm = ({ form, toggleEdit }) => {
  const classes = useStyles();
  const { saveForm, deleteForm } = useContext(EducationContext);
  const [school, setSchool] = useState(form.school);
  const [degree, setDegree] = useState(form.degree);
  const [startDate, setStartDate] = useState(form.startDate);
  const [endDate, setEndDate] = useState(form.endDate);

  const handleSave = (e) => {
    e.preventDefault();
    saveForm(school, degree, startDate, endDate, form.id);
    toggleEdit(form.id);
  };

  return (
    <Card variant="Media">
      <CardContent>
        <Grid container direction="column">
          <TextField
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            label="School"
            type="text"
            variant="outlined"
            color="secondary"
            size="small"
            required
            margin="dense"
          ></TextField>
          <TextField
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            label="Degree"
            type="text"
            variant="outlined"
            color="secondary"
            size="small"
            required
            margin="dense"
          ></TextField>
        </Grid>
        <TextField
          className={classes.company}
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
          id="date"
          label="Start Date: "
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className={classes.date}
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
          id="date"
          label="End Date: "
          type="date"
          defaultValue="2021-06-29"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Grid container justify="flex-end">
          <IconButton>
            <SaveIcon onClick={handleSave} />
          </IconButton>
          <IconButton color="primary" onClick={() => deleteForm(form.id)}>
            <DeleteOutlined />
          </IconButton>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EducationForm;
