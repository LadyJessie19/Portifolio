import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/Global";
import MainComp from "./components/MainComp";
import CoolBackground from "./components/CoolBackground";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CoolBackground />
        <MainComp />
      </ThemeProvider>
    </>
  );
}

export default App;
