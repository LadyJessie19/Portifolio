import { StyledBigCardProject } from "../../styles/ReusableStyles";
import MainButton from "./MainButton";

interface IProps {
  img: any;
  tools: string;
  name: string;
  description: string;
  link: string;
}

const BigProjectCard = ({ img, tools, name, description, link }: IProps) => {
  return (
    <>
      <StyledBigCardProject>
        <div>
          <img src={img} />
        </div>
        <div>{tools}</div>
        <div>
          <div>
            <h4>{name}</h4>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div>
            <MainButton text="Repository" link={link} />
          </div>
        </div>
      </StyledBigCardProject>
    </>
  );
};

export default BigProjectCard;
