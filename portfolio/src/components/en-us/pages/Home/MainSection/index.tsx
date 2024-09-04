import {
  StyledMainSection,
  StyledMainTextHomePage,
} from "../../../../../styles/ReusableStyles";
import MainImg from "../../../../reusable/MainImg";
import MainButton from "../../../../reusable/MainButton";
import cv from "../../../../../assets/cv/cv-jessie-bentes-en-us.pdf";

import HomeInfo from "../../../data/_homeData";
import HeaderHomePage from "../../../../reusable/HeaderHomePage";

const MainSection = () => {
  return (
    <>
      <StyledMainSection>
        <StyledMainTextHomePage>
          <HeaderHomePage />
          <p>{HomeInfo.introduction}</p>
          <div className="d-flex g-1">
            <MainButton
              text={HomeInfo.buttonMainHome}
              path={HomeInfo.pathContact}
            />
            <MainButton
              text={HomeInfo.downloadCV}
              link={cv}
              hasDownload={true}
            />
          </div>
        </StyledMainTextHomePage>
        <MainImg />
      </StyledMainSection>
    </>
  );
};

export default MainSection;
