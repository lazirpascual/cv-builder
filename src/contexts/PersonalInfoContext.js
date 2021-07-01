import React, { useState, createContext } from "react";

export const PersonalInfoContext = createContext();

const PersonalInfoContextProvider = (props) => {
  const [personalInfo, setPersonalInfo] = useState({});

  const saveInput = (name, biography, address, phone, email, linkedIn) => {
    setPersonalInfo({
      name: name,
      biography: biography,
      address: address,
      phone: phone,
      email: email,
      linkedIn: linkedIn,
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
