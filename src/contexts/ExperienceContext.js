import React, { useState, useEffect, createContext, useContext } from "react";
import uuid from "uuid/dist/v1";
import { TemplateContext } from "./TemplateContext";

export const ExperienceContext = createContext();

const ExperienceContextProvider = (props) => {
  const [forms, setForm] = useState([]);
  const { template } = useContext(TemplateContext);

  useEffect(() => {
    if (template) {
      setForm([
        {
          company: "Google",
          position: "Software Engineer",
          description: `Accomplishes engineering and organization mission by completing related results as needed.
          Develops software solutions by studying information needs; conferring with users; studying systems flow, data usage, and work processes; investigating problem areas; following the software development lifecycle.`,
          startDate: "2020-08-07",
          endDate: "2021-06-30",
          id: uuid(),
        },
        {
          company: "Conestoga College",
          position: "Head of Marketing",
          description:
            "Responsibilities include building the marketing organisation and managing the brand image and marketing for seven countries. Additional duties: negotiation and procurement of radio advertising, project management of the new front-end platform, cost analysis.",
          startDate: "2019-07-07",
          endDate: "2020-06-11",
          id: uuid(),
        },
        {
          company: "Ultra Manufacturing",
          position: "General Manager",
          description:
            "Tasked with the reorganisation and restructuring of the head office; this included increasing productivity, budgeting, contract negotiation as well as staff management and recruitment.",
          startDate: "2016-08-07",
          endDate: "2019-09-11",
          id: uuid(),
        },
      ]);
    } else {
      setForm([]);
    }
  }, [template]);

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
