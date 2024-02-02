import React from "react";
import { StyledMainTextHomePage } from "../../../../../styles/ReusableStyles";
import MainImg from "../../../../reusable/MainImg";
import MainButton from "../../../../reusable/MainButton";
import cv from "../../../../../assets/cv/jessie-moura.pdf";

import HomeInfo from "../../../data/_homeData";
import HeaderHomePage from "../../../../reusable/HeaderHomePage";

const MainSection = () => {
  return (
    <>
      <div className="flex-wrap">
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
      </div>
    </>
  );
};

export default MainSection;
