import React from "react";
import { useTranslation } from "react-i18next";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";
import Header from "./components/01.Header/Header";
import Main from "./components/02.Main/Main";
import AboutMe from "./components/03.About/AboutMe";
import SkillsContainer from "./components/06.SkillsContainer/SkillsContainer";
import Experience from "./components/07.Experience/Experience";
import Portfolio from "./components/09.Portfolio/Portfolio";
import Contact from "./components/10.Contact/Contact";
import { BrowserRouter } from "react-router-dom";

function App() {
   const [t] = useTranslation("global");
  return (
    <BrowserRouter>
      <div className="App">
        <Global
          styles={css`
            ${emotionReset}

            *, *::after, *::before {
              box-sizing: border-box;
              -moz-osx-font-smoothing: grayscale;
              -webkit-font-smoothing: antialiased;
              font-smoothing: antialiased;
            }
            body {
              background-color: black;
              max-width: 1900px;
              margin: 0 auto;
            }
          `}
        />
        
        <Header />
        <Main />
        <AboutMe
          p1={t("about.p1")}
          p2={t("about.p2")}
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />
        <SkillsContainer />
        <Experience />
        <Portfolio />
        <Contact />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
