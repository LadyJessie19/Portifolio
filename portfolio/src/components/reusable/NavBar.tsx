import { Link } from "react-router-dom";
import { StyledNavBar } from "../../styles/ReusableStyles";
import LanguagesDropdown from "./LanguagesDropdown";
import { useLanguage } from "../../context/LanguageProvider";

const NavBar = () => {
  const { language } = useLanguage() || { language: "EN-US" };
  return (
    <>
      <StyledNavBar>
        {language === "EN-US" ? (
          <>
            <Link to="/us">
              <div>
                <span>#</span>home
              </div>
            </Link>
            <Link to="/us/projects">
              <div>
                <span>#</span>works
              </div>
            </Link>
            <Link to="/us/about-me">
              <div>
                <span>#</span>about-me
              </div>
            </Link>
            <Link to="/us/contacts">
              <div>
                <span>#</span>contacts
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/br">
              <div>
                <span>#</span>início
              </div>
            </Link>
            <Link to="/br/projetos">
              <div>
                <span>#</span>trabalhos
              </div>
            </Link>
            <Link to="/br/sobre-mim">
              <div>
                <span>#</span>sobre-mim
              </div>
            </Link>
            <Link to="/br/contatos">
              <div>
                <span>#</span>contatos
              </div>
            </Link>
          </>
        )}
        <LanguagesDropdown />
      </StyledNavBar>
    </>
  );
};

export default NavBar;
