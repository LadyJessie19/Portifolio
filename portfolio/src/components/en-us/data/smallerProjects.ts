interface ISmallerProjects {
  tools: string;
  title: string;
  description: string;
  button: string;
  link: string;
}

const smallerProjects: Array<ISmallerProjects> = [
  {
    tools: "JavaScript, HTML",
    title: "I-Common Manual",
    description:
      "Documentation created for a small software project during my first internship. Although I didn't participate in its development, I authored the manual.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/I-Common_Documentation",
  },
  {
    tools: "JavaScript, HTML, DOM",
    title: "ReHT - Responsive Table Generator",
    description:
      "A small program capable of generating responsive tables on-screen based on user-selected rows and columns.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/ReHT_Table_Generator",
  },
  {
    tools: "JavaScript, HTML, C#",
    title: "String Format JS/C#",
    description: "A string formatter in JavaScript that implements C# logic.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/String-Format-JS-CSharp",
  },
  {
    tools:
      "React.js, Typescript, React Hooks, React Router Dom, Styled Components",
    title: "Arnia Monitorship - React.js",
    description:
      "React.js tutoring for students at Arnia, a programming school.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/MonitorshipReactJS",
  },
  {
    tools: "Node.js, Typescript, MongoDB, SOLID, TDD, Jest, Vitest",
    title: "Arnia Monitorship - Node.js",
    description:
      "Node.js tutoring for students at Arnia, a programming school.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/MonitorshipNodeJS",
  },
  {
    tools: "Java, OOP",
    title: "Classes - Java",
    description: "Java classes to introduce the language to Arnia's students.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/JavaArnia",
  },
  {
    tools:
      "React.js, Typescript, Components, Props, State, React Hooks, React Router Dom, Styled Components",
    title: "Classes - React.js",
    description:
      "Classes on the React.js library for beginners in advanced frontend development.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/ReactArnia",
  },
];

export default smallerProjects;
