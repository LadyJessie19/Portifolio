import React from "react";
import TinySideBar from "../../reusable/TinySideBar";
import { StyledHeaderHomePage } from "../../../styles/ReusableStyles";
import GlobalStyle from "../../../styles/Global";
import HeaderSection from "../Home/HeaderSection";

import Footer from "../../reusable/Footer";
import SecondaryPageTitle from "../../reusable/SecondaryPageTitle";
import SecondaryPageSection from "../../reusable/SecondaryPageSection";
import BigProjectCard from "../../reusable/BigProjectCard";
import ProjectImg from "../../../assets/site.png";
import BlogPostsSection from "../Home/BlogPostsSection";

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
        <div className="d-flex">
          <BigProjectCard
            name="Projeto"
            description="lorem lorem"
            img={ProjectImg}
            link="https://www.github.com"
            tools="tools é uq?"
            key={1}
          />
          <BigProjectCard
            name="Projeto"
            description="lorem lorem"
            img={ProjectImg}
            link="https://www.github.com"
            tools="tools é uq?"
            key={1}
          />
          <BigProjectCard
            name="Projeto"
            description="lorem lorem"
            img={ProjectImg}
            link="https://www.github.com"
            tools="tools é uq?"
            key={1}
          />
        </div>
        <div>
          <p>Hellow!</p>
        </div>
      </SecondaryPageSection>

      <SecondaryPageSection title="UX Jobs">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          cum ut animi error architecto minus vitae quibusdam vero ipsum. Sed
          ullam esse eius a praesentium dignissimos temporibus dicta, maxime
          pariatur.
        </div>
      </SecondaryPageSection>

      <SecondaryPageSection title="blog-posts">
        <BlogPostsSection />
      </SecondaryPageSection>

      <Footer />
    </>
  );
};

export default Projects;
