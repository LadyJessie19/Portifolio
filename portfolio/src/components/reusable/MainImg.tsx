import Jessica from "../../assets/jessie1.png";
import Label from "../../assets/jessie-name-label.png";
import { StyledLabelImage } from "../../styles/ReusableStyles";

const MainImg = () => {
  return (
    <>
      <img src={Jessica} alt="Jessica" width={400} />
      <StyledLabelImage src={Label} width={400} />
    </>
  );
};

export default MainImg;
