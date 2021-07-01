import React, { useContext, useState } from "react";
import { ExperienceContext } from "../../contexts/ExperienceContext";

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
    marginTop: 20,
  },
  date: {
    marginLeft: 30,
    marginTop: 15,
  },
});

const ExperienceForm = ({ form, toggleEdit }) => {
  const classes = useStyles();
  const { saveForm, deleteForm } = useContext(ExperienceContext);
  const [company, setCompany] = useState(form.company);
  const [position, setPosition] = useState(form.position);
  const [description, setDescription] = useState(form.description);
  const [startDate, setStartDate] = useState(form.startDate);
  const [endDate, setEndDate] = useState(form.endDate);

  const handleSave = (e) => {
    e.preventDefault();
    saveForm(company, position, description, startDate, endDate, form.id);
    toggleEdit(form.id);
  };

  return (
    <Card className={classes.company} variant="Media">
      <CardContent>
        <Grid container direction="column">
          <TextField
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            label="Company"
            type="text"
            variant="outlined"
            color="secondary"
            size="small"
            required
            margin="dense"
          ></TextField>
          <TextField
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            label="Position"
            type="text"
            variant="outlined"
            color="secondary"
            size="small"
            required
            margin="dense"
          ></TextField>
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            type="text"
            variant="outlined"
            color="secondary"
            size="small"
            margin="dense"
            multiline
            rows={3}
            required
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

export default ExperienceForm;
