import { StyledSmallCardProject } from "../../styles/ReusableStyles";
import MainButton from "./MainButton";

interface IProps {
  tools: string;
  title: string;
  description: string;
  button: string;
  link: string;
}

const SmallProjectCard = ({
  tools,
  title,
  description,
  button,
  link,
}: IProps) => {
  return (
    <>
      <StyledSmallCardProject>
        <div className="first-row">{tools}</div>
        <div className="second-row">
          <div className="row-one">{title}</div>
          <div className="row-two">{description}</div>
        </div>
        <div className="button-row">
          <MainButton text={button} link={link} />
        </div>
      </StyledSmallCardProject>
    </>
  );
};

export default SmallProjectCard;
