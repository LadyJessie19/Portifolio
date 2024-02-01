import React from "react";
import Logo from "../../../reusable/Logo";
import NavBar from "../../../reusable/NavBar";
import jessieLogo from "../../../../assets/logo.png";

const HeaderSection = () => {
  return (
    <>
      <Logo img={jessieLogo} />
      <NavBar />
    </>
  );
};

export default HeaderSection;
