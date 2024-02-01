import React from "react";
import { StyledMainTextHomePage } from "../../../../styles/ReusableStyles";
import MainImg from "../../../reusable/MainImg";
import MainButton from "../../../reusable/MainButton";
import cv from "../../../../assets/cv/jessie-moura.pdf";

const MainSection = () => {
  return (
    <>
      <div className="flex-wrap">
        <StyledMainTextHomePage>
          <h1>
            Jessica is a <span>Fullstack Developer</span> and a{" "}
            <span>UX Designer</span>
          </h1>
          <p>
            Proficient in both front-end and back-end development, she ensures
            smooth user experiences throughout the entire process, from
            conceptualization to deployment.
          </p>
          <div className="d-flex g-1">
            <MainButton text="Contact Me" path="/contact" />
            <MainButton text="Download CV" link={cv} hasDownload={true} />
          </div>
        </StyledMainTextHomePage>
        <MainImg />
      </div>
    </>
  );
};

export default MainSection;
