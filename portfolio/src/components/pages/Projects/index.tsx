import React from "react";
import TinySideBar from "../../reusable/TinySideBar";
import {
  StyledContainerHomePage,
  StyledContainerSecondaryPage,
  StyledHeaderHomePage,
} from "../../../styles/ReusableStyles";
import GlobalStyle from "../../../styles/Global";
import HeaderSection from "../Home/HeaderSection";

import Footer from "../../reusable/Footer";
import SecondaryPageTitle from "../../reusable/SecondaryPageTitle";
import SecondaryPageSection from "../../reusable/SecondaryPageSection";
import BigProjectCard from "../../reusable/BigProjectCard";
import BlogPostsSection from "../Home/BlogPostsSection";
import biggerProjects from "../../../data/biggerProjects";
import designUX from "../../../data/designUX";
import blogPosts from "../../../data/blogPosts";
import smallerProjects from "../../../data/smallerProjects";
import GeneralCard from "../../reusable/GeneralCard";
import SmallProjectCard from "../../reusable/SmallProjectCard";

const Projects = () => {
  return (
    <>
      <GlobalStyle />
      <TinySideBar />

      <StyledHeaderHomePage>
        <HeaderSection />
      </StyledHeaderHomePage>

      <SecondaryPageTitle title="projects" description="List of my projects" />

      <SecondaryPageSection title="complete-apps">
        <StyledContainerSecondaryPage>
          {biggerProjects.map((item) => {
            return (
              <BigProjectCard
                img={item.img}
                tools={item.tools}
                name={item.name}
                description={item.description}
                link={item.link}
              />
            );
          })}
        </StyledContainerSecondaryPage>
      </SecondaryPageSection>

      <SecondaryPageSection title="smaller-apps">
        <StyledContainerSecondaryPage>
          {smallerProjects.map((item) => {
            return (
              <SmallProjectCard
                tools={item.tools}
                title={item.title}
                description={item.description}
                button={item.button}
                link={item.link}
              />
            );
          })}
        </StyledContainerSecondaryPage>
      </SecondaryPageSection>

      <SecondaryPageSection title="design-ux-projects">
        <StyledContainerSecondaryPage>
          {designUX.map((item) => {
            return (
              <GeneralCard
                img={item.img}
                title={item.name}
                description={item.description}
                link={item.link}
                // button={item.button}
                button="Check it out"
              />
            );
          })}
        </StyledContainerSecondaryPage>
      </SecondaryPageSection>

      <SecondaryPageSection title="blog-posts">
        <StyledContainerSecondaryPage>
          {blogPosts.map((item) => {
            return (
              <GeneralCard
                img={item.img}
                title={item.title}
                link={item.link}
                button="Check it out"
                description={item.description}
              />
            );
          })}
        </StyledContainerSecondaryPage>
      </SecondaryPageSection>

      <Footer />
    </>
  );
};

export default Projects;
