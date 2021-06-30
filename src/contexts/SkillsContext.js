import React, { useState, useEffect, createContext } from "react";
import uuid from "uuid/dist/v1";

export const SkillsContext = createContext();

const SkillsContextProvider = (props) => {
  const [skillsForms, setSkillsForm] = useState([]);

  useEffect(() => {
    setSkillsForm(JSON.parse(localStorage.getItem("skillsForms")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("skillsForms", JSON.stringify(skillsForms));
  }, [skillsForms]);

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
