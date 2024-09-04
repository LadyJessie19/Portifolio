import Jessica from "../../assets/jessie1.png";
import {
  StyledLabelImage,
  StyledMainImgDisplay,
} from "../../styles/ReusableStyles";
import { useLanguage } from "../../contexts/LanguageProvider";

const MainImg = () => {
  const { language } = useLanguage() || { language: "EN-US" };
  return (
    <>
      <StyledMainImgDisplay>
        <img src={Jessica} alt="Jessica" width={400} />
        <StyledLabelImage>
          {language === "EN-US"
            ? "Currently working on "
            : "Atualmente trabalhando na "}
          <br />
          🚀&nbsp;
          <a href="https://izap.com.br/" target="_blank" rel="noopener">
            Izap Softworks
          </a>
          {language === "EN-US" ? " and at " : " e na "}
          💜&nbsp;
          <a href="https://arnia.com.br/" target="_blank" rel="noopener">
            Arnia
          </a>
        </StyledLabelImage>
      </StyledMainImgDisplay>
    </>
  );
};

export default MainImg;
