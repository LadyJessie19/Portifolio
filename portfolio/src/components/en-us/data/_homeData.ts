interface IHome {
  introduction: string;
  pathContact: string;
  buttonMainHome: string;
  downloadCV: string;
  SectionTitleOne: string;
  pathProjects: string;
  pathSectionProjects: string;
  SectionTitleTwo: string;
  SectionTitleThree: string;
  SectionTitleFour: string;
  SectionTitleFive: string;
  aboutMeOne: string;
  aboutMeTwo: string;
  aboutMeThree: string;
  aboutMeFour: string;
  pathAbout: string;
  pathSectionAbout: string;
  buttonAboutText: string;
  SectionTitleSix: string;
  contactMeOne: string;
  contactMeTwo: string;
}

const HomeData: IHome = {
  introduction:
    "Proficient in both front-end and back-end development, she ensures smooth user experiences throughout the entire process, from conceptualization to deployment.",
  pathContact: "/us/contacts",
  buttonMainHome: "Contact Me",
  downloadCV: "Download CV",
  SectionTitleOne: "projects",
  pathProjects: "/us/projects",
  pathSectionProjects: "/us/projects/#blog-posts",
  SectionTitleTwo: "skills",
  SectionTitleThree: "certificates",
  SectionTitleFour: "blog-posts",
  SectionTitleFive: "about-me",
  pathAbout: "/us/about-me",
  pathSectionAbout: "/us/about-me/#certificates",
  buttonAboutText: "Read More",
  aboutMeOne: "Hi!👋 You may call me Jessie!",
  aboutMeTwo:
    "I'm a Fullstack developer originally from Rio de Janeiro, now based in Campo Grande, MS. I started in 2022 and mainly work with JavaScript, Java, and SQL. My focus is on web applications and user experience.",
  aboutMeThree:
    "Fluent in English, I practice clean code and have experience with GIT. Additionally, I work as a monitor at a programming school. I'm excited to continue growing and contributing in the field!",
  aboutMeFour:
    "I'm eager to keep learning and collaborating with the programming community. I hope to contribute my knowledge and skills as I continue my journey in this exciting field of technology.",
  SectionTitleSix: "contact",
  contactMeOne: "I'm open to freelance gigs!",
  contactMeTwo:
    "but hey, if you've got any other requests or just wanna chat, hit me up anytime.",
};

export default HomeData;
