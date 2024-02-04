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
    title: "Manual I-Common",
    description:
      "Documentação criada para um pequeno projeto de software durante meu primeiro estágio. Embora eu não tenha participado do seu desenvolvimento, fui responsável pela autoria do manual.",
    button: "Repositório no GitHub",
    link: "https://github.com/LadyJessie19/I-Common_Documentation",
  },

  {
    tools: "JavaScript, HTML, CSS, json-server, Vercel, Railway",
    title: "Gerenciador de Tarefas Arnia",
    description:
      "Meu primeiro projeto na Arnia, inicialmente projetado para fins acadêmicos, marcando minha introdução ao desenvolvimento web.",
    button: "Repositório no GitHub",
    link: "https://github.com/LadyJessie19/Arnia_Task_Manager/tree/main",
  },

  {
    tools: "JavaScript, HTML, DOM",
    title: "ReHT - Gerador de Tabelas Responsivas",
    description:
      "Um pequeno programa capaz de gerar tabelas responsivas na tela com base nas linhas e colunas selecionadas pelo usuário.",
    button: "Repositório no GitHub",
    link: "https://github.com/LadyJessie19/ReHT_Table_Generator",
  },
  {
    tools: "React.js, Typescript",
    title: "Hortifruti - E-Commerce",
    description:
      "Um projeto acadêmico de e-commerce em pequena escala desenvolvido para um mercado local em meu bairro.",
    button: "Repositório no GitHub",
    link: "https://github.com/LadyJessie19/Hortifruti_E-commerce/tree/staging",
  },
  {
    tools: "React.js, Typescript",
    title: "Carrinho de Compras - E-Commerce",
    description:
      "Um pequeno projeto destinado a explorar os React Hooks e entender sua funcionalidade.",
    button: "Repositório no GitHub",
    link: "https://github.com/LadyJessie19/Shopping_E-commerce/tree/staging",
  },
  {
    tools: "JavaScript, HTML, C#",
    title: "String Format JS/C#",
    description:
      "Um formatador de strings em JavaScript que implementa a lógica do C#.",
    button: "Repositório no GitHub",
    link: "https://github.com/LadyJessie19/String-Format-JS-CSharp",
  },
];

export default smallerProjects;
