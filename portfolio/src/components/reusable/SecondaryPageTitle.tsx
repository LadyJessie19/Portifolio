import { StyledSecondaryPageTitle } from "../../styles/ReusableStyles";

interface CompProps {
  title: string;
  description: string;
}

const SecondaryPageTitle = ({ title, description }: CompProps) => {
  return (
    <StyledSecondaryPageTitle>
      <div>
        <h1>
          <span>/</span>
          {title}
        </h1>
      </div>
      <div>
        <h2>{description}</h2>
      </div>
    </StyledSecondaryPageTitle>
  );
};

export default SecondaryPageTitle;
