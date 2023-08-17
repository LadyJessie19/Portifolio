import LineImg from "../../assets/Line.svg";
import GithubIcon from "../../assets/Github.svg";
import LinkedinIcon from "../../assets/Linkedin.svg";
import MediumIcon from "../../assets/Play.svg";

import { StyledTinySideBar } from "../../styles/ReusableStyles";

const github = "https://github.com/LadyJessie19";
const linkedin = "https://www.linkedin.com/in/jessiemoura19/";
const medium = "https://medium.com/@jessie_moura";

const TinySideBar = () => {
  return (
    <>
      <StyledTinySideBar>
        <img src={LineImg} alt="Line" />
        <div className="side-bar-icons">
          <a href={github} target="_blank">
            <img src={GithubIcon} alt="Github" />
          </a>
          <a href={linkedin} target="_blank">
            <img src={LinkedinIcon} alt="Linkdein" />
          </a>
          <a href={medium} target="_blank">
            <img src={MediumIcon} alt="Medium" />
          </a>
        </div>
      </StyledTinySideBar>
    </>
  );
};

export default TinySideBar;
