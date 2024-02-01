import { StyledMainButton } from "../../styles/ReusableStyles";
import { Link } from "react-router-dom";

interface IProps {
  text: string;
  path?: string;
  action?: () => any;
  link?: string;
  hasDownload?: boolean;
}

const MainButton = ({ text, path, action, link, hasDownload }: IProps) => {
  return (
    <>
      {hasDownload ? (
        <StyledMainButton>
          <a href={link} download>
            {text}
          </a>
        </StyledMainButton>
      ) : link ? (
        <StyledMainButton>
          <a href={link} target="_blank">
            {text}
          </a>
        </StyledMainButton>
      ) : (
        <StyledMainButton onClick={action}>
          <Link to={path!}>{text}</Link>
        </StyledMainButton>
      )}
    </>
  );
};

export default MainButton;
