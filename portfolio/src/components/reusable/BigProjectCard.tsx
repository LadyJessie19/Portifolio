import { StyledBigCardProject } from "../../styles/ReusableStyles";
import MainButton from "./MainButton";

interface IProps {
  img: any;
  tools: string;
  name: string;
  description: string;
  link: string;
  button: string;
}

const BigProjectCard = ({
  img,
  tools,
  name,
  description,
  link,
  button,
}: IProps) => {
  return (
    <>
      <StyledBigCardProject>
        <div className="photo-row">
          <img src={img} width={275} />
        </div>
        <div className="first-row">{tools}</div>
        <div className="second-row">
          <div>
            <h4>{name}</h4>
          </div>
          <div>
            <p>{description}</p>
          </div>
        </div>
        <div className="button-row">
          <MainButton text={button} link={link} />
        </div>
      </StyledBigCardProject>
    </>
  );
};

export default BigProjectCard;
