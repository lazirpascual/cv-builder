import React from "react";
import Header from "./components/Header";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import PersonalInfoContextProvider from "./contexts/PersonalInfoContext";
import ExperienceSection from "./components/experience/ExperienceSection";
import ExperienceContextProvider from "./contexts/ExperienceContext";
import EducationSection from "./components/education/EducationSection";
import EducationContextProvider from "./contexts/EducationContext";
import SkillsContextProvider from "./contexts/SkillsContext";
import SkillsSection from "./components/skills/SkillsSection";
import BuildContextProvider from "./contexts/BuildContext";
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
        <BuildContextProvider>
          <Header />
          <PersonalInfoContextProvider>
            <PersonalInfo />
          </PersonalInfoContextProvider>
          <ExperienceContextProvider>
            <ExperienceSection />
          </ExperienceContextProvider>
          <EducationContextProvider>
            <EducationSection />
          </EducationContextProvider>
          <SkillsContextProvider>
            <SkillsSection />
          </SkillsContextProvider>
        </BuildContextProvider>
      </Container>
    </ThemeProvider>
  );
};

export default App;
