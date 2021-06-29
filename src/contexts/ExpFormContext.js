import React, { useState, createContext } from "react";
import uuid from "uuid/dist/v1";

export const ExpFormContext = createContext();

const ExpFormContextProvider = (props) => {
  const [forms, setForm] = useState([]);

  function addForm() {
    setForm([...forms, { id: uuid() }]);
  }

  function deleteForm(key) {
    const filteredForm = forms.filter((form) => form.id !== key);
    setForm(filteredForm);
  }

  return (
    <ExpFormContext.Provider value={{ forms, addForm, deleteForm }}>
      {props.children}
    </ExpFormContext.Provider>
  );
};

export default ExpFormContextProvider;
