import styled, { keyframes } from "styled-components";
import { fadeIn, merge, slideInLeft } from "react-animations";

const slideLeftElements = merge(slideInLeft, fadeIn);
const slideLeftAnimation = keyframes`${slideLeftElements}`;

export const StyledMainImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: 1s ${slideLeftAnimation};
`;

export const StyledLabel = styled.div`
  position: absolute;
  background-color: #ff88d1;
  color: var(--#1E1E1E);
  padding: 10px;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  top: 170px;
  margin: 0 auto;
  z-index: 1;
`;
