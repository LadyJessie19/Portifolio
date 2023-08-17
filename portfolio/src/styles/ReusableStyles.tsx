import styled from "styled-components";
import { colors } from "./theme";

export const StyledMainButton = styled.button`
  background-color: ${colors.BackgroundGrey};
  color: ${colors.WhiteScreen};
  border: 2px solid ${colors.CherryPink};
  padding: 7px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.HoverPink};
  }
`;

export const StyledTinySideBar = styled.span`
  position: absolute;
  top: 0px;
  left: 55px;

  .side-bar-icons {
    position: relative;
    right: 15px;
    display: flex;
    flex-direction: column;
  }
`;

export const StyledNavBar = styled.span`
  position: absolute;
  top: 0px;
  right: 200px;
  margin: 50px 50px;
  display: flex;
  gap: 1rem;
  color: ${colors.WhiteScreen};

  span {
    color: ${colors.CherryPink};
  }
`;

export const StyledQuote = styled.span`
  width: 100vw;
  display: flex;
  justify-content: center;
  /* background-color: pink; */

  .inner-quote {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-end;
  }
  .begin-quote {
    background-color: ${colors.BackgroundGrey};
    padding: 7px;
    position: absolute;
    right: 8px;
    top: 55px;
  }
  .end-quote {
    background-color: ${colors.BackgroundGrey};
    padding: 7px;
    position: absolute;
    left: 8px;
    top: -15px;
  }
  .phrase-quote {
    border: 1px solid ${colors.LightGrey};
    color: ${colors.WhiteScreen};
    font-size: 21px;
    font-weight: 500;
    padding: 0px 30px;
  }
`;

export const StyledBigCardProject = styled.div`
  border: 1px solid ${colors.LightGrey};
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 1rem;
`;

export const StyledProjectsSection = styled.div`
  display: flex;
  flex-direction: column;

  .projects-row {
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;
  }
`;

export const StyledSectionHeader = styled.div`
  display: flex;
  margin: 5% 0% 2% 14%;
  width: 100%;

  .inner-header{
    display: flex;
    gap: 18rem;
    align-items: center;
  }
  .left-header{
    display: flex;
    color: ${colors.WhiteScreen};
    font-size: 26px;
  }
  .left-header>img{
    margin-left: .5rem;
  }
  p>span{
    color: ${colors.CherryPink};
  }
  .right-header{
    display: flex;
    color: ${colors.WhiteScreen}
  }
`;

export const StyledSkillsSection = styled.div`
  display: flex;
  flex-direction: column;

  .skills-row {
    display: flex;
    justify-content: center;
    gap: 7rem;
    width: 100%;
  }
  .right-side{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    width: 30%;
    gap: 1rem;
  }
`;

export const StyledSkillCard = styled.div`
  border: 1px solid ${colors.LightGrey};
  
  .first-row{
    padding: .3rem;
  }
  .second-row{
    padding: .5rem;
    border-top: 1px solid ${colors.LightGrey};
  }
`;