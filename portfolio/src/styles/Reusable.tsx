import styled from 'styled-components';
import { colors } from './theme';

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
