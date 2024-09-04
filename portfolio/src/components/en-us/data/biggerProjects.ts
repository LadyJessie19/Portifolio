import WexerFrontend from "../../../assets/data-images/bigger-projects/wexer-front.png";
import WexerBackend from "../../../assets/data-images/bigger-projects/wexer-back.png";
import MetaVagasFront from "../../../assets/data-images/bigger-projects/meta-vagas-front.png";
import MetaVagasBack from "../../../assets/data-images/bigger-projects/meta-vagas-back.png";
import ArniaTaskManager from "../../../assets/data-images/bigger-projects/arnia-task-manager.png";
import ShoppingCart from "../../../assets/data-images/bigger-projects/shopping-cart.png";
import ShoppingStore from "../../../assets/data-images/bigger-projects/shopping-store.png";
import FrutamixFront from "../../../assets/data-images/bigger-projects/frutamix-front.png";
import FrutamixBack from "../../../assets/data-images/bigger-projects/frutamix-backend.png";

interface IProjects {
  img: any;
  tools: string;
  name: string;
  description: string;
  link: string;
  button: string;
}

const biggerProjects: Array<IProjects> = [
  {
    img: FrutamixFront,
    tools: "React.js, Typescript, React Router Dom, Styled Components",
    name: "Frutamix - Frontend",
    description:
      "Frontend project developed using React.js and Typescript for an ice cream shop called Frutamix.",
    link: "https://github.com/LadyJessie19/frutamix-frontend",
    button: "GitHub Repository",
  },
  {
    img: FrutamixBack,
    tools: "Nest.js, Typescript, Railway",
    name: "Frutamix - Backend",
    description:
      "Backend project developed using Nest.js and Typescript for the Frutamix app.",
    link: "https://github.com/LadyJessie19/frutamix-backend",
    button: "GitHub Repository",
  },

  {
    img: WexerFrontend,
    tools: "React.js, Typescript",
    name: "Wexer Psi - Frontend",
    description:
      "Frontend project developed using React.js and Typescript for Wexer Psi.",
    link: "https://github.com/LadyJessie19/WexerFrontend",
    button: "GitHub Repository",
  },

  {
    img: WexerBackend,
    tools: "Node.js, Clean Architecture, N-Tier, SOLID",
    name: "Wexer Psi - Backend",
    description:
      "Backend project built with Node.js, following Clean Architecture, N-Tier, and SOLID principles for Wexer Psi.",
    link: "https://github.com/LadyJessie19/WexerBackend",
    button: "GitHub Repository",
  },

  {
    img: ArniaTaskManager,
    tools: "JavaScript, HTML, CSS, json-server, Vercel, Railway",
    name: "Arnia Task Manager",
    description:
      "My inaugural project at Arnia, initially designed for academic purposes, marking my introduction to web development.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/ArniaTaskManager",
  },
  {
    img: ShoppingCart,
    tools: "React.js, Typescript",
    name: "Hortifruti - E-Commerce",
    description:
      "A small-scale e-commerce project developed for a local grocery store in my neighborhood.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/HortifruitEcommerce",
  },
  {
    img: ShoppingStore,
    tools: "React.js, Typescript",
    name: "Shopping Cart - E-Commerce",
    description:
      "A small project aimed at delving into React Hooks and understanding their functionality.",
    button: "GitHub Repository",
    link: "https://github.com/LadyJessie19/ShoppingEcommerce",
  },
  {
    img: MetaVagasBack,
    tools: "Nest.js, Typescript, Railway, PostgreSQL, Development Team",
    name: "MetaVagas - Backend",
    description: "Backend for the MetaVagas application.",
    link: "https://github.com/LadyJessie19/meta_vagas_backend",
    button: "GitHub Repository",
  },

  {
    img: MetaVagasFront,
    tools: "React.js, Typescript, Vercel, Development Team",
    name: "MetaVagas - Frontend",
    description:
      "Frontend for MetaVagas, a website designed to search developer job vacancies.",
    link: "https://github.com/LadyJessie19/meta_vagas_frontend",
    button: "GitHub Repository",
  },
];

export default biggerProjects;
