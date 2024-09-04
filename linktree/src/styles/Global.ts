import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --Background-grey: #1E1E1E;
    --Cherry-pink: #FF88D1;
    --Candy-green: #98C379;
    --Hover-pink: #FF88D133;
    --Light-grey: #ABB2BF;
    --Original-pink: #C778DD;
    --Soft-blue: #62AEEF;
    --White-screen: #faf9f9;

    --Main-font: 'Fira Code';
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

  .d-flex{
    display: flex;
  }
  
  .g-1{
    gap: 1rem;
  }

  ::-webkit-scrollbar {
  width: 18px;
}

::-webkit-scrollbar-track {
  background: var(--Background-grey);
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.CherryPink};
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;

export default GlobalStyle;
