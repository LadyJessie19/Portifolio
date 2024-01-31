import { StyledSkillsSection } from "../../../../styles/ReusableStyles";
import SectionHeader from "../../../reusable/SectionHeader";
import SkillCard from "../../../reusable/SkillCard";
import Figures from "../../../../assets/Figures.svg";
import skills from "../../../../data/skills";

const SkillsSection = () => {
  return (
    <StyledSkillsSection>
      <SectionHeader title="skills" />
      <div className="skills-row">
        <div className="left-side">
          <img src={Figures} alt="figures" />
        </div>
        <div className="right-side">
          {skills.map((item) => {
            return <SkillCard category={item.category} tools={item.tools} />;
          })}
        </div>
      </div>
    </StyledSkillsSection>
  );
};

export default SkillsSection;
