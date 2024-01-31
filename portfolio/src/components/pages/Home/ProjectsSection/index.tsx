import React from "react";
import { StyledContentSection } from "../../../../styles/ReusableStyles";
import SectionHeader from "../../../reusable/SectionHeader";
import BigProjectCard from "../../../reusable/BigProjectCard";
import biggerProjects from "../../../../data/biggerProjects";

const ProjectsSection = () => {
  return (
    <StyledContentSection>
      <SectionHeader title="projects" path="/projects" />
      <div className="inner-section">
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
      </div>
    </StyledContentSection>
  );
};

export default ProjectsSection;
