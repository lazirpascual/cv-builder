import React, { useState, createContext } from "react";
import uuid from "uuid/dist/v1";

export const ExpFormContext = createContext();

const ExpFormContextProvider = (props) => {
  const [forms, setForm] = useState([]);

  const addForm = () => {
    setForm([...forms, { company: "", id: uuid() }]);
  };

  const deleteForm = (key) => {
    const filteredForm = forms.filter((form) => form.id !== key);
    setForm(filteredForm);
  };

  const saveForm = (company, key) => {
    const savedForms = forms;
    savedForms.forEach((form) => {
      if (form.id === key) {
        form.company = company;
      }
    });
    setForm(savedForms);
  };

  return (
    <ExpFormContext.Provider value={{ forms, addForm, deleteForm, saveForm }}>
      {props.children}
    </ExpFormContext.Provider>
  );
};

export default ExpFormContextProvider;
