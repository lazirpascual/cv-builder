import React from "react";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import Header from "./components/Header";
import ExperienceSection from "./components/experience/ExperienceSection";
import ExperienceContextProvider from "./contexts/ExperienceContext";
import EducationSection from "./components/education/EducationSection";
import EducationContextProvider from "./contexts/EducationContext";
import SkillsContextProvider from "./contexts/SkillsContext";
import SkillsSection from "./components/skills/SkillsSection";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

// Material-UI import
import { Container } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e33371",
    },
    secondary: {
      main: "#115293",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <PersonalInfo />
        <ExperienceContextProvider>
          <ExperienceSection />
        </ExperienceContextProvider>
        <EducationContextProvider>
          <EducationSection />
        </EducationContextProvider>
        <SkillsContextProvider>
          <SkillsSection />
        </SkillsContextProvider>
      </Container>
    </ThemeProvider>
  );
};

export default App;
