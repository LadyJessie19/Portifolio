import ArniaCertificate from "../../../assets/data-images/certificates/arnia-fullstack.png";
import JavaSpringBoot from "../../../assets/data-images/certificates/java-spring-boot-certificate.png";
import Typescript from "../../../assets/data-images/certificates/typescript.png";
import DesignUXOne from "../../../assets/data-images/certificates/design-ux.png";
import DesignUXTwo from "../../../assets/data-images/certificates/empathy.png";
import DesignUXThree from "../../../assets/data-images/certificates/wireframes.png";

interface ICertificates {
  img: any;
  title: string;
  description: string;
  link: string;
  button: string;
}

const certificates: Array<ICertificates> = [
  {
    img: ArniaCertificate,
    title: "Fullstack Developer Certification",
    description: "Earned the Fullstack Developer certificate from Arnia.",
    link: "https://www.linkedin.com/in/jessiemoura/details/certifications/1635555790018/single-media-viewer/?type=IMAGE&profileId=ACoAAD6E-xEBIvRRy_KaUTviLPge8Ak7-qFsObU",
    button: "View here",
  },
  {
    img: DesignUXOne,
    title: "Design UX - Fundamentals Certification",
    description:
      "Achieved Google UX Certificate (1/7) covering UX design fundamentals.",
    link: "https://www.coursera.org/account/accomplishments/verify/6TCCGLQ65RLX",
    button: "View here",
  },
  {
    img: JavaSpringBoot,
    title: "Java | Spring Boot Certification",
    description: "Completed Java studies with a focus on Spring Boot at Udemy.",
    link: "https://www.udemy.com/certificate/UC-ee3de95e-2a36-412b-860c-d94566b64a6d/",
    button: "View here",
  },

  {
    img: DesignUXTwo,
    title: "Design UX - Empathy Certification",
    description:
      "Earned Google UX Certificate (2/7) focusing on empathy in UX design.",
    link: "https://www.coursera.org/account/accomplishments/verify/B3NGU29HH9KP",
    button: "View here",
  },
  {
    img: DesignUXThree,
    title: "Design UX - Wireframes | Lo-Fi Prototypes Certification",
    description:
      "Completed Google UX Certificate (3/7) covering wireframes and lo-fi prototypes.",
    link: "https://www.coursera.org/account/accomplishments/verify/DPMZ5HJJE443",
    button: "View here",
  },
  {
    img: Typescript,
    title: "Typescript Certification",
    description:
      "Completed Typescript and Object-Oriented Programming (OOP) studies at Udemy.",
    link: "https://www.udemy.com/certificate/UC-580be9ad-a4ee-4dfc-b047-f378d21dd3eb/",
    button: "View here",
  },
];

export default certificates;
