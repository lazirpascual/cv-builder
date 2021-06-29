import React, { createContext, useState } from "react";
import uuid from "uuid/dist/v1";

export const ExperienceContext = createContext();

const ExperienceContextProvider = (props) => {
  const [experiences, setExperiences] = useState([]);

  const addExperience = () => {
    setExperiences([...experiences, { company: "", id: uuid() }]);
  };

  return (
    <ExperienceContext.Provider value={{ experiences }}>
      {props.children}
    </ExperienceContext.Provider>
  );
};

export default ExperienceContextProvider;
