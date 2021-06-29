import React, { useContext } from "react";
import { ExperienceContext } from "../../contexts/ExperienceContext";
import ExperienceForm from "./ExperienceForm";

// Material-UI import

const ExperienceCard = () => {
  const { forms } = useContext(ExperienceContext);

  return (
    <div>
      {forms.map((form) => (
        <ExperienceForm form={form} key={form.id} />
      ))}
    </div>
  );
};

export default ExperienceCard;
