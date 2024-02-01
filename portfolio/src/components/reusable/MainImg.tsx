import Jessica from "../../assets/jessie1.png";
import Label from "../../assets/jessie-name-label.png";
import {
  StyledLabelImage,
  StyledMainImgDisplay,
} from "../../styles/ReusableStyles";

const MainImg = () => {
  return (
    <>
      <StyledMainImgDisplay>
        <img src={Jessica} alt="Jessica" width={400} />
        <StyledLabelImage>
          <img src={Label} width={400} />
        </StyledLabelImage>
      </StyledMainImgDisplay>
    </>
  );
};

export default MainImg;
