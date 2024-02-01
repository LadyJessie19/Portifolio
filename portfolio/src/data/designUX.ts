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
      "First Lo-Fi prototype created using Figma to showcase the LeNu app, a scheduled restaurant service order system.",
    link: "https://www.figma.com/proto/0PZ2SCNQ2IlAgJDNvAIhcg/LeNu-Wireframes?type=design&node-id=4-8&t=wfESQtGHRsrhD8RU-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A8",
  },

  {
    img: Personas,
    tools: "Google Presentation, Customer Reviews",
    name: "Personas",
    description:
      "Creation of user personas to reflect the target audience and their needs for the app.",
    link: "https://docs.google.com/presentation/d/1-rBktYJ4MduAXL_ygiJ1ELd8IGhDXepawtZjgFr9CfQ/edit?usp=sharing",
  },

  {
    img: CompetitiveAnalysis,
    tools: "Google Sheets, Competitive Research",
    name: "Competitive Audit",
    description:
      "Research conducted to gather data on similar businesses, their goals, and methods to inform the development of the LeNu app.",
    link: "https://docs.google.com/spreadsheets/d/1W685l2nbxf6sNDKDS53l5UfKNHvB-X-eVtp56fYxoYA/edit?usp=sharing",
  },

  {
    img: CompetitiveReport,
    tools: "Google Docs, Competitive Audit",
    name: "Competitive Audit Report",
    description:
      "Report summarizing the data collected during the competitive audit process.",
    link: "https://docs.google.com/document/d/1GFBEzkTFD1z6sqJicBRJx8SZCdAB0b87K3t006ufJ8c/edit?usp=sharing",
  },

  {
    img: Storyboard,
    tools: "Google Presentation, Notebook Drawing",
    name: "Storyboard",
    description:
      "Presentation outlining the user's path through the app to visualize the user experience.",
    link: "https://docs.google.com/presentation/d/1q36yqejV4-ZYarPLhpnZAJ55rmB65fzfZE6EWQDJ68w/edit?usp=sharing&resourcekey=0-uITU2Uj63UrEhIK6u1xzPw",
  },

  {
    img: StoryboardCloseUp,
    tools: "Google Presentation, Notebook Drawing",
    name: "Storyboard - Close Up",
    description:
      "Detailed presentation focusing on specific user paths within the app for a closer examination of the user experience.",
    link: "https://docs.google.com/presentation/d/1avCgZYN9fdXuQQ5YUvkGUAqntb0bj3EWfWkuy182lxs/edit?usp=sharing&resourcekey=0-aQAnYTPMgmVEJx-WyJRJIA",
  },
];

export default designUX;
