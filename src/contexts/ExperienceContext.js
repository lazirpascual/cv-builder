import React, { useState, useEffect, createContext } from "react";
import uuid from "uuid/dist/v1";

export const ExperienceContext = createContext();

const ExperienceContextProvider = (props) => {
  const [forms, setForm] = useState([]);

  useEffect(() => {
    setForm(JSON.parse(localStorage.getItem("forms")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("forms", JSON.stringify(forms));
  }, [forms]);

  const addForm = () => {
    setForm([
      ...forms,
      {
        id: uuid(),
      },
    ]);
  };

  const deleteForm = (key) => {
    const filteredForm = forms.filter((form) => form.id !== key);
    setForm(filteredForm);
  };

  const saveForm = (
    company,
    position,
    description,
    startDate,
    endDate,
    key
  ) => {
    const savedForms = forms;
    savedForms.forEach((form) => {
      if (form.id === key) {
        form.company = company;
        form.position = position;
        form.description = description;
        form.startDate = startDate;
        form.endDate = endDate;
      }
    });
    setForm(savedForms);
  };

  return (
    <ExperienceContext.Provider
      value={{ forms, addForm, deleteForm, saveForm }}
    >
      {props.children}
    </ExperienceContext.Provider>
  );
};

export default ExperienceContextProvider;
