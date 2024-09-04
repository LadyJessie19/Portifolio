import { ButtonsPresentation, StyledMainPresentation } from "./style";
import cv from "../../assets/cv/cv-jessie-bentes-en-us.pdf";
import { StyledMainButton } from "../PresentationButton/style";

const url = "https://jessie-bentes.vercel.app/";

const MainPresentation = () => {
  return (
    <>
      <StyledMainPresentation>
        <h1>
          Hi! I'm a <span>Fullstack Developer</span> & <span>UX Designer</span>
        </h1>
        <ButtonsPresentation>
          <a href="mailto:jessie.moura19@gmail.com?subject=Professional Contact&body=Hi! I’d love to discuss a new project with you. Are you available for a chat?">
            <StyledMainButton>Email Me</StyledMainButton>
          </a>

          <a href={cv} download={"cv-jessie.pdf"}>
            <StyledMainButton>View My CV</StyledMainButton>
          </a>

          <a href={url} target="_blank">
            <StyledMainButton>View My Portfolio</StyledMainButton>
          </a>
        </ButtonsPresentation>
      </StyledMainPresentation>
    </>
  );
};

export default MainPresentation;
