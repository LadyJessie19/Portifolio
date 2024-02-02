import { useLanguage } from "../../../context/LanguageProvider";

import Portuguese from "./Portuguese";
import English from "./English";

const { language } = useLanguage() || { language: "EN-US" };

const HomeData: any = {
  SectionTitleOne:
    language === "EN-US"
      ? English._homeData.SectionTitleOne
      : Portuguese._homeData.SectionTitleOne,
};

export default HomeData;
