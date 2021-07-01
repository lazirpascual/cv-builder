import React, { useState, createContext, useEffect } from "react";

export const PersonalInfoContext = createContext();

const PersonalInfoContextProvider = (props) => {
  const [personalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    setPersonalInfo(JSON.parse(localStorage.getItem("personalInfo")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
  }, [personalInfo]);

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
