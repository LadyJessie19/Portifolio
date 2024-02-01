import React from "react";
import { StyledContentSection } from "../../../../styles/ReusableStyles";
import SectionHeader from "../../../reusable/SectionHeader";
import GeneralCard from "../../../reusable/GeneralCard";
import certificates from "../../../../data/certificates";

const CertificatesSection = () => {
  return (
    <StyledContentSection>
      <SectionHeader title="certificates" />
      <div className="inner-section">
        {certificates.map((item) => {
          return (
            <GeneralCard
              img={item.img}
              title={item.title}
              description={item.description}
              link={item.link}
              button={"View here"}
            />
          );
        })}
      </div>
    </StyledContentSection>
  );
};

export default CertificatesSection;
