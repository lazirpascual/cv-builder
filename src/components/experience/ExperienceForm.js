import React, { useContext, useState } from "react";
import { ExpFormContext } from "../../contexts/ExpFormContext";

// Material-UI import
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import SaveIcon from "@material-ui/icons/Save";
import { Grid } from "@material-ui/core";
import ExperienceList from "./ExperienceList";

const ExperienceForm = ({ form }) => {
  const { deleteForm } = useContext(ExpFormContext);
  const [edit, setEdit] = useState(true);
  const toggleEdit = () => {
    return edit ? setEdit(false) : setEdit(true);
  };

  return edit ? (
    <Card variant="Media">
      <CardContent>
        <form>
          <TextField
            label="Company"
            type="text"
            variant="outlined"
            color="secondary"
            required
          ></TextField>

          <Grid container justify="flex-end">
            <IconButton>
              <SaveIcon onClick={() => toggleEdit(form.id)} />
            </IconButton>

            <IconButton onClick={() => deleteForm(form.id)}>
              <DeleteOutlined />
            </IconButton>
          </Grid>
        </form>
      </CardContent>
    </Card>
  ) : (
    <ExperienceList form={form} toggleEdit={toggleEdit} />
  );
};

export default ExperienceForm;
