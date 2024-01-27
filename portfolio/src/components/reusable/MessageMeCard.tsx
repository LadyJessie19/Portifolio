import { StyledMessageMeCard } from "../../styles/ReusableStyles";
import Discord from "../../assets/Discord.svg";
import Email from "../../assets/Email.svg";

const MessageMeCard = () => {
  return (
    <>
      <StyledMessageMeCard>
        <div>
          <h3>Message me here!</h3>
        </div>
        <div>
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
