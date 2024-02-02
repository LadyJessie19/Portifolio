import GlobalStyle from "../../../../styles/Global";
import TinySideBar from "../../../reusable/TinySideBar";
import {
  StyledContactMain,
  StyledHeaderHomePage,
} from "../../../../styles/ReusableStyles";
import HeaderSection from "../Home/HeaderSection";
import SecondaryPageTitle from "../../../reusable/SecondaryPageTitle";
import Footer from "../../../reusable/Footer";
import SecondaryPageSection from "../../../reusable/SecondaryPageSection";
import MessageMeCard from "../../../reusable/MessageMeCard";

import contactInfo from "../../data/_contactData";
import AllMediaComp from "../../../reusable/AllMediaComp";
import Decorations from "../../../reusable/Decorations";

const ContactsEn = () => {
  return (
    <>
      <GlobalStyle />
      <TinySideBar />
      <Decorations size="small" />

      <StyledHeaderHomePage>
        <HeaderSection />
      </StyledHeaderHomePage>

      <SecondaryPageTitle
        title={contactInfo.pageTitle}
        description={contactInfo.pageDescription}
      />

      <StyledContactMain>
        <div>
          <p>{contactInfo.contactMeHeadline} </p>
          <p>{contactInfo.contactMeOne}</p>
        </div>
        <div>
          <MessageMeCard />
        </div>
      </StyledContactMain>

      <SecondaryPageSection title={contactInfo.pageSectionTitleOne}>
        <div className="d-flex all-media-itens">
          {contactInfo.allMedias.map((item) => (
            <AllMediaComp link={item.link} icon={item.icon} name={item.name} />
          ))}
        </div>
      </SecondaryPageSection>

      <Footer />
    </>
  );
};

export default ContactsEn;
