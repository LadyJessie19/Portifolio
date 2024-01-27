import GlobalStyle from "../../../styles/Global";
import TinySideBar from "../../reusable/TinySideBar";
import {
  StyledContainerHomePage,
  StyledHeaderHomePage,
  StyledMainHomePage,
} from "../../../styles/ReusableStyles";
import Quote from "../../reusable/Quote";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import CertificatesSection from "./CertificatesSection";
import BlogPostsSection from "./BlogPostsSection";
import MainSection from "./MainSection";
import HeaderSection from "./HeaderSection";
import Footer from "../../reusable/Footer";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <>
      <GlobalStyle />

      <TinySideBar />

      <StyledHeaderHomePage>
        <HeaderSection />
      </StyledHeaderHomePage>

      <StyledMainHomePage>
        <MainSection />
      </StyledMainHomePage>

      <Quote />

      <StyledContainerHomePage>
        <ProjectsSection />
      </StyledContainerHomePage>

      <StyledContainerHomePage>
        <SkillsSection />
      </StyledContainerHomePage>

      <StyledContainerHomePage>
        <CertificatesSection />
      </StyledContainerHomePage>

      <StyledContainerHomePage>
        <BlogPostsSection />
      </StyledContainerHomePage>

      <StyledContainerHomePage>
        <AboutSection />
      </StyledContainerHomePage>

      <StyledContainerHomePage>
        <ContactSection />
      </StyledContainerHomePage>

      <Footer />
    </>
  );
};

export default Home;
