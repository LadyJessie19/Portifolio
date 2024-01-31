import LeNu from "../assets/data-images/design-ux/lofi-prototype.png";
import Personas from "../assets/data-images/design-ux/persona.png";
import CompetitiveAnalysis from "../assets/data-images/design-ux/competitive-audit.png";
import CompetitiveReport from "../assets/data-images/design-ux/competitive-audit-report.png";
import Storyboard from "../assets/data-images/design-ux/storyboard.png";
import StoryboardCloseUp from "../assets/data-images/design-ux/storyboard-closeup.png";

interface IDesignUX {
  img: string;
  tools: string;
  name: string;
  description: string;
  link: string;
}

const designUX: Array<IDesignUX> = [
  {
    img: LeNu,
    tools: "Figma, UX Design",
    name: "LeNu App - Lo-Fi Prototype",
    description:
      "This is my first Lo-Fi prototype using Figma. It was meant to show the LeNu app, a scheduled restaurant service order",
    link: "https://www.figma.com/proto/0PZ2SCNQ2IlAgJDNvAIhcg/LeNu-Wireframes?type=design&node-id=4-8&t=wfESQtGHRsrhD8RU-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A8",
  },

  {
    img: Personas,
    tools: "Google Presentation, Costumer Reviews",
    name: "Personas",
    description:
      "Definition and creation about user personas that reflects on who will use the app",
    link: "https://docs.google.com/presentation/d/1-rBktYJ4MduAXL_ygiJ1ELd8IGhDXepawtZjgFr9CfQ/edit?usp=sharing",
  },

  {
    img: CompetitiveAnalysis,
    tools: "Google Sheets, Competitive research",
    name: "Competitive Audit",
    description:
      "The research to build LeNu app gathering the similar business goals and methods",
    link: "https://docs.google.com/spreadsheets/d/1W685l2nbxf6sNDKDS53l5UfKNHvB-X-eVtp56fYxoYA/edit?usp=sharing",
  },

  {
    img: CompetitiveReport,
    tools: "Google Docs, Competive Audit",
    name: "Competitive Audit Report",
    description:
      "The report to all the data that was collected at the competitive report",
    link: "https://docs.google.com/document/d/1GFBEzkTFD1z6sqJicBRJx8SZCdAB0b87K3t006ufJ8c/edit?usp=sharing",
  },

  {
    img: Storyboard,
    tools: "Google Presentation, notebook drawning",
    name: "Storyboard",
    description:
      "This presentation was meant to create an user path throught the app",
    link: "https://docs.google.com/presentation/d/1q36yqejV4-ZYarPLhpnZAJ55rmB65fzfZE6EWQDJ68w/edit?usp=sharing&resourcekey=0-uITU2Uj63UrEhIK6u1xzPw",
  },

  {
    img: StoryboardCloseUp,
    tools: "Google Presentation, notebook drawning",
    name: "Storyboard - Close Up",
    description:
      "This was also meant to create an user path throught the app, but with a more close vision/goal",
    link: "https://docs.google.com/presentation/d/1avCgZYN9fdXuQQ5YUvkGUAqntb0bj3EWfWkuy182lxs/edit?usp=sharing&resourcekey=0-aQAnYTPMgmVEJx-WyJRJIA",
  },
];

export default designUX;
