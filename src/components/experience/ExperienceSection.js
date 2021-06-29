import React, { useContext } from "react";
import ExperienceCard from "./ExperienceCard";
import { ExperienceContext } from "../../contexts/ExperienceContext";

// Material-UI import
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Container } from "@material-ui/core";

const ExperienceSection = () => {
  const { addForm } = useContext(ExperienceContext);

  return (
    <Container>
      <Typography align="left" variant="h6">
        Experience
      </Typography>
      <ExperienceCard />
      <Button
        type="submit"
        onClick={() => addForm()}
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
