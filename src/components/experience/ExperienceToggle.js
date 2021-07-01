import React, { useState, useContext, useEffect } from "react";
import ExperienceList from "./ExperienceList";
import ExperienceForm from "./ExperienceForm";
import { BuildContext } from "../../contexts/BuildContext";

const ExperienceToggle = ({ form }) => {
  const [edit, setEdit] = useState(true);
  const { build } = useContext(BuildContext);

  useEffect(() => {
    return !build ? setEdit(false) : null;
  }, [build]);

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
