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
      "Projeto frontend desenvolvido usando React.js e Typescript para uma loja de compra de sorvetes chamada Frutamix.",
    link: "https://github.com/LadyJessie19/frutamix-frontend",
    button: "Repositório GitHub",
  },
  {
    img: FrutamixBack,
    tools: "Nest.js, Typescript, Railway,",
    name: "Frutamix - Backend",
    description:
      "Projeto backend desenvolvido usando Nest.js e Typescript para o app do Frutamix.",
    link: "https://github.com/LadyJessie19/frutamix-backend",
    button: "Repositório GitHub",
  },
  {
    img: WexerFrontend,
    tools: "React.js, Typescript",
    name: "Wexer Psi - Frontend",
    description:
      "Projeto frontend desenvolvido usando React.js e Typescript para o Wexer Psi.",
    link: "https://github.com/LadyJessie19/WexerFrontend",
    button: "Repositório GitHub",
  },
  {
    img: WexerBackend,
    tools: "Node.js, Clean Architecture, N-Tier, SOLID",
    name: "Wexer Psi - Backend",
    description:
      "Projeto backend construído com Node.js, seguindo os princípios de Clean Architecture, N-Tier e SOLID para o Wexer Psi.",
    link: "https://github.com/LadyJessie19/WexerBackend",
    button: "Repositório GitHub",
  },
  {
    img: ArniaTaskManager,
    tools: "JavaScript, HTML, CSS, json-server, Vercel, Railway",
    name: "Gerenciador de Tarefas Arnia",
    description:
      "Meu primeiro projeto na Arnia, inicialmente projetado para fins acadêmicos, marcando minha introdução ao desenvolvimento web.",
    link: "https://github.com/LadyJessie19/ArniaTaskManager",
    button: "Repositório GitHub",
  },
  {
    img: ShoppingCart,
    tools: "React.js, Typescript",
    name: "Hortifruti - E-Commerce",
    description:
      "Um projeto acadêmico de e-commerce em pequena escala desenvolvido para um mercado local em meu bairro.",
    button: "Repositório no GitHub",
    link: "https://github.com/LadyJessie19/HortifruitEcommerce",
  },
  {
    img: ShoppingStore,
    tools: "React.js, Typescript",
    name: "Carrinho de Compras - E-Commerce",
    description:
      "Um pequeno projeto destinado a explorar os React Hooks e entender sua funcionalidade.",
    button: "Repositório no GitHub",
    link: "https://github.com/LadyJessie19/ShoppingEcommerce",
  },
  {
    img: MetaVagasBack,
    tools: "Nest.js, Typescript, Railway, Equipe de Desenvolvimento",
    name: "MetaVagas - Backend",
    description: "Backend para o aplicativo MetaVagas.",
    link: "https://github.com/LadyJessie19/meta_vagas_backend",
    button: "Repositório GitHub",
  },
  {
    img: MetaVagasFront,
    tools: "React.js, Typescript, Vercel, Equipe de Desenvolvimento",
    name: "MetaVagas - Frontend",
    description:
      "Frontend para o MetaVagas, um site projetado para buscar vagas de emprego para desenvolvedores.",
    link: "https://github.com/LadyJessie19/meta_vagas_frontend",
    button: "Repositório GitHub",
  },
];

export default biggerProjects;
