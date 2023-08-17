import { StyledSectionHeader } from "../../styles/ReusableStyles";
import PinkLine from "../../assets/PinkLine.svg";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  path?: string;
}

const SectionHeader = ({ title, path }: IProps) => {
  return (
    <>
      <StyledSectionHeader>
        <div className="inner-header">
          <div className="left-header">
            <p>
              <span>#</span>
              {title}
            </p>
            <img src={PinkLine} />
          </div>
          {path && <div className="right-header">
            <Link to={path}>View All ▶</Link>
          </div>}
        </div>
      </StyledSectionHeader>
    </>
  );
};

export default SectionHeader;
