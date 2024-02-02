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
    tools: "JavaScript, HTML, CSS, json-server, Vercel, Railway",
    title: "Arnia Task Manager",
    description:
      "My inaugural project at Arnia, initially designed for academic purposes, marking my introduction to web development.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/Arnia_Task_Manager/tree/main",
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
    tools: "React.js, Typescript",
    title: "Hortifruti - E-Commerce",
    description:
      "A small-scale e-commerce project developed for a local grocery store in my neighborhood.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/Hortifruti_E-commerce/tree/staging",
  },
  {
    tools: "React.js, Typescript",
    title: "Shopping Cart - E-Commerce",
    description:
      "A small project aimed at delving into React Hooks and understanding their functionality.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/Shopping_E-commerce/tree/staging",
  },
  {
    tools: "JavaScript, HTML, C#",
    title: "String Format JS/C#",
    description: "A string formatter in JavaScript that implements C# logic.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/String-Format-JS-CSharp",
  },
];

export default smallerProjects;
