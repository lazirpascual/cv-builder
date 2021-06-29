import React from "react";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import Header from "./components/Header";
import ExperienceSection from "./components/experience/ExperienceSection";
import ExpFormContextProvider from "./contexts/ExpFormContext";

// Material-UI import
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <Container>
      <Header />
      <PersonalInfo />
      <ExpFormContextProvider>
        <ExperienceSection />
      </ExpFormContextProvider>
    </Container>
  );
};

export default App;
