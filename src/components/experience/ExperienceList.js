import React, { useContext } from "react";
import { ExperienceContext } from "../../contexts/ExperienceContext";

// Material-UI import
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import UpdateIcon from "@material-ui/icons/Update";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const ExperienceList = ({ form, toggleEdit }) => {
  const { deleteForm } = useContext(ExperienceContext);

  return (
    <Card variant="Media">
      <CardContent>
        <Typography>{form.company}</Typography>
        <Typography>{form.position}</Typography>
        <Grid container justify="flex-end">
          <IconButton>
            <UpdateIcon onClick={() => toggleEdit(form.id)} />
          </IconButton>
          <IconButton onClick={() => deleteForm(form.id)}>
            <DeleteOutlined />
          </IconButton>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExperienceList;
