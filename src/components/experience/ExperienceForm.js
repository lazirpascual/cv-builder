import React, { useContext } from "react";
import { ExpFormContext } from "../../contexts/ExpFormContext";

// Material-UI import
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import { Grid } from "@material-ui/core";

const ExperienceForm = ({ form }) => {
  const { deleteForm } = useContext(ExpFormContext);

  return (
    <Card variant="Media">
      <CardContent>
        <TextField
          label="Company"
          type="text"
          variant="outlined"
          color="secondary"
        ></TextField>
        <Grid container justify="flex-end">
          <IconButton onClick={() => deleteForm(form.id)}>
            <DeleteOutlined />
          </IconButton>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExperienceForm;
