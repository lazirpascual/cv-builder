import React, { useState, createContext, useEffect, useContext } from "react";
import { TemplateContext } from "./TemplateContext";

export const PersonalInfoContext = createContext();

const PersonalInfoContextProvider = (props) => {
  const [personalInfo, setPersonalInfo] = useState({});
  const { template } = useContext(TemplateContext);

  useEffect(() => {
    if (template) {
      saveInput(
        "Lazir Pascual",
        `Results-focused leader specializing in driving operations growth, building solid teams, creating strategic initiatives, providing world-class customer services, and cultivating a strong company image eager to offer 12 years experience toward maximizing a top employer’s success.`,
        "346 King Street, Toronto, ON",
        "1-866-453-2352",
        "cv-builders@hotmail.com",
        "cvbuilder"
      );
    } else {
      setPersonalInfo({});
    }
  }, [template]);

  const saveInput = (name, biography, address, phone, email, linkedIn) => {
    setPersonalInfo({
      name,
      biography,
      address,
      phone,
      email,
      linkedIn,
    });
  };

  return (
    <PersonalInfoContext.Provider
      value={{ personalInfo, saveInput, setPersonalInfo }}
    >
      {props.children}
    </PersonalInfoContext.Provider>
  );
};

export default PersonalInfoContextProvider;
