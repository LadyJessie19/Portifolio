import WexerFrontend from "../assets/data-images/bigger-projects/wexer-front.png";
import WexerBackend from "../assets/data-images/bigger-projects/wexer-back.png";
import MetaVagasFront from "../assets/data-images/bigger-projects/meta-vagas-front.png";
import MetaVagasBack from "../assets/data-images/bigger-projects/meta-vagas-back.png";

interface IProjects {
  img: any;
  tools: string;
  name: string;
  description: string;
  link: string;
}

const biggerProjects: Array<IProjects> = [
  {
    img: WexerFrontend,
    tools: "React.js, Typescript",
    name: "Wexer Psi - Frontend",
    description:
      "This is a frontend project that I built up using React.js and Typescript",
    link: "https://github.com/LadyJessie19/wexerFrontend",
  },

  {
    img: WexerBackend,
    tools: "Node.js, Clean Architecture, N-Tier, SOLID",
    name: "Wexer Psi - Backend",
    description:
      "This is a backend project that was made with node.js framework",
    link: "https://github.com/LadyJessie19/wexerBackend",
  },

  {
    img: MetaVagasFront,
    tools: "React.js, Typescript, Vercel, Development Team",
    name: "MetaVagas - Frontend",
    description:
      "The frontend to a website that is meant to search all the developer vacancies",
    link: "https://github.com/LadyJessie19/meta_vagas_frontend",
  },

  {
    img: MetaVagasBack,
    tools: "Nest.js, Typescript, Railway, Development Team",
    name: "MetaVagas - Backend",
    description: "The backend to MetaVagas application",
    link: "https://github.com/LadyJessie19/meta_vagas_backend",
  },
];

export default biggerProjects;
