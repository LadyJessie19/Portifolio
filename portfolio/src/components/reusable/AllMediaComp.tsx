import { StyledAllMediaComp } from "../../styles/ReusableStyles";

interface IProps {
  name: string;
  link: string;
  icon: string;
}

const AllMediaComp = ({ name, link, icon }: IProps) => {
  return (
    <StyledAllMediaComp>
      <i className={icon} />
      &nbsp;
      <a href={link} target="_blank" rel="noreferrer noopener">
        {name}
      </a>
    </StyledAllMediaComp>
  );
};

export default AllMediaComp;
