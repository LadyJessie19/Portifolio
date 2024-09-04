type MediaType = {
  name: string;
  link: string;
  icon: string;
};

interface IContact {
  pageTitle: string;
  pageDescription: string;
  pageSectionTitleOne: string;
  contactMeHeadline: string;
  contactMeOne: string;
  allMedias: Array<MediaType>;
}

const ContactMeData: IContact = {
  pageTitle: "contatos",
  pageDescription: "Você quer entrar em contato comigo?",
  pageSectionTitleOne: "todas-as-mídias",
  contactMeHeadline: "Estou aberta a trabalhos freelance!",
  contactMeOne:
    "Mas, se você tiver qualquer outro pedido ou apenas quiser conversar, me chame a qualquer momento.",
  allMedias: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jessiemoura/",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "GitHub",
      link: "https://github.com/LadyJessie19",
      icon: "fa-brands fa-github",
    },
    {
      name: "Medium",
      link: "https://medium.com/@jessie_moura",
      icon: "fa-brands fa-medium",
    },
    {
      name: "Figma",
      link: "https://www.figma.com/files/user/1164006161769032343?fuid=1164006161769032343",
      icon: "fa-brands fa-figma",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/lady_jessie19/",
      icon: "fa-brands fa-instagram",
    },
    {
      name: "Email",
      link: "mailto:jessie.moura19@gmail.com",
      icon: "fa-regular fa-envelope",
    },
  ],
};

export default ContactMeData;
