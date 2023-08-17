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
import { StyledProjectsSection, StyledSkillsSection } from "../../styles/ReusableStyles";
import SectionHeader from "../reusable/SectionHeader";
import Figures from "../../assets/Figures.svg"

interface IProjects {
  img: any;
  tools: string;
  name: string;
  description: string;
  link: string;
}

const biggerProjects: Array<IProjects> = [
  {
    img: "img",
    tools: "HTML CSS JavaScript",
    name: "ChertNodes1",
    description: "Alô! Lorem Lorem Lorem",
    link: "https://github.com/LadyJessie19/String-Format-JS-CSharp",
  },
  {
    img: "img",
    tools: "HTML CSS JavaScript",
    name: "ChertNodes2",
    description: "Alô! Lorem Lorem Lorem",
    link: "https://github.com/LadyJessie19/String-Format-JS-CSharp",
  },
  {
    img: "img",
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
      <StyledProjectsSection>
        <SectionHeader title='projects' path="/projects"/>
        <div className="projects-row">
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
      </StyledProjectsSection>
        {/* ------------------------------------- */}


        <StyledSkillsSection>
            <SectionHeader title='skills' />
            <div className="skills-row">
                <div className="left-side">
                    <img src={Figures} />
                </div>
                <div className="right-side">
                    {skills.map((item) => {return <SkillCard category={item.category} tools={item.tools} />})}
                </div>
            </div>
        </StyledSkillsSection>

          {/* ------------------------------------- */}



      <SmallProjectCard />
      <MessageMeCard />

      <Footer />
    </>
  );
};

export default Reusable;
