import { StyledMessageMeCard } from "../../styles/ReusableStyles";
import Discord from "../../assets/Discord.svg";
import Email from "../../assets/Email.svg";
import Linkedin from "../../assets/Linkedin.svg";
import { useLanguage } from "../../contexts/LanguageProvider";

const MessageMeCard = () => {
  const { language } = useLanguage() || { language: "EN-US" };
  return (
    <>
      <StyledMessageMeCard>
        <div>
          {language === "EN-US" ? (
            <h3>Message me here!</h3>
          ) : (
            <h3>Entre em contato!</h3>
          )}
        </div>
        <div>
          <div className="row">
            <img src={Linkedin} alt="Linkedin" />
            <a
              href="https://www.linkedin.com/in/jessiemoura19/"
              target="_blank">
              <span>Jessie M. Bentes</span>
            </a>
          </div>
          <div className="row">
            <img src={Discord} alt="Discord" />
            <a href="https://discord.com/channels/@me" target="_blank">
              <span>LadyJessie#1442</span>
            </a>
          </div>
          <div className="row">
            <img src={Email} alt="Email" />
            <a href="mailto:jessie.moura19@gmail.com">
              <span>jessie.moura19@gmail.com</span>
            </a>
          </div>
        </div>
      </StyledMessageMeCard>
    </>
  );
};

export default MessageMeCard;
