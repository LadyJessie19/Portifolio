import React from "react";
import GlobalStyle from "../../../../styles/Global";
import TinySideBar from "../../../reusable/TinySideBar";
import HeaderSection from "../Home/HeaderSection";
import {
  StyledContainerSecondaryPage,
  StyledHeaderHomePage,
  StyledItemsContainer,
  StyledListItem,
} from "../../../../styles/ReusableStyles";

import SecondaryPageTitle from "../../../reusable/SecondaryPageTitle";
import SecondaryPageSection from "../../../reusable/SecondaryPageSection";
import Footer from "../../../reusable/Footer";
import SkillCard from "../../../reusable/SkillCard";
import GeneralCard from "../../../reusable/GeneralCard";

import skills from "../../data/skills";
import certificates from "../../data/certificates";

import aboutInfo from "../../data/_aboutData";

const AboutMePt = () => {
  return (
    <>
      <GlobalStyle />
      <TinySideBar />

      <StyledHeaderHomePage>
        <HeaderSection />
      </StyledHeaderHomePage>

      <SecondaryPageTitle
        title={aboutInfo.pageTitle}
        description={aboutInfo.pageDescription}
      />

      <SecondaryPageSection title={aboutInfo.pageSectionTitleOne}>
        <div>
          <p>{aboutInfo.jessieBentesOne}</p>
          <p>{aboutInfo.jessieBentesTwo}</p>
          <p>{aboutInfo.jessieBentesThree}</p>
          <p>{aboutInfo.jessieBentesFour}</p>
        </div>
      </SecondaryPageSection>

      <SecondaryPageSection title={aboutInfo.pageSectionTitleTwo}>
        <StyledContainerSecondaryPage>
          {skills.map((item) => (
            <SkillCard category={item.category} tools={item.tools} />
          ))}
        </StyledContainerSecondaryPage>
      </SecondaryPageSection>

      <SecondaryPageSection title={aboutInfo.pageSectionTitleThree}>
        <StyledContainerSecondaryPage>
          {certificates.map((item) => (
            <GeneralCard
              img={item.img}
              title={item.title}
              description={item.description}
              link={item.link}
              button={item.button}
            />
          ))}
        </StyledContainerSecondaryPage>
      </SecondaryPageSection>

      <SecondaryPageSection title={aboutInfo.pageSectionTitleFour}>
        <StyledItemsContainer>
          {aboutInfo.funFacts.map((item) => (
            <StyledListItem>{item}</StyledListItem>
          ))}
        </StyledItemsContainer>
      </SecondaryPageSection>

      <Footer />
    </>
  );
};

export default AboutMePt;
