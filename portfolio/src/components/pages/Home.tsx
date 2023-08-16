import React from "react";
import MainButton from "../reusable/MainButton";
import GlobalStyle from "../../styles/Global";

const Home = () => {

  return (
    <>
        <GlobalStyle />
      <h1 className={"c-lightGrey f-main d-flex j-center"}>Hello!</h1>

      <MainButton text="Main Button" path="/about" />
    </>
  );
};

export default Home;
