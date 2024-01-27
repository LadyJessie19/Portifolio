import React from "react";
import { StyledContentSection } from "../../../../styles/ReusableStyles";
import SectionHeader from "../../../reusable/SectionHeader";
import GeneralCard from "../../../reusable/GeneralCard";
import BlogPost from "../../../../assets/BlogPost.png";

const BlogPostsSection = () => {
  return (
    <StyledContentSection>
      <SectionHeader title="blog-posts" />
      <div className="inner-section">
        <GeneralCard
          img={BlogPost}
          title={"Principios Solid"}
          description={"Sobre os principios do paradigma de POO"}
          link={
            "https://medium.com/@jessie_moura/arnia-english-homework-time-travel-1e6b62b9b64e"
          }
        />

        <GeneralCard
          img={BlogPost}
          title={"Principios Solid"}
          description={"Sobre os principios do paradigma de POO"}
          link={
            "https://medium.com/@jessie_moura/arnia-english-homework-time-travel-1e6b62b9b64e"
          }
        />

        <GeneralCard
          img={BlogPost}
          title={"Principios Solid"}
          description={"Sobre os principios do paradigma de POO"}
          link={
            "https://medium.com/@jessie_moura/arnia-english-homework-time-travel-1e6b62b9b64e"
          }
        />
      </div>
    </StyledContentSection>
  );
};

export default BlogPostsSection;
