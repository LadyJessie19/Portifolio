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
    title: "I-Common manual",
    description:
      "This was a small software from my first internship company. I didn't take a part at his development, but I created the manual.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/I-Common_Documentation",
  },

  {
    tools: "JavaScript, HTML, CSS, json-server, Vercel, Railway",
    title: "Arnia Task Manager",
    description:
      "This was my first project ever at Arnia. It suited more for academic purposes, but it was the first time that i had a web project",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/Arnia_Task_Manager/tree/main",
  },

  {
    tools: "JavaScript, HTML, DOM",
    title: "ReHT - Responsive Table Generator",
    description:
      "This is a small programm that generates a table at the screen with the selected rows and columns, and is responsive with the screen",
    button: "GitHub Respository",
    link: "https://github.com/LadyJessie19/ReHT_Table_Generator",
  },
  {
    tools: "React.js, Typescript",
    title: "Hortifruti - E-Commerce",
    description:
      "This is a small project for a local grocery store at my neighborhood",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/Hortifruti_E-commerce/tree/staging",
  },
  {
    tools: "React.js, Typescript",
    title: "Shopping Cart - E-Commerce",
    description:
      "This is a small project with the purpose to understand more about React Hooks",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/Shopping_E-commerce/tree/staging",
  },
  {
    tools: "JavaScript, HTML, C#",
    title: "String Format JS/C#",
    description: "This is a string formater in JavaScript tha uses C# logic",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/String-Format-JS-CSharp",
  },
];

export default smallerProjects;
