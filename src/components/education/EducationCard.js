import React, { useContext } from "react";
import { EducationContext } from "../../contexts/EducationContext";
import EducationToggle from "./EducationToggle";

const EducationCard = () => {
  const { eduForms } = useContext(EducationContext);

  return (
    <div>
      {eduForms.map((form) => (
        <EducationToggle form={form} key={form.id} />
      ))}
    </div>
  );
};

export default EducationCard;
