import styled from "styled-components";

export const StyledMainPresentation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.WhiteScreen};
  h1 {
    font-size: 23px;
    text-align: center;
  }
  span {
    color: ${({ theme }) => theme.colors.CherryPink};
  }
  p {
    max-width: 90%;
  }
`;

export const ButtonsPresentation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
