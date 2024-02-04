import TimeTravel from "../../../assets/data-images/blog-posts/time-travel.png";
import SOLID from "../../../assets/data-images/blog-posts/solid.png";
import SoftSkills from "../../../assets/data-images/blog-posts/soft-skills.png";
import FullStackUX from "../../../assets/data-images/blog-posts/fullstack-ux.png";

interface IBlogPost {
  img: any;
  title: string;
  description: string;
  link: string;
  button: string;
}

const blogPosts: Array<IBlogPost> = [
  {
    img: SOLID,
    title: "Princípios SOLID",
    description:
      "Descubra como explicar os princípios SOLID de uma forma divertida e acessível usando uma metáfora de blocos de LEGO neste artigo envolvente.",
    link: "https://medium.com/@jessie_moura/explorando-os-princ%C3%ADpios-solid-construindo-com-blocos-de-lego-2707b12ae48e",
    button: "Leia mais",
  },

  {
    img: SoftSkills,
    title: "Soft Skills",
    description:
      "Explore como as habilidades interpessoais podem fazer a diferença na carreira de um programador e por que são tão importantes, mesmo para iniciantes. Continue lendo para descobrir mais!",
    link: "https://medium.com/@jessie_moura/os-estagi%C3%A1rios-como-o-filme-mostra-a-import%C3%A2ncia-das-soft-skills-para-os-programadores-iniciantes-d939cbc483dd",
    button: "Leia mais",
  },

  {
    img: FullStackUX,
    title: "Design de UX e Desenvolvimento Web",
    description:
      "Descubra como o conhecimento em Design de UX pode ser uma vantagem significativa para desenvolvedores fullstack e como pode impulsionar suas habilidades e projetos.",
    link: "https://medium.com/@jessie_moura/a-vantagem-do-conhecimento-em-ux-para-desenvolvedores-fullstack-38196b871c75",
    button: "Leia mais",
  },
  {
    img: TimeTravel,
    title: "Tarefa de Inglês da Arnia | Viagem no Tempo",
    description:
      "Imagine conversar com seu eu mais jovem e receber respostas surpreendentes. Leia para descobrir como essa jornada no tempo pode revelar insights inesperados.",
    link: "https://medium.com/@jessie_moura/arnia-english-homework-time-travel-1e6b62b9b64e",
    button: "Leia mais",
  },
];

export default blogPosts;
