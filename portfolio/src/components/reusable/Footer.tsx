import { StyledFooter } from "../../styles/ReusableStyles";
import Github from "../../assets/Github.svg";
import Figma from "../../assets/Figma.svg";
import Discord from "../../assets/Discord.svg";
import Logo from "./Logo";
import LogoImage from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className="first-row">
          <div className="left-side">
            <div className="footer-text">
              <span>
                <Logo img={LogoImage} />
              </span>
              <span> jessie.moura19@gmail.com</span>
            </div>
            <div>Fullstack Developer and UX Designer</div>
          </div>
          <div>
            <h2>Media</h2>
            <a href="https://github.com/LadyJessie19" target="_blank">
              <img src={Github} alt="Github" />
            </a>
            <a
              href="https://www.figma.com/file/VwTA6Nv74MbhBQsJGj7mH6/Portfolio-Jessie?node-id=23%3A623&mode=dev"
              target="_blank">
              <img src={Figma} alt="Figma" />
            </a>
            <a href="https://discord.com/channels/@me/" target="_blank">
              <img src={Discord} alt="Discord" />
            </a>
          </div>
        </div>
        <div className="second-row">
          <p>© Copyright 2024. Made by Jessie Bentes 💜 </p>
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
