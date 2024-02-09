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

  body {
    font-family: var(--Main-font), sans-serif;
    background-color: var(--Background-grey);
    overflow-x: hidden;
    overflow-y: scroll;
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


  a {
    text-decoration: none;
    color: inherit;
  }

  .c-darkGrey{
    color: var(--Background-grey)
}

.c-pink{
    color: var(--Cherry-pink);
}

.c-lightGrey{
    color: var(--Light-grey)
}

.c-white{
    color: var(--White-screen)
}

.f-main{
    font-family: var(--Main-font);
}

.d-flex{
    display: flex;
}

.flex-row{
    display: flex;
    flex-direction: row;
}

.flex-column{
    display: flex;
    flex-direction: column;
}

.flex-wrap{
    display: flex;
    flex-wrap: wrap;
}

.j-start {
    justify-content: flex-start;
}

.j-end {
    justify-content: flex-end;
}

.j-center {
    justify-content: center;
}

.j-between {
    justify-content: space-between;
}

.a-start {
    align-items: flex-start;
}

.a-end {
    align-items: flex-end;
}

.a-center {
    align-items: center;
}

.g-1 {
    gap: 1rem;
}

`;

export default GlobalStyle;
