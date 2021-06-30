import React, { useState, useContext, useEffect } from "react";
import EducationList from "./EducationList";
import EducationForm from "./EducationForm";
import { BuildContext } from "../../contexts/BuildContext";

const EducationToggle = ({ form }) => {
  const [edit, setEdit] = useState(true);
  const { build } = useContext(BuildContext);

  useEffect(() => {
    return build ? setEdit(true) : setEdit(false);
  }, [build]);

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
