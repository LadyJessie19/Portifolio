interface ISkills {
  category: string;
  tools: string;
}

const skills: Array<ISkills> = [
  { category: "Linguagens", tools: "JavaScript Typescript Java SQL C Python" },
  { category: "Bibliotecas", tools: "React.js Bootstrap jQuery" },
  { category: "Frameworks", tools: "Spring Boot Nest.js Express.js Node.js" },
  {
    category: "Ferramentas",
    tools: "Git Jira Trello VSCode Postman Insomnia Figma Beekeeper DBeaver",
  },
  { category: "Banco de Dados", tools: "MongoDB PostgreSQL MySQL" },
  { category: "Testes", tools: "Jest" },
];

export default skills;
