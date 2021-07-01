import React, { useState, createContext } from "react";

export const TemplateContext = createContext();

const TemplateContextProvider = (props) => {
  const [template, setTemplate] = useState(false);

  const toggleTemplate = () => {
    return !template ? setTemplate(true) : setTemplate(false);
  };

  return (
    <TemplateContext.Provider value={{ template, toggleTemplate }}>
      {props.children}
    </TemplateContext.Provider>
  );
};

export default TemplateContextProvider;
