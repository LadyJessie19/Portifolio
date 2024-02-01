import React from "react";
import GlobalStyle from "../../../styles/Global";
import TinySideBar from "../../reusable/TinySideBar";
import HeaderSection from "../Home/HeaderSection";
import {
  StyledContainerSecondaryPage,
  StyledHeaderHomePage,
} from "../../../styles/ReusableStyles";
import SecondaryPageTitle from "../../reusable/SecondaryPageTitle";
import SecondaryPageSection from "../../reusable/SecondaryPageSection";
import Footer from "../../reusable/Footer";
import SkillsSection from "../Home/SkillsSection";
import CertificatesSection from "../Home/CertificatesSection";
import skills from "../../../data/skills";
import SkillCard from "../../reusable/SkillCard";
import certificates from "../../../data/certificates";
import GeneralCard from "../../reusable/GeneralCard";

const AboutMe = () => {
  return (
    <>
      <GlobalStyle />
      <TinySideBar />

      <StyledHeaderHomePage>
        <HeaderSection />
      </StyledHeaderHomePage>

      <SecondaryPageTitle title="about-me" description="Who am I?" />

      <SecondaryPageSection title="jessie-bentes">
        <div>
          <p>
            Hey! I'm Jéssica Bentes, a dedicated fullstack developer residing in
            Campo Grande. My journey into tech began with diverse experiences,
            including cooking and graphic producer, before I found my true
            passion in coding.
          </p>
          <p>
            At Satelier, I delved deep into JavaScript. Working as a monitor, I
            specialized in React.js, TypeScript, and Node.js. This experience
            fueled my passion for problem-solving and community collaboration in
            the tech sphere.
          </p>
          <p>
            Driven by a desire to contribute meaningfully to the field, I've
            dedicated myself to mastering various programming languages and
            frameworks. I'm deeply inspired by the potential of technology to
            create positive change and enhance lives.
          </p>
          <p>
            Eager to connect with fellow developers, share insights, and
            continue my journey of growth and innovation in the dynamic world of
            software development!
          </p>
        </div>
      </SecondaryPageSection>

      <SecondaryPageSection title={"skills"}>
        <StyledContainerSecondaryPage>
          {skills.map((item) => (
            <SkillCard category={item.category} tools={item.tools} />
          ))}
        </StyledContainerSecondaryPage>
      </SecondaryPageSection>

      <SecondaryPageSection title={"certificates"}>
        <StyledContainerSecondaryPage>
          {certificates.map((item) => (
            <GeneralCard
              img={item.img}
              title={item.title}
              description={item.description}
              link={item.link}
              button={"View here"}
            />
          ))}
        </StyledContainerSecondaryPage>
      </SecondaryPageSection>

      <SecondaryPageSection title="my-fun-facts">
        <ul>
          <li>My favorite food is pizza</li>
          <li>I'm consider myself a dev/writer</li>
          <li>I dream visiting South Korea</li>
        </ul>
      </SecondaryPageSection>

      <Footer />
    </>
  );
};

export default AboutMe;
