import React, { useState, useEffect, createContext, useContext } from "react";
import uuid from "uuid/dist/v1";
import { TemplateContext } from "./TemplateContext";

export const SkillsContext = createContext();

const SkillsContextProvider = (props) => {
  const [skillsForms, setSkillsForm] = useState([]);
  const { template } = useContext(TemplateContext);

  useEffect(() => {
    if (template) {
      setSkillsForm([
        {
          skill: "Programming",
          id: uuid(),
        },
        {
          skill: "C",
          id: uuid(),
        },
        {
          skill: "C++",
          id: uuid(),
        },
        {
          skill: "React JS",
          id: uuid(),
        },
        {
          skill: "Material UI",
          id: uuid(),
        },
        {
          skill: "Javascript",
          id: uuid(),
        },
        {
          skill: "CSS",
          id: uuid(),
        },
        {
          skill: "HTML",
          id: uuid(),
        },
        {
          skill: "DOM Manipulation",
          id: uuid(),
        },
      ]);
    } else {
      setSkillsForm([]);
    }
  }, [template]);

  const addForm = (skill) => {
    setSkillsForm([
      ...skillsForms,
      {
        skill: skill,
        id: uuid(),
      },
    ]);
  };

  const deleteForm = (key) => {
    const filteredForm = skillsForms.filter((form) => form.id !== key);
    setSkillsForm(filteredForm);
  };

  return (
    <SkillsContext.Provider value={{ skillsForms, addForm, deleteForm }}>
      {props.children}
    </SkillsContext.Provider>
  );
};

export default SkillsContextProvider;
