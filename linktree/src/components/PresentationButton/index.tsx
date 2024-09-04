import { StyledMainButton } from "./style";

interface IProps {
  text: string;
  link?: string;
  hasDownload?: boolean;
}

const PresentationButton = ({ text, link, hasDownload }: IProps) => {
  return (
    <>
      {hasDownload ? (
        <StyledMainButton>
          <a href={link} download>
            {text}
          </a>
        </StyledMainButton>
      ) : (
        <StyledMainButton>
          <a href={link} target="_blank">
            {text}
          </a>
        </StyledMainButton>
      )}
    </>
  );
};

export default PresentationButton;
