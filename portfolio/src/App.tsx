import GlobalStyle from "./styles/Global";
import "./styles/Font.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Contacts from "./components/pages/Contacts";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about-me" Component={AboutMe} />
            <Route path="/contact" Component={Contacts} />
            <Route path="/projects" Component={Projects} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
