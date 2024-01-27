import React from "react";
import { StyledContentSection } from "../../../../styles/ReusableStyles";
import SectionHeader from "../../../reusable/SectionHeader";
import BigProjectCard from "../../../reusable/BigProjectCard";
import Site from "../../../../assets/site.png";

interface IProjects {
  img: any;
  tools: string;
  name: string;
  description: string;
  link: string;
}

const biggerProjects: Array<IProjects> = [
  {
    img: Site,
    tools: "HTML CSS JavaScript",
    name: "ChertNodes1",
    description: "Alô! Lorem Lorem Lorem",
    link: "https://github.com/LadyJessie19/String-Format-JS-CSharp",
  },
  {
    img: Site,
    tools: "HTML CSS JavaScript",
    name: "ChertNodes2",
    description: "Alô! Lorem Lorem Lorem",
    link: "https://github.com/LadyJessie19/String-Format-JS-CSharp",
  },
  {
    img: Site,
    tools: "HTML CSS JavaScript",
    name: "ChertNodes3",
    description: "Alô! Lorem Lorem Lorem",
    link: "https://github.com/LadyJessie19/String-Format-JS-CSharp",
  },
];

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
