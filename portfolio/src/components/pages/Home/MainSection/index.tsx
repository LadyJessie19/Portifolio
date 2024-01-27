import React from "react";
import { StyledMainTextHomePage } from "../../../../styles/ReusableStyles";
import MainImg from "../../../reusable/MainImg";

const MainSection = () => {
  return (
    <>
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
        <div>
          <p>Contact me!</p>
        </div>
      </StyledMainTextHomePage>
      <MainImg />
    </>
  );
};

export default MainSection;
