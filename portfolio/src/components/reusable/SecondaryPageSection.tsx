import { ReactNode } from "react";
import {
  StyledContentDivision,
  StyledSecondaryPageSection,
} from "../../styles/ReusableStyles";

interface CompProps {
  children: ReactNode;
  title: string;
  id?: string;
}
const SecondaryPageSection = ({ children, title, id }: CompProps) => {
  return (
    <StyledSecondaryPageSection id={id}>
      <div>
        <h1>
          <span>#</span>
          {title}
        </h1>
      </div>

      <StyledContentDivision>{children}</StyledContentDivision>
    </StyledSecondaryPageSection>
  );
};

export default SecondaryPageSection;
