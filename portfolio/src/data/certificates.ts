import ArniaCertificate from "../assets/data-images/certificates/arnia-fullstack.png";
import JavaSpringBoot from "../assets/data-images/certificates/java-spring-boot-certificate.png";
import Typescript from "../assets/data-images/certificates/typescript.png";
import DesignUXOne from "../assets/data-images/certificates/design-ux.png";
import DesignUXTwo from "../assets/data-images/certificates/empathy.png";
import DesignUXThree from "../assets/data-images/certificates/wireframes.png";

interface ICertificates {
  img: any;
  title: string;
  description: string;
  link: string;
}

const certificates: Array<ICertificates> = [
  {
    img: ArniaCertificate,
    title: "Fullstack developer",
    description: "The fullstack development certificate from Arnia",
    link: "https://www.linkedin.com/in/jessiemoura19/details/certifications/1635555790018/single-media-viewer/?type=IMAGE&profileId=ACoAAD6E-xEBIvRRy_KaUTviLPge8Ak7-qFsObU",
  },
  {
    img: JavaSpringBoot,
    title: "Java | Spring Boot",
    description: "Java studies at Udemy",
    link: "https://www.udemy.com/certificate/UC-ee3de95e-2a36-412b-860c-d94566b64a6d/",
  },
  {
    img: Typescript,
    title: "Typescript",
    description: "Typescript and POO studies at Udemy",
    link: "https://www.udemy.com/certificate/UC-580be9ad-a4ee-4dfc-b047-f378d21dd3eb/",
  },
  {
    img: DesignUXOne,
    title: "Design UX - Fundamentals",
    description: "Google UX Certificate 1/7",
    link: "https://www.coursera.org/account/accomplishments/verify/6TCCGLQ65RLX",
  },
  {
    img: DesignUXTwo,
    title: "Design UX - Empathy",
    description: "Google UX Certificate 2/7",
    link: "https://www.coursera.org/account/accomplishments/verify/B3NGU29HH9KP",
  },
  {
    img: DesignUXThree,
    title: "Design UX - Wireframes | Lo-Fi Prototypes",
    description: "Google UX Certificate 3/7",
    link: "https://www.coursera.org/account/accomplishments/verify/DPMZ5HJJE443",
  },
];

export default certificates;
