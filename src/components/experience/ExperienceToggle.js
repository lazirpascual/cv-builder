import React, { useState } from "react";
import ExperienceList from "./ExperienceList";
import ExperienceForm from "./ExperienceForm";

const ExperienceToggle = ({ form }) => {
  const [edit, setEdit] = useState(true);

  const toggleEdit = () => {
    return edit ? setEdit(false) : setEdit(true);
  };

  return edit ? (
    <ExperienceForm form={form} toggleEdit={toggleEdit} />
  ) : (
    <ExperienceList form={form} toggleEdit={toggleEdit} />
  );
};

export default ExperienceToggle;
