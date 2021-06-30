import React, { useContext } from "react";
import { SkillsContext } from "../../contexts/SkillsContext";
import SkillsForm from "./SkillsForm";

// Material-UI import
import { Grid } from "@material-ui/core";

const SkillsCard = () => {
  const { skillsForms } = useContext(SkillsContext);

  return (
    <Grid container direction="row">
      {skillsForms.map((form) => (
        <SkillsForm form={form} key={form.id} />
      ))}
    </Grid>
  );
};

export default SkillsCard;
