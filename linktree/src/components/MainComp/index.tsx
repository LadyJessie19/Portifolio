import MainImg from "../MainImg";
import MainLinkButtons from "../MainLinkButtons";
import MainPresentation from "../MainPresentation";
import { StyledMain } from "./style";

const MainComp = () => {
  return (
    <>
      <StyledMain>
        <MainImg />
        <MainPresentation />
        <MainLinkButtons />
      </StyledMain>
    </>
  );
};

export default MainComp;
