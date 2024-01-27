import React, { ReactNode } from "react";
import { StyledSecondaryPageSection } from "../../styles/ReusableStyles";

interface CompProps {
  children: ReactNode;
  title: string;
}
const SecondaryPageSection = ({ children, title }: CompProps) => {
  return (
    <StyledSecondaryPageSection>
      <div>
        <h1>
          <span>#</span>
          {title}
        </h1>
      </div>

      <div>{children}</div>
    </StyledSecondaryPageSection>
  );
};

export default SecondaryPageSection;
