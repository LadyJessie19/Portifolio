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
    title: "Certificado de Desenvolvedor Fullstack",
    description: "Obtive o certificado de Desenvolvedor Fullstack da Arnia.",
    link: "https://www.linkedin.com/in/jessiemoura19/details/certifications/1635555790018/single-media-viewer/?type=IMAGE&profileId=ACoAAD6E-xEBIvRRy_KaUTviLPge8Ak7-qFsObU",
    button: "Veja mais",
  },
  {
    img: DesignUXOne,
    title: "Certificação em Design UX - Fundamentos",
    description:
      "Consegui o Certificado de UX do Google (1/7) cobrindo fundamentos de design UX.",
    link: "https://www.coursera.org/account/accomplishments/verify/6TCCGLQ65RLX",
    button: "Veja mais",
  },
  {
    img: JavaSpringBoot,
    title: "Certificação Java | Spring Boot",
    description: "Concluí estudos de Java com foco em Spring Boot na Udemy.",
    link: "https://www.udemy.com/certificate/UC-ee3de95e-2a36-412b-860c-d94566b64a6d/",
    button: "Veja mais",
  },
  {
    img: DesignUXTwo,
    title: "Certificação em Design UX - Empatia",
    description:
      "Obtive o Certificado de UX do Google (2/7) com foco em empatia no design UX.",
    link: "https://www.coursera.org/account/accomplishments/verify/B3NGU29HH9KP",
    button: "Veja mais",
  },
  {
    img: DesignUXThree,
    title: "Certificação em Design UX - Wireframes | Protótipos Lo-Fi",
    description:
      "Concluí o Certificado de UX do Google (3/7) cobrindo wireframes e protótipos lo-fi.",
    link: "https://www.coursera.org/account/accomplishments/verify/DPMZ5HJJE443",
    button: "Veja mais",
  },
  {
    img: Typescript,
    title: "Certificação Typescript",
    description:
      "Concluí estudos de Typescript e Programação Orientada a Objetos (POO) na Udemy.",
    link: "https://www.udemy.com/certificate/UC-580be9ad-a4ee-4dfc-b047-f378d21dd3eb/",
    button: "Veja mais",
  },
];

export default certificates;
