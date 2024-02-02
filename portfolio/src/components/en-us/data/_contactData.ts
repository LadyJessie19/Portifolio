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
  pageTitle: "contacts",
  pageDescription: "Do you wanna reach me?",
  pageSectionTitleOne: "all-media",
  contactMeHeadline: "I'm open to freelance gigs!",
  contactMeOne:
    "But hey, if you've got any other requests or just wanna chat, hit me up anytime.",
  allMedias: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jessiemoura19/?locale=en_US",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "GitHub",
      link: "https://github.com/LadyJessie19",
      icon: "fa-brands fa-github",
    },
    {
      name: "Whatsapp",
      link: "https://api.whatsapp.com/send?phone=5521999877516",
      icon: "fa-brands fa-whatsapp",
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
