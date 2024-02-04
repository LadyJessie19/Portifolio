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
    title: "SOLID Principles",
    description:
      "Find out how to explain SOLID principles in a fun and accessible way using a LEGO block metaphor in this engaging article.",
    link: "https://medium.com/@jessie_moura/explorando-os-princ%C3%ADpios-solid-construindo-com-blocos-de-lego-2707b12ae48e",
    button: "Read here",
  },

  {
    img: SoftSkills,
    title: "Soft Skills",
    description:
      "Explore how soft skills can make a difference in a programmer's career and why they are so important, even for beginners. Read on to find out more!",
    link: "https://medium.com/@jessie_moura/os-estagi%C3%A1rios-como-o-filme-mostra-a-import%C3%A2ncia-das-soft-skills-para-os-programadores-iniciantes-d939cbc483dd",
    button: "Read here",
  },

  {
    img: FullStackUX,
    title: "UX Design and Web Development",
    description:
      "Discover how UX Design knowledge can be a significant advantage for fullstack developers and how it can drive their skills and projects forward.",
    link: "https://medium.com/@jessie_moura/a-vantagem-do-conhecimento-em-ux-para-desenvolvedores-fullstack-38196b871c75",
    button: "Read here",
  },

  {
    img: TimeTravel,
    title: "Arnia English Homework | Time Travel",
    description:
      "Imagine conversing with your younger self and receiving surprising responses. Read on to discover how this journey through time can unveil unexpected insights.",
    link: "https://medium.com/@jessie_moura/arnia-english-homework-time-travel-1e6b62b9b64e",
    button: "Read here",
  },
];

export default blogPosts;
