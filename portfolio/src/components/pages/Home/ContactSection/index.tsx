import {
  StyledContainer,
  StyledContentSection,
  StyledInnerContentContainer,
} from "../../../../styles/ReusableStyles";
import MessageMeCard from "../../../reusable/MessageMeCard";
import SectionHeader from "../../../reusable/SectionHeader";

const ContactSection = () => {
  return (
    <>
      <StyledContentSection>
        <SectionHeader title="contact" />
        <StyledContainer>
          <StyledInnerContentContainer>
            <p>I'm open to freelance gigs! </p>
            <p>
              But hey, if you've got any other requests or just wanna chat, hit
              me up anytime.
            </p>
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
