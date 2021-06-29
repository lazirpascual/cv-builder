import React from "react";

// Material-UI import
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Container } from "@material-ui/core";

const ExperienceSection = () => {
  return (
    <Container>
      <Typography align="left">Experience</Typography>
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        startIcon={<AddIcon />}
      >
        Add More
      </Button>
    </Container>
  );
};

export default ExperienceSection;
