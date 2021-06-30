import React, { useContext } from "react";
import { ExperienceContext } from "../../contexts/ExperienceContext";
import ExperienceToggle from "./ExperienceToggle";

// Material-UI import

const ExperienceCard = () => {
  const { forms } = useContext(ExperienceContext);

  return (
    <div>
      {forms.map((form) => (
        <ExperienceToggle form={form} key={form.id} />
      ))}
    </div>
  );
};

export default ExperienceCard;
