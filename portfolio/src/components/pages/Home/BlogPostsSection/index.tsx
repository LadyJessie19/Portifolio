import React from "react";
import { StyledContentSection } from "../../../../styles/ReusableStyles";
import SectionHeader from "../../../reusable/SectionHeader";
import GeneralCard from "../../../reusable/GeneralCard";
import BlogPost from "../../../../assets/BlogPost.png";
import blogPosts from "../../../../data/blogPosts";

const BlogPostsSection = () => {
  return (
    <StyledContentSection>
      <SectionHeader title="blog-posts" />
      <div className="inner-section">
        {blogPosts.map((item) => (
          <GeneralCard
            img={item.img}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </StyledContentSection>
  );
};

export default BlogPostsSection;
