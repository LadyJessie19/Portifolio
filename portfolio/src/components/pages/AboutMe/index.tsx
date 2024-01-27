import React from "react";
import GlobalStyle from "../../../styles/Global";
import TinySideBar from "../../reusable/TinySideBar";
import HeaderSection from "../Home/HeaderSection";
import { StyledHeaderHomePage } from "../../../styles/ReusableStyles";
import SecondaryPageTitle from "../../reusable/SecondaryPageTitle";
import SecondaryPageSection from "../../reusable/SecondaryPageSection";
import Footer from "../../reusable/Footer";
import SkillsSection from "../Home/SkillsSection";
import CertificatesSection from "../Home/CertificatesSection";

const AboutMe = () => {
  return (
    <>
      <GlobalStyle />
      <TinySideBar />

      <StyledHeaderHomePage>
        <HeaderSection />
      </StyledHeaderHomePage>

      <SecondaryPageTitle title="about-me" description="Who am I?" />

      <SecondaryPageSection title="jessie-bentes">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            tempora molestias quo cupiditate provident! Optio quis iste adipisci
            reiciendis dignissimos eos voluptatum, facilis omnis aliquam
            perferendis consequatur sint, porro repellat!
          </p>
        </div>
      </SecondaryPageSection>

      <SecondaryPageSection title={"skills"}>
        <SkillsSection />
      </SecondaryPageSection>

      <SecondaryPageSection title={"certificates"}>
        <CertificatesSection />
      </SecondaryPageSection>

      <SecondaryPageSection title="my-fun-facts">
        <ul>
          <li>My favorite food is pizza</li>
          <li>I'm consider myself a dev/writer</li>
          <li>I dream visiting South Korea</li>
        </ul>
      </SecondaryPageSection>

      <Footer />
    </>
  );
};

export default AboutMe;
