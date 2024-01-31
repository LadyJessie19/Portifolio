interface IProps {
  img: any;
}

import { Link } from "react-router-dom";

const Logo = ({ img }: IProps) => {
  return (
    <>
      <span>
        <Link to="/">
          {" "}
          <img width={210} src={img} alt="logo" />{" "}
        </Link>
      </span>
    </>
  );
};

export default Logo;
