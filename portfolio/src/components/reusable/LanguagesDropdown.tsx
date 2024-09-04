import Dropdown from "../../assets/Dropdown.svg";
import { StyledDropdown } from "../../styles/ReusableStyles";
import { useLanguage } from "../../contexts/LanguageProvider";
import { useState } from "react";

const LanguagesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const optionsPaths = [
    { option: "EN-US", path: "/us" },
    {
      option: "PT-BR",
      path: "/br",
    },
  ];
  const { language, changeLanguage } = useLanguage() || {
    language: localStorage.getItem("language") || "EN-US",
    changeLanguage: () => {},
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string, path: string) => {
    changeLanguage(option, path);
    setIsOpen(false);
  };

  return (
    <StyledDropdown>
      <div onClick={toggleDropdown} className="dropdown-toggle">
        {language}&nbsp;
        <img src={Dropdown} />
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {optionsPaths.map((item, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(item.option, item.path)}>
              {item.option}
            </li>
          ))}
        </ul>
      )}
    </StyledDropdown>
  );
};

export default LanguagesDropdown;
