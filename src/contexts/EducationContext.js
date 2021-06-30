import React, { useState, createContext } from "react";
import uuid from "uuid/dist/v1";

export const EducationContext = createContext();

const EducationContextProvider = (props) => {
  const [eduForms, setEduForm] = useState([]);

  const addForm = () => {
    setEduForm([
      ...eduForms,
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        id: uuid(),
      },
    ]);
  };

  const deleteForm = (key) => {
    const filteredForm = eduForms.filter((form) => form.id !== key);
    setEduForm(filteredForm);
  };

  const saveForm = (school, degree, startDate, endDate, key) => {
    const savedForms = eduForms;
    savedForms.forEach((form) => {
      if (form.id === key) {
        form.school = school;
        form.degree = degree;
        form.startDate = startDate;
        form.endDate = endDate;
      }
    });
    setEduForm(savedForms);
  };

  return (
    <EducationContext.Provider
      value={{ eduForms, addForm, deleteForm, saveForm }}
    >
      {props.children}
    </EducationContext.Provider>
  );
};

export default EducationContextProvider;
