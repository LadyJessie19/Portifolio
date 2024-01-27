import React from "react";
import GlobalStyle from "../../../styles/Global";
import TinySideBar from "../../reusable/TinySideBar";
import { StyledHeaderHomePage } from "../../../styles/ReusableStyles";
import HeaderSection from "../Home/HeaderSection";
import SecondaryPageTitle from "../../reusable/SecondaryPageTitle";
import Footer from "../../reusable/Footer";
import SecondaryPageSection from "../../reusable/SecondaryPageSection";
import MessageMeCard from "../../reusable/MessageMeCard";

const Contacts = () => {
  return (
    <>
      <GlobalStyle />
      <TinySideBar />

      <StyledHeaderHomePage>
        <HeaderSection />
      </StyledHeaderHomePage>

      <SecondaryPageTitle title="contacts" description="Wanna reach me?" />

      <SecondaryPageSection title="all-media">
        <div>
          I'm interested in freelance opportunities. However, if you have other
          request or question, don't hesitate to contact me
        </div>

        <MessageMeCard />
      </SecondaryPageSection>

      <Footer />
    </>
  );
};

export default Contacts;
