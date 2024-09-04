import Jessica from "../../assets/imgs/jessie.png";
import { StyledLabel, StyledMainImg } from "./style";

const MainImg = () => {
  return (
    <>
      <StyledMainImg>
        <img src={Jessica} alt="Jessica" width={200} />
        <StyledLabel>Jessica M. Bentes</StyledLabel>
      </StyledMainImg>
    </>
  );
};

export default MainImg;
