import {
  StyledContentSection,
  StyledSkillsSection,
} from "../../../../../styles/ReusableStyles";
import SectionHeader from "../../../../reusable/SectionHeader";
import SkillCard from "../../../../reusable/SkillCard";
import Figures from "../../../../../assets/Figures.svg";
import skills from "../../../data/skills";
import HomeData from "../../../data/_homeData";

const SkillsSection = () => {
  return (
    <StyledContentSection>
      <SectionHeader title={HomeData.SectionTitleTwo} />
      <StyledSkillsSection>
        <div className="skills-row">
          <div className="left-side">
            <img src={Figures} alt="figures" />
          </div>
          <div className="right-side">
            {skills.map((item, index) => {
              return (
                <SkillCard
                  key={index}
                  category={item.category}
                  tools={item.tools}
                />
              );
            })}
          </div>
        </div>
      </StyledSkillsSection>
    </StyledContentSection>
  );
};

export default SkillsSection;
