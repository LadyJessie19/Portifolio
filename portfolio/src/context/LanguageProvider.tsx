import React, { createContext, useContext, useState } from "react";

interface ILanguageContext {
  children: React.ReactNode;
  navigate: (path: string) => void;
}

interface LanguageContextType {
  language: string;
  changeLanguage: (newLanguage: string, newPath: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children, navigate }: ILanguageContext) => {
  const [language, setLanguage] = useState("EN-US");
  const changeLanguage = (newLanguage: string, newPath: string) => {
    navigate(newPath);
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
