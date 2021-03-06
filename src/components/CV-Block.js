import React from "react";
import Header from "./Header";
import PersonalInfo from "./personal-info/PersonalInfo";
import PersonalInfoContextProvider from "../contexts/PersonalInfoContext";
import ExperienceSection from "./experience/ExperienceSection";
import ExperienceContextProvider from "../contexts/ExperienceContext";
import EducationSection from "./education/EducationSection";
import EducationContextProvider from "../contexts/EducationContext";
import SkillsContextProvider from "../contexts/SkillsContext";
import SkillsSection from "./skills/SkillsSection";
import BuildContextProvider from "../contexts/BuildContext";
import TemplateContextProvider from "../contexts/TemplateContext";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";

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

const CVBlock = () => {
  const pdfExportComponent = useRef(null);
  const handleExport = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TemplateContextProvider>
          <BuildContextProvider>
            <Header handleExport={handleExport} />
            <PDFExport scale={0.6} ref={pdfExportComponent} paperSize="A4">
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
            </PDFExport>
          </BuildContextProvider>
        </TemplateContextProvider>
      </Container>
    </ThemeProvider>
  );
};

export default CVBlock;
