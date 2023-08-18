import GlobalStyle from "../../styles/Global";
import BigProjectCard from "../reusable/BigProjectCard";
import Footer from "../reusable/Footer";
import HeaderTitle from "../reusable/HeaderTitle";
import Logo from "../reusable/Logo";
import MainButton from "../reusable/MainButton";
import MainImg from "../reusable/MainImg";
import MessageMeCard from "../reusable/MessageMeCard";
import NavBar from "../reusable/NavBar";
import SkillCard from "../reusable/SkillCard";
import SmallProjectCard from "../reusable/SmallProjectCard";
import LogoImg from "../../assets/Logo.svg";
import SquareDecor from "../reusable/SquareDecor";
import TinySideBar from "../reusable/TinySideBar";
import Quote from "../reusable/Quote";
import { StyledContentSection, StyledSkillsSection } from "../../styles/ReusableStyles";
import SectionHeader from "../reusable/SectionHeader";
import Figures from "../../assets/Figures.svg"
import GeneralCard from "../reusable/GeneralCard";
import GoogleImg from "../../assets/Google1.png"
import Site from "../../assets/site.png"

interface IProjects {
  img: any;
  tools: string;
  name: string;
  description: string;
  link: string;
}

const biggerProjects: Array<IProjects> = [
  {
    img: Site,
    tools: "HTML CSS JavaScript",
    name: "ChertNodes1",
    description: "Alô! Lorem Lorem Lorem",
    link: "https://github.com/LadyJessie19/String-Format-JS-CSharp",
  },
  {
    img: Site,
    tools: "HTML CSS JavaScript",
    name: "ChertNodes2",
    description: "Alô! Lorem Lorem Lorem",
    link: "https://github.com/LadyJessie19/String-Format-JS-CSharp",
  },
  {
    img: Site,
    tools: "HTML CSS JavaScript",
    name: "ChertNodes3",
    description: "Alô! Lorem Lorem Lorem",
    link: "https://github.com/LadyJessie19/String-Format-JS-CSharp",
  },
];

const skills = [
    {
        category:'Languages',
        tools:'JavaScript'
    },
    {
        category:'Languages',
        tools:'JavaScript'
    },
    {
        category:'Languages',
        tools:'JavaScript'
    },
    {
        category:'Languages',
        tools:'JavaScript'
    },
    {
        category:'Languages',
        tools:'JavaScript'
    },
    {
        category:'Languages',
        tools:'JavaScript'
    },
    {
        category:'Languages',
        tools:'JavaScript'
    },
    {
        category:'Languages',
        tools:'JavaScript'
    },
]

const Reusable = () => {
  return (
    <>
      <GlobalStyle />
      <h1 className={"c-lightGrey f-main d-flex j-center"}>Reusable!</h1>

      <SquareDecor type="Small" />
      <TinySideBar />
      <Logo img={LogoImg} />
      <MainButton text="Main Button" path="/about" />
      <NavBar />
      <HeaderTitle />
      <MainImg />
      <Quote />


        {/* -------------------------------------- */}
      <StyledContentSection>
        <SectionHeader title='projects' path="/projects"/>
        <div className="inner-section">
          {biggerProjects.map((item) => {
            return (
              <BigProjectCard
                img={item.img}
                tools={item.tools}
                name={item.name}
                description={item.description}
                link={item.link}
              />
            );
          })}
        </div>
      </StyledContentSection>
        {/* ------------------------------------- */}


        <StyledSkillsSection>
            <SectionHeader title='skills' />
            <div className="skills-row">
                <div className="left-side">
                    <img src={Figures} alt="figures"/>
                </div>
                <div className="right-side">
                    {skills.map((item) => {return <SkillCard category={item.category} tools={item.tools} />})}
                </div>
            </div>
        </StyledSkillsSection>

          {/* ------------------------------------- */}
        
        <StyledContentSection>
          <SectionHeader title="certificates"/>
          <div className="inner-section">
            <GeneralCard img={GoogleImg} title={"Fundamentos do Design UX"} description={"Certificação do Google para Designers UX"} link={"https://www.coursera.org/professional-certificates/google-ux-design"} />
            <GeneralCard img={GoogleImg} title={"Fundamentos do Design UX"} description={"Certificação do Google para Designers UX"} link={"https://www.coursera.org/professional-certificates/google-ux-design"} />
            <GeneralCard img={GoogleImg} title={"Fundamentos do Design UX"} description={"Certificação do Google para Designers UX"} link={"https://www.coursera.org/professional-certificates/google-ux-design"} />
          </div>
        </StyledContentSection>

        {/* -------------------------------------- */}

        <StyledContentSection>
          <SectionHeader title="blog-posts"/>
          <div className="inner-section">

          <GeneralCard img={GoogleImg} title={"Principios Solid"} description={"Sobre os principios do paradigma de POO"} link={"https://medium.com/@jessie_moura/arnia-english-homework-time-travel-1e6b62b9b64e"} />

          <GeneralCard img={GoogleImg} title={"Principios Solid"} description={"Sobre os principios do paradigma de POO"} link={"https://medium.com/@jessie_moura/arnia-english-homework-time-travel-1e6b62b9b64e"} />
          </div>


        </StyledContentSection>

      <SmallProjectCard tools="JS HTML CSS" title="Boilerplate" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit." button="Figma" link="https://github.com/LadyJessie19/fourthModule"/>

      <GeneralCard img={GoogleImg} title={"Fundamentos do Design UX"} description={"Certificação do Google para Designers UX"} link={"https://www.coursera.org/professional-certificates/google-ux-design"} />

      <MessageMeCard />

      <Footer />
    </>
  );
};

export default Reusable;
