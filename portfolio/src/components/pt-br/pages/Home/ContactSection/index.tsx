import {
  StyledContainer,
  StyledContentSection,
  StyledInnerContentContainer,
} from "../../../../../styles/ReusableStyles";
import MessageMeCard from "../../../../reusable/MessageMeCard";
import SectionHeader from "../../../../reusable/SectionHeader";
import HomeData from "../../../data/_homeData";

const ContactSection = () => {
  return (
    <>
      <StyledContentSection>
        <SectionHeader title={HomeData.SectionTitleSix} />
        <StyledContainer>
          <StyledInnerContentContainer>
            <p> {HomeData.contactMeOne} </p>
            <p>{HomeData.contactMeTwo}</p>
          </StyledInnerContentContainer>
          <StyledInnerContentContainer>
            <MessageMeCard />
          </StyledInnerContentContainer>
        </StyledContainer>
      </StyledContentSection>
    </>
  );
};

export default ContactSection;
