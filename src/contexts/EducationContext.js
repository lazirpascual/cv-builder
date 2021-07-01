import React, { useState, useEffect, createContext, useContext } from "react";
import uuid from "uuid/dist/v1";
import { TemplateContext } from "./TemplateContext";

export const EducationContext = createContext();

const EducationContextProvider = (props) => {
  const [eduForms, setEduForm] = useState([]);
  const { template } = useContext(TemplateContext);

  useEffect(() => {
    if (template) {
      setEduForm([
        {
          school: "Conestoga College",
          degree: "Sofware Engineering Technology",
          startDate: "2020-09-07",
          endDate: "2022-05-30",
          id: uuid(),
        },
        {
          school: "Waterloo Collegiate Institute",
          degree: "Highscool Diploma",
          startDate: "2014-09-07",
          endDate: "2017-06-02",
          id: uuid(),
        },
      ]);
    } else {
      setEduForm([]);
    }
  }, [template]);

  const addForm = () => {
    setEduForm([
      ...eduForms,
      {
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
