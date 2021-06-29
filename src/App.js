import React from "react";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import Header from "./components/Header";
import ExperienceSection from "./components/experience/ExperienceSection";
import ExperienceContextProvider from "./contexts/ExperienceContext";

// Material-UI import
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <Container>
      <Header />
      <PersonalInfo />
      <ExperienceContextProvider>
        <ExperienceSection />
      </ExperienceContextProvider>
    </Container>
  );
};

export default App;
