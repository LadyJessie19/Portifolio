import styled from "styled-components";

export const StyledMainButton = styled.button`
  background-color: ${({ theme }) => theme.colors.BackgroundGrey};
  color: ${({ theme }) => theme.colors.WhiteScreen};
  border: 2px solid ${({ theme }) => theme.colors.CherryPink};
  padding: 7px 20px;
  font-size: 16px;
  font-family: "Fira Code";
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.HoverPink};
  }
`;
