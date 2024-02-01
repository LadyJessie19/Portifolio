import JavaStudies from "../assets/data-images/java-projects/java-spring-boot.png";
import Hotelium from "../assets/data-images/java-projects/hotelium.png";
import MyFood from "../assets/data-images/java-projects/my-food.png";

interface IJavaProjects {
  img: string;
  tools: string;
  name: string;
  description: string;
  link: string;
}

const javaProjects: Array<IJavaProjects> = [
  {
    img: JavaStudies,
    tools: "Java, Spring Boot",
    name: "Java Studies Repository",
    description:
      "Repository containing my Markdown files for studying Java and Spring Boot.",
    link: "https://github.com/LadyJessie19/Java_Studies",
  },
  {
    img: Hotelium,
    tools: "Java, Spring Boot",
    name: "Hotelium - Booking Reservation",
    description:
      "Final project completed during my Java Mentorship program, focusing on hotel booking reservations.",
    link: "https://github.com/LadyJessie19/Hotelium",
  },
  {
    img: MyFood,
    tools: "Java, Spring Boot",
    name: "Ranking Search - MyFood",
    description:
      "Application that aggregates the most searched foods, showcasing a ranking system.",
    link: "https://github.com/LadyJessie19/MyFood",
  },
];

export default javaProjects;
