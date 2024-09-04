import { StyledFooter } from "../../styles/ReusableStyles";
import Github from "../../assets/Github.svg";
import Figma from "../../assets/Figma.svg";
import Discord from "../../assets/Discord.svg";
import Logo from "./Logo";
import LogoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className="first-row">
          <div className="left-side d-flex g-2">
            <div className="footer-text">
              <span>
                <Logo img={LogoImg} />
              </span>
              <span> jessie.moura19@gmail.com</span>
            </div>
            <div>Fullstack Developer and UX Designer</div>
            <small>I would love to thanks the Figma onwer.</small>

            <small>
              Thanks, Elias! You rock!{" "}
              <a
                href="https://www.figma.com/file/VwTA6Nv74MbhBQsJGj7mH6/Portfolio-Jessie?type=design&node-id=52-1856&mode=design&t=s55H0YmginItHZ6Q-0"
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  cursor: "pointer",
                  textDecoration: "solid",
                  color: "#62AEEF",
                }}>
                figma-link
              </a>
            </small>
          </div>
          <div>
            <h2>Media</h2>
            <a
              href="https://github.com/LadyJessie19"
              target="_blank"
              rel="noreferrer noopener">
              <img src={Github} alt="Github" />
            </a>
            <a
              href="https://www.figma.com/files/user/1164006161769032343?fuid=1164006161769032343"
              target="_blank"
              rel="noreferrer noopener">
              <img src={Figma} alt="Figma" />
            </a>
            <a
              href="https://discord.com/channels/@me?nickname=ladyjessie"
              target="_blank"
              rel="noreferrer noopener">
              <img src={Discord} alt="Discord" />
            </a>
          </div>
        </div>
        <div className="second-row">
          <small>© Copyright 2024. Made by Jessie Bentes </small>
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
