import { StyledContentSection } from "../../../../../styles/ReusableStyles";
import SectionHeader from "../../../../reusable/SectionHeader";
import BigProjectCard from "../../../../reusable/BigProjectCard";
import biggerProjects from "../../../data/biggerProjects";

import HomeData from "../../../data/_homeData";

const currentDisplay = biggerProjects.slice(0, 3);

const ProjectsSection = () => {
  return (
    <StyledContentSection>
      <SectionHeader
        title={HomeData.SectionTitleOne}
        path={HomeData.pathProjects}
      />
      <div className="inner-section">
        {currentDisplay.map((item, index) => {
          return (
            <BigProjectCard
              key={index}
              img={item.img}
              tools={item.tools}
              name={item.name}
              description={item.description}
              link={item.link}
              button={item.button}
            />
          );
        })}
      </div>
    </StyledContentSection>
  );
};

export default ProjectsSection;
