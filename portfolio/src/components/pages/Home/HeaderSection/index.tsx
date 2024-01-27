import React from "react";
import Logo from "../../../reusable/Logo";
import NavBar from "../../../reusable/NavBar";
import logo from "../../../../assets/Logo.svg";

const HeaderSection = () => {
  return (
    <>
      <Logo img={logo} />
      <NavBar />
    </>
  );
};

export default HeaderSection;
