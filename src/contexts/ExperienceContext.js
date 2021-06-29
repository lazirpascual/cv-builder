import React, { createContext, useReducer } from "react";
import { experienceReducer } from "../reducers/ExperienceReducer";

export const ExperienceContext = createContext();

const ExperienceContextProvider = (props) => {
  const [experiences, dispatch] = useReducer(experienceReducer, []);

  return (
    <ExperienceContext.Provider value={{ experiences, dispatch }}>
      {props.children}
    </ExperienceContext.Provider>
  );
};

export default ExperienceContextProvider;
