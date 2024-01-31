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
        <div className="d-flex">
          <div>
            <p>I'm open to freelance gigs! </p>
            <p>
              But hey, if you've got any other requests or just wanna chat, hit
              me up anytime.
            </p>
          </div>

          <MessageMeCard />
        </div>
      </SecondaryPageSection>

      <Footer />
    </>
  );
};

export default Contacts;
