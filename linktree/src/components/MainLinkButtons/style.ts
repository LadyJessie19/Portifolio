import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`${fadeIn}`;

// @keyframes shake-animation {
//   0% { transform:translate(0,0) }
//  1.78571% { transform:translate(5px,0) }
//  3.57143% { transform:translate(0,0) }
//  5.35714% { transform:translate(5px,0) }
//  7.14286% { transform:translate(0,0) }
//  8.92857% { transform:translate(5px,0) }
//  10.71429% { transform:translate(0,0) }
//  100% { transform:translate(0,0) }
//  }

interface TooltipProps {
  visible: boolean;
}

export const StyledMainLinkButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20px;
  a {
    width: 70%;
  }
`;

export const StyledLinkButton = styled.button`
  background-color: ${({ theme }) => theme.colors.BackgroundGrey};
  color: ${({ theme }) => theme.colors.WhiteScreen};
  border: 2px solid ${({ theme }) => theme.colors.CherryPink};
  padding: 7px 20px;
  width: 100%;
  font-size: 16px;
  font-family: "Fira Code";
  cursor: pointer;
  animation: ${fadeInAnimation} 1s ease-in-out 1;

  &:hover {
    // font-weight: bold;
  }

  &.linkedin:hover {
    color: ${({ theme }) => theme.colors.WhiteScreen};
    background-color: ${({ theme }) => theme.colors.Linkedin};
  }

  &.github:hover {
    color: ${({ theme }) => theme.colors.WhiteScreen};
    background-color: ${({ theme }) => theme.colors.Github};
  }

  &.medium:hover {
    color: ${({ theme }) => theme.colors.WhiteScreen};
    background-color: ${({ theme }) => theme.colors.Medium};
  }

  &.instagram:hover {
    color: ${({ theme }) => theme.colors.WhiteScreen};
    background-color: ${({ theme }) => theme.colors.Instagram};
  }

  &.discord:hover {
    color: ${({ theme }) => theme.colors.WhiteScreen};
    background-color: ${({ theme }) => theme.colors.Discord};
  }
`;

export const StyledTooltip = styled.div<TooltipProps>`
  position: absolute;
  top: 95.5%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.HoverPink};
  color: ${({ theme }) => theme.colors.CherryPink};
  padding: 8px;
  border-radius: 5px;
  margin-top: 8px;
  white-space: nowrap;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: ${({ visible }: any) => (visible ? 1 : 0)};
  visibility: ${({ visible }: any) => (visible ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;
