interface ISkills {
  category: string;
  tools: string;
}

const skills: Array<ISkills> = [
  { category: "Languages", tools: "JavaScript Typescript Java SQL C Python" },
  { category: "Libraries", tools: "React.js Bootstrap jQuery" },
  { category: "Frameworks", tools: "Spring Boot Nest.js Express.js Node.js" },
  {
    category: "Tools",
    tools: "Git Jira Trello VSCode Postman Insomnia Figma",
  },
  { category: "Database", tools: "MongoDB PostgreSQL MySQL" },
  { category: "Testing", tools: "Jest" },
];

export default skills;
