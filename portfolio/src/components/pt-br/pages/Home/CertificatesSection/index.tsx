import { StyledContentSection } from "../../../../../styles/ReusableStyles";
import SectionHeader from "../../../../reusable/SectionHeader";
import GeneralCard from "../../../../reusable/GeneralCard";
import certificates from "../../../data/certificates";

import HomeData from "../../../data/_homeData";

const currentDisplay = certificates.slice(0, 3);

const CertificatesSection = () => {
  return (
    <StyledContentSection>
      <SectionHeader
        title={HomeData.SectionTitleThree}
        path={HomeData.pathSectionAbout}
      />
      <div className="inner-section">
        {currentDisplay.map((item, index) => {
          return (
            <GeneralCard
              key={index}
              img={item.img}
              title={item.title}
              description={item.description}
              link={item.link}
              button={item.button}
            />
          );
        })}
      </div>
    </StyledContentSection>
  );
};

export default CertificatesSection;
