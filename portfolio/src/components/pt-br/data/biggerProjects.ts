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
      "Projeto frontend desenvolvido usando React.js e Typescript para o Wexer Psi.",
    link: "https://github.com/LadyJessie19/wexerFrontend",
    button: "Repositório GitHub",
  },

  {
    img: WexerBackend,
    tools: "Node.js, Clean Architecture, N-Tier, SOLID",
    name: "Wexer Psi - Backend",
    description:
      "Projeto backend construído com Node.js, seguindo os princípios de Clean Architecture, N-Tier e SOLID para o Wexer Psi.",
    link: "https://github.com/LadyJessie19/wexerBackend",
    button: "Repositório GitHub",
  },
  {
    img: MetaVagasBack,
    tools: "Nest.js, Typescript, Railway, Development Team",
    name: "MetaVagas - Backend",
    description: "Backend para o aplicativo MetaVagas.",
    link: "https://github.com/LadyJessie19/meta_vagas_backend",
    button: "Repositório GitHub",
  },
  {
    img: MetaVagasFront,
    tools: "React.js, Typescript, Vercel, Development Team",
    name: "MetaVagas - Frontend",
    description:
      "Frontend para o MetaVagas, um site projetado para buscar vagas de emprego para desenvolvedores.",
    link: "https://github.com/LadyJessie19/meta_vagas_frontend",
    button: "Repositório GitHub",
  },
];

export default biggerProjects;
