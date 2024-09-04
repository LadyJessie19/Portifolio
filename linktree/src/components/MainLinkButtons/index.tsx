import { useState } from "react";
import {
  StyledMainLinkButtons,
  StyledLinkButton,
  StyledTooltip,
} from "./style";

const MainLinkButtons = () => {
  const [isTooltipVisible, setTooltipVisible] = useState<boolean>(false);

  return (
    <>
      <StyledMainLinkButtons>
        <a
          href="https://www.linkedin.com/in/jessiemoura/"
          target="_blank"
          rel="noopener noreferrer">
          <StyledLinkButton className="linkedin">
            Connect with Me on LinkedIn
          </StyledLinkButton>
        </a>
        <a
          href="https://github.com/LadyJessie19"
          target="_blank"
          rel="noopener noreferrer">
          <StyledLinkButton className="github">
            Explore My Projects on GitHub
          </StyledLinkButton>
        </a>
        <a
          href="https://medium.com/@jessie_moura"
          target="_blank"
          rel="noopener noreferrer">
          <StyledLinkButton className="medium">
            Read My Posts on Medium
          </StyledLinkButton>
        </a>
        <a
          href="https://www.instagram.com/lady_jessie19/"
          target="_blank"
          rel="noopener noreferrer">
          <StyledLinkButton className="instagram">
            Check Out My Instagram
          </StyledLinkButton>
        </a>
        <a
          href="https://discord.com/channels/@me?nickname=ladyjessie"
          target="_blank"
          rel="noopener noreferrer">
          <StyledLinkButton
            className="discord"
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}>
            Chat with Me on Discord
          </StyledLinkButton>
          <StyledTooltip visible={isTooltipVisible}>
            My nickname is{" "}
            <strong>
              <em>ladyjessie</em>
            </strong>
            . 😉
          </StyledTooltip>
        </a>
      </StyledMainLinkButtons>
    </>
  );
};

export default MainLinkButtons;
