import WexerFrontend from "../../../assets/data-images/bigger-projects/wexer-front.png";
import WexerBackend from "../../../assets/data-images/bigger-projects/wexer-back.png";
import MetaVagasFront from "../../../assets/data-images/bigger-projects/meta-vagas-front.png";
import MetaVagasBack from "../../../assets/data-images/bigger-projects/meta-vagas-back.png";

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
    img: WexerFrontend,
    tools: "React.js, Typescript",
    name: "Wexer Psi - Frontend",
    description:
      "Frontend project developed using React.js and Typescript for Wexer Psi.",
    link: "https://github.com/LadyJessie19/wexerFrontend",
    button: "GitHub Repository",
  },

  {
    img: WexerBackend,
    tools: "Node.js, Clean Architecture, N-Tier, SOLID",
    name: "Wexer Psi - Backend",
    description:
      "Backend project built with Node.js, following Clean Architecture, N-Tier, and SOLID principles for Wexer Psi.",
    link: "https://github.com/LadyJessie19/wexerBackend",
    button: "GitHub Repository",
  },
  {
    img: MetaVagasBack,
    tools: "Nest.js, Typescript, Railway, Development Team",
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
