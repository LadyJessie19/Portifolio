import { StyledHeaderElement } from "../../styles/ReusableStyles";
import { useLanguage } from "../../contexts/LanguageProvider";

const HeaderHomePage = () => {
  const { language } = useLanguage() || { language: "EN-US" };
  return language === "EN-US" ? (
    <StyledHeaderElement>
      Jessica is a <span>Fullstack Developer</span> and a{" "}
      <span>UX Designer</span>
    </StyledHeaderElement>
  ) : (
    <StyledHeaderElement>
      Jessica é uma <span> Desenvolvedora Fullstack </span> e{" "}
      <span>Designer UX</span>
    </StyledHeaderElement>
  );
};

export default HeaderHomePage;
