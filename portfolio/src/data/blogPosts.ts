import TimeTravel from "../assets/data-images/blog-posts/time-travel.png";
import SOLID from "../assets/data-images/blog-posts/solid.png";
import SoftSkills from "../assets/data-images/blog-posts/soft-skills.png";
import FullStackUX from "../assets/data-images/blog-posts/fullstack-ux.png";

interface IBlogPost {
  img: any;
  title: string;
  description: string;
  link: string;
}

const blogPosts: Array<IBlogPost> = [
  {
    img: TimeTravel,
    title: "Arnia English Homework | Time Travel",
    description:
      "What would you tell to your yonger self and what would your younger self would reply",
    link: "https://medium.com/@jessie_moura/arnia-english-homework-time-travel-1e6b62b9b64e",
  },

  {
    img: SOLID,
    title: "SOLID Principles",
    description:
      "Could we explain better the solid principles by using an lego metafore",
    link: "https://medium.com/@jessie_moura/explorando-os-princ%C3%ADpios-solid-construindo-com-blocos-de-lego-2707b12ae48e",
  },

  {
    img: SoftSkills,
    title: "Soft skills",
    description:
      "Could the soft skills be a difference that matters to all the programmers?",
    link: "https://medium.com/@jessie_moura/os-estagi%C3%A1rios-como-o-filme-mostra-a-import%C3%A2ncia-das-soft-skills-para-os-programadores-iniciantes-d939cbc483dd",
  },

  {
    img: FullStackUX,
    title: "UX Design and Web Development",
    description: "Could UX Design knoloed be a levarege to the fullstack devs?",
    link: "https://medium.com/@jessie_moura/a-vantagem-do-conhecimento-em-ux-para-desenvolvedores-fullstack-38196b871c75",
  },
];

export default blogPosts;
