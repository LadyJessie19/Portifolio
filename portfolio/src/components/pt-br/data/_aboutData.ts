interface IAbout {
  pageTitle: string;
  pageDescription: string;
  pageSectionTitleOne: string;
  pageSectionTitleTwo: string;
  pageSectionTitleThree: string;
  pageSectionTitleFour: string;
  jessieBentesOne: string;
  jessieBentesTwo: string;
  jessieBentesThree: string;
  jessieBentesFour: string;
  funFacts: string[];
}

const AboutMeData: IAbout = {
  pageTitle: "sobre-mim",
  pageDescription: "Quem sou eu?",
  pageSectionTitleOne: "jessie-bentes",
  pageSectionTitleTwo: "habilidades",
  pageSectionTitleThree: "certificados",
  pageSectionTitleFour: "meus-fatos-divertidos",
  jessieBentesOne:
    "Olá! Eu sou Jéssica Bentes, uma criativa desenvolvedora fullstack, residente em Campo Grande. Minha jornada na tecnologia começou com experiências diversas, incluindo produção gráfica e escrita, antes de eu encontrar minha verdadeira paixão na programação.",
  jessieBentesTwo:
    "Em resumo, já trabalhei em um gerenciador de pacientes usando React.js, Node.js, MongoDB e Mongoose. Participei de uma aplicação de vagas de programação com Nest.js, TypeORM e PostgreSQL, minha primeira experiência em equipe. Desenvolvi uma plataforma de contato para médicos e hospitais com Spring Boot e AWS. Criei um sistema de ranking de comidas usando Spring Boot, MongoDB, Swagger e Railway para deploy. Trabalhei em um gerenciador de atendimentos para uma empresa de eventos com Spring Boot, MySQL e AWS, utilizando instâncias de desenvolvimento e homologação, além do Cognito para autenticação.",
  jessieBentesThree:
    "Impulsionada pelo desejo de contribuir de forma significativa para o campo, me dediquei a dominar várias linguagens e frameworks de programação. Sou profundamente inspirada pelo potencial da tecnologia em criar mudanças positivas e melhorar vidas.",
  jessieBentesFour:
    "Ansiosa para conversar com outros desenvolvedores, compartilhar insights e continuar minha jornada de crescimento e inovação no dinâmico mundo do desenvolvimento de software!",
  funFacts: [
    "Meu prato preferido é pizza (com muita pimenta).",
    "Me considero uma desensevolvedora/escritora.",
    "Sonho em visitar a Coreia do Sul.",
    "Um dos meus hobbies favoritos é jogar videogames.",
    "Consigo dizer 'eu te amo' em 7 linguagens diferentes.",
    "Sou apaixonada por música.",
  ],
};

export default AboutMeData;
