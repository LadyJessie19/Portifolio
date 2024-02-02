import React from "react";
import { StyledContentSection } from "../../../../../styles/ReusableStyles";
import SectionHeader from "../../../../reusable/SectionHeader";
import GeneralCard from "../../../../reusable/GeneralCard";

import blogPosts from "../../../data/blogPosts";

import HomeData from "../../../data/_homeData";

const currentDisplay = blogPosts.slice(0, 3);

const BlogPostsSection = () => {
  return (
    <StyledContentSection>
      <SectionHeader
        title={HomeData.SectionTitleFour}
        path={HomeData.pathProjects}
      />
      <div className="inner-section">
        {currentDisplay.map((item) => (
          <GeneralCard
            img={item.img}
            title={item.title}
            description={item.description}
            link={item.link}
            button={item.button}
          />
        ))}
      </div>
    </StyledContentSection>
  );
};

export default BlogPostsSection;
