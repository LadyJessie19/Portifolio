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

export const StyledSmallCardProject = styled.div`
  border: 1px solid ${colors.LightGrey};
  display: flex;
  flex-direction: column;
  width: 20%;
  font-family: "Fira Code";

  .first-row {
    padding: 0.5rem 0.5rem;
    color: ${colors.LightGrey};
  }

  .second-row {
    border-top: 1px solid ${colors.LightGrey};
    padding: 1rem;
  }

  .row-one {
    font-size: 24px;
    color: ${colors.WhiteScreen};
    margin-bottom: 0.5rem;
  }
  .row-two {
    color: ${colors.LightGrey};
    margin-bottom: 0.7rem;
  }
`;

export const StyledContentSection = styled.div`
  display: flex;
  flex-direction: column;

  .inner-section {
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;
  }
`;

export const StyledSectionHeader = styled.div`
  display: flex;
  margin: 1% 14%;

  .inner-header {
    max-width: 99vw;
    display: flex;
    align-items: center;
    gap: 17rem;
  }
  .left-header {
    display: flex;
    color: ${colors.WhiteScreen};
    font-size: 26px;
  }
  .left-header > img {
    margin-left: 0.5rem;
  }
  p > span {
    color: ${colors.CherryPink};
  }
  .right-header {
    display: flex;
    color: ${colors.WhiteScreen};
  }
`;

export const StyledSkillsSection = styled.div`
  display: flex;
  flex-direction: column;

  .skills-row {
    display: flex;
    justify-content: center;
    gap: 7rem;
    /* width: 100%; */
  }
  .right-side {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    width: 30%;
    gap: 1rem;
  }
`;

export const StyledSkillCard = styled.div`
  border: 1px solid ${colors.LightGrey};
  color: ${colors.LightGrey};

  .first-row {
    padding: 0.3rem;
  }
  .second-row {
    padding: 0.5rem;
    border-top: 1px solid ${colors.LightGrey};
  }
`;

export const StyledGeneralCard = styled.div`
  border: 1px solid ${colors.LightGrey};
  max-width: 20%;

  .first-row {
    text-align: center;
    padding: 0.3rem;
  }
  .first-row > img {
    width: 200px;
  }
  .second-row {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-top: 1px solid ${colors.LightGrey};
    color: ${colors.LightGrey};
  }
  h3 {
    color: ${colors.WhiteScreen};
    font-weight: 400;
  }
`;

export const StyledMessageMeCard = styled.div`
  border: 1px solid ${colors.LightGrey};
  width: 18%;
  padding: 0.5rem;

  h3 {
    color: ${colors.WhiteScreen};
  }
  .row {
    display: flex;
    align-items: center;
    color: ${colors.LightGrey};
    cursor: pointer;
  }
  .row:hover {
    background-color: ${colors.CandyGreen};
    color: ${colors.BackgroundGrey};
  }
`;

export const StyledFooter = styled.div`
  margin: 1rem 0 0 0;
  border-top: 1px solid ${colors.LightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .first-row {
    width: 70%;
    color: ${colors.WhiteScreen};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .second-row {
    color: ${colors.LightGrey};
    text-align: center;
  }

  .left-side {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .footer-text {
    color: ${colors.LightGrey};
    display: flex;
    gap: 1rem;
  }
`;
