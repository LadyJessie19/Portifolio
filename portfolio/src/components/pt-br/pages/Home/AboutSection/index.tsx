import {
  StyledContainer,
  StyledContentSection,
  StyledInnerContentContainer,
} from "../../../../../styles/ReusableStyles";
import MainButton from "../../../../reusable/MainButton";
import SectionHeader from "../../../../reusable/SectionHeader";

import JessieAboutMe from "../../../../../assets/jessie2.png";
import HomeData from "../../../data/_homeData";

const AboutSection = () => {
  return (
    <>
      <StyledContentSection>
        <SectionHeader title={HomeData.SectionTitleFive} />
        <StyledContainer>
          <StyledInnerContentContainer>
            <p>{HomeData.aboutMeOne}</p>
            <p>{HomeData.aboutMeTwo}</p>
            <p>{HomeData.aboutMeThree}</p>
            <p>{HomeData.aboutMeFour}</p>
            <MainButton
              path={HomeData.pathAbout}
              text={HomeData.buttonAboutText}
            />
          </StyledInnerContentContainer>
          <StyledInnerContentContainer>
            <img
              src={JessieAboutMe}
              alt="about-me"
              width={400}
              className="img-jessie"
            />
          </StyledInnerContentContainer>
        </StyledContainer>
      </StyledContentSection>
    </>
  );
};

export default AboutSection;
