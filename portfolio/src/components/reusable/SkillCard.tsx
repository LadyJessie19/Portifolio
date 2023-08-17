import { StyledSkillCard } from "../../styles/ReusableStyles"

interface IProps {
  category:string,
  tools:string
}

const SkillCard = ({category, tools}:IProps) => {
  return (
    <>
      <StyledSkillCard>
        <div className="first-row">{category}</div>
        <div className="second-row">{tools}</div>
      </StyledSkillCard>
    </>
  )
}

export default SkillCard