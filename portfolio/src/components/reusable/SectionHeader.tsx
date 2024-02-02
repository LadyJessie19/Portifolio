import { StyledSectionHeader } from "../../styles/ReusableStyles";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageProvider";

interface IProps {
  title: string;
  path?: string;
}

const SectionHeader = ({ title, path }: IProps) => {
  const { language } = useLanguage() || { language: "EN-US" };
  return (
    <>
      <StyledSectionHeader>
        <div className="inner-header">
          <div className="left-header">
            <p>
              <span>#</span>
              {title}
            </p>
            <div className="pink-line">&nbsp;</div>
          </div>
          {path && (
            <div className="right-header">
              <Link to={path}>
                {" "}
                {language === "EN-US" ? "View All" : "Ver tudo"} ▶
              </Link>
            </div>
          )}
        </div>
      </StyledSectionHeader>
    </>
  );
};

export default SectionHeader;
