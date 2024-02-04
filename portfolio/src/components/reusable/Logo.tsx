interface IProps {
  img: any;
}

import { Link } from "react-router-dom";
import { StyledLogoComponent } from "../../styles/ReusableStyles";

const Logo = ({ img }: IProps) => {
  return (
    <>
      <StyledLogoComponent>
        <Link to="/us">
          {" "}
          <img src={img} alt="logo" />{" "}
        </Link>
      </StyledLogoComponent>
    </>
  );
};

export default Logo;
