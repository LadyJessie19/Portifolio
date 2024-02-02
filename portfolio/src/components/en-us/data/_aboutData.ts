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
    "At Satelier, I delved deep into JavaScript. Working as a monitor, I specialized in React.js, TypeScript, and Node.js. This experience fueled my passion for problem-solving and community collaboration in the tech sphere.",
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
