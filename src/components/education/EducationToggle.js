import React, { useState } from "react";
import EducationList from "./EducationList";
import EducationForm from "./EducationForm";

const EducationToggle = ({ form }) => {
  const [edit, setEdit] = useState(true);

  const toggleEdit = () => {
    return edit ? setEdit(false) : setEdit(true);
  };

  return edit ? (
    <EducationForm form={form} toggleEdit={toggleEdit} />
  ) : (
    <EducationList form={form} toggleEdit={toggleEdit} />
  );
};

export default EducationToggle;
