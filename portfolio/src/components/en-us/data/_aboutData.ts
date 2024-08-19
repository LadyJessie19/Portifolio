interface IAbout {
  pageTitle: string;
  pageDescription: string;
  pageSectionTitleOne: string;
  pageSectionTitleTwo: string;
  pageSectionTitleThree: string;
  pageSectionTitleFour: string;
  jessieBentesOne: string;
  jessieBentesTwo: string;
  jessieBentesThree: string;
  jessieBentesFour: string;
  funFacts: string[];
}

const AboutMeData: IAbout = {
  pageTitle: "about-me",
  pageDescription: "Who am I?",
  pageSectionTitleOne: "jessie-bentes",
  pageSectionTitleTwo: "skills",
  pageSectionTitleThree: "certificates",
  pageSectionTitleFour: "my-fun-facts",
  jessieBentesOne:
    "Hey! I'm Jéssica Bentes, a dedicated fullstack developer residing in Campo Grande. My journey into tech began with diverse experiences, including graphic producer and writer, before I found my true passion in coding.",
  jessieBentesTwo:
    "In summary, I have worked on a patient management system using React.js, Node.js, MongoDB, and Mongoose. I participated in a job application platform for programming positions using Nest.js, TypeORM, and PostgreSQL, which was my first team experience. I developed a contact platform for doctors and hospitals using Spring Boot and AWS. I created a food ranking system using Spring Boot, MongoDB, Swagger, and Railway for deployment. I worked on a service management system for an event company using Spring Boot, MySQL, and AWS, utilizing development and staging environments, as well as Cognito for authentication.",
  jessieBentesThree:
    "Driven by a desire to contribute meaningfully to the field, I've dedicated myself to mastering various programming languages and frameworks. I'm deeply inspired by the potential of technology to create positive change and enhance lives.",
  jessieBentesFour:
    "Eager to met fellow developers, share insights, and continue my journey of growth and innovation in the dynamic world of software development!",
  funFacts: [
    "My favorite food is pizza (with lots of pepper).",
    "I consider myself a developer/writer.",
    "I dream of visiting South Korea.",
    "One of my favorite hobbies is playing video games.",
    "I can say 'I love you' in 7 different languages.",
    "I'm passionate about music.",
  ],
};

export default AboutMeData;
