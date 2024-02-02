import JavaStudies from "../../../assets/data-images/java-projects/java-spring-boot.png";
import Hotelium from "../../../assets/data-images/java-projects/hotelium.png";
import MyFood from "../../../assets/data-images/java-projects/my-food.png";

interface IJavaProjects {
  img: string;
  tools: string;
  name: string;
  description: string;
  link: string;
  button: string;
}

const javaProjects: Array<IJavaProjects> = [
  {
    img: JavaStudies,
    tools: "Java, Spring Boot",
    name: "Repositório de Estudos Java",
    description:
      "Repositório contendo meus arquivos Markdown para estudar Java e Spring Boot.",
    link: "https://github.com/LadyJessie19/Java_Studies",
    button: "Repositório",
  },
  {
    img: Hotelium,
    tools: "Java, Spring Boot",
    name: "Hotelium - Reserva de Quartos",
    description:
      "Projeto final concluído durante meu programa de mentoria em Java, focado em reservas de quartos de hotel.",
    link: "https://github.com/LadyJessie19/Hotelium",
    button: "Repositório",
  },
  {
    img: MyFood,
    tools: "Java, Spring Boot",
    name: "Ranking de Busca - MyFood",
    description:
      "Aplicativo que agrega os alimentos mais pesquisados, mostrando um sistema de classificação.",
    link: "https://github.com/LadyJessie19/MyFood",
    button: "Repositório",
  },
];

export default javaProjects;
