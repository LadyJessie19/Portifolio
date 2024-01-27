import React from "react";
import { StyledContentSection } from "../../../../styles/ReusableStyles";
import SectionHeader from "../../../reusable/SectionHeader";
import GeneralCard from "../../../reusable/GeneralCard";
import GoogleImg from "../../../../assets/Google1.png";

const CertificatesSection = () => {
  return (
    <StyledContentSection>
      <SectionHeader title="certificates" />
      <div className="inner-section">
        <GeneralCard
          img={GoogleImg}
          title={"Fundamentos do Design UX"}
          description={"Certificação do Google para Designers UX"}
          link={
            "https://www.coursera.org/professional-certificates/google-ux-design"
          }
        />
        <GeneralCard
          img={GoogleImg}
          title={"Fundamentos do Design UX"}
          description={"Certificação do Google para Designers UX"}
          link={
            "https://www.coursera.org/professional-certificates/google-ux-design"
          }
        />
        <GeneralCard
          img={GoogleImg}
          title={"Fundamentos do Design UX"}
          description={"Certificação do Google para Designers UX"}
          link={
            "https://www.coursera.org/professional-certificates/google-ux-design"
          }
        />
      </div>
    </StyledContentSection>
  );
};

export default CertificatesSection;
