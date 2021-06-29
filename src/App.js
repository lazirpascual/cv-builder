import React from "react";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import Header from "./components/Header";
import ExperienceSection from "./components/experience/ExperienceSection";

// Material-UI import
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <Container>
      <Header />
      <PersonalInfo />
      <ExperienceSection />
    </Container>
  );
};

export default App;
