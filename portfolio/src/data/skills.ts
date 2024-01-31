interface ISkills {
  category: string;
  tools: string;
}

const skills: Array<ISkills> = [
  {
    category: "Languages",
    tools: "JavaScript",
  },
  {
    category: "Languages",
    tools: "Java",
  },
  {
    category: "Languages",
    tools: "SQL",
  },

  {
    category: "Languages",
    tools: "Typescript",
  },

  { category: "Frameworks", tools: "Spring Boot" },

  { category: "Frameworks", tools: "Nest.js" },
  { category: "Frameworks", tools: "Express.js" },
  { category: "Frameworks", tools: "Node.js" },
  { category: "Libraries", tools: "React.js" },
  { category: "Tools", tools: "GIT" },
  { category: "Tools", tools: "Jira" },
  { category: "Tools", tools: "VSCode" },
  { category: "Tools", tools: "Figma" },
  { category: "Database", tools: "MongoDB" },
  { category: "Database", tools: "PostgreSQL" },
  { category: "Database", tools: "MySQL" },
];

export default skills;
