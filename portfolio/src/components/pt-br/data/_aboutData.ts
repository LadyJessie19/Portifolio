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
    "Olá! Eu sou Jéssica Bentes, uma desenvolvedora fullstack dedicada, residente em Campo Grande. Minha jornada na tecnologia começou com experiências diversas, incluindo produção gráfica e escrita, antes de eu encontrar minha verdadeira paixão na programação.",
  jessieBentesTwo:
    "Na Satelier, mergulhei profundamente no JavaScript. Trabalhando como monitora, me especializei em React.js, TypeScript e Node.js. Essa experiência alimentou minha paixão por resolver problemas e colaborar com a comunidade no mundo da tecnologia.",
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
