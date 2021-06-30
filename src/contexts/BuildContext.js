import React, { useState, createContext } from "react";

export const BuildContext = createContext();

const BuildContextProvider = (props) => {
  const [build, setBuild] = useState(true);

  const toggleBuild = () => {
    return build ? setBuild(false) : setBuild(true);
  };

  return (
    <BuildContext.Provider value={{ build, toggleBuild }}>
      {props.children}
    </BuildContext.Provider>
  );
};

export default BuildContextProvider;
