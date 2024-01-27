import {
  StyledContainer,
  StyledContentSection,
  StyledInnerContentContainer,
} from "../../../../styles/ReusableStyles";
import MainButton from "../../../reusable/MainButton";
import SectionHeader from "../../../reusable/SectionHeader";
import AboutMeImage from "../../../../assets/secondImage.svg";

const AboutSection = () => {
  return (
    <>
      <StyledContentSection>
        <SectionHeader title="about-me" />
        <StyledContainer>
          <StyledInnerContentContainer>
            <p>Hi!👋 You may call me Jessie!</p>
            <p>
              I'm a Fullstack developer originally from Rio de Janeiro, now
              based in Campo Grande, MS. I started in 2022 and mainly work with
              JavaScript, Java, and SQL. My focus is on web applications and
              user experience.
            </p>
            <p>
              Fluent in English, I practice clean code and have experience with
              GIT. Additionally, I work as a monitor at a programming school.
              I'm excited to continue growing and contributing in the field!
            </p>
            <p>
              I'm eager to keep learning and collaborating with the programming
              community. I hope to contribute my knowledge and skills as I
              continue my journey in this exciting field of technology.
            </p>
            <MainButton path="/about-me" text={"Read More"} />
          </StyledInnerContentContainer>
          <StyledInnerContentContainer>
            <img src={AboutMeImage} alt="about-me" width={250} />
          </StyledInnerContentContainer>
        </StyledContainer>
      </StyledContentSection>
    </>
  );
};

export default AboutSection;
