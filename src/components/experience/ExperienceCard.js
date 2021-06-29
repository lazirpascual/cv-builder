import React, { useContext } from "react";
import { ExpFormContext } from "../../contexts/ExpFormContext";
import ExperienceForm from "./ExperienceForm";

// Material-UI import

const ExperienceCard = () => {
  const { forms } = useContext(ExpFormContext);

  return (
    <div>
      {forms.map((form) => {
        return <ExperienceForm form={form} key={form.id} />;
      })}
    </div>
  );
};

export default ExperienceCard;
