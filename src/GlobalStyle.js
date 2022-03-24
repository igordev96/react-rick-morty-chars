import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #202328;
    padding: 2rem 20rem;

    @media screen and (max-width: 1200px){
      padding: 2rem 10rem;
    }

    @media screen and (max-width: 720px){
      padding: 2rem 2rem;
    }
  }

  h1 {
    font-size: 3rem;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: #ffffff;
  }

  button {
    background-color: transparent;
    border: none;
    width: 10rem;
    height: 4rem;
    border: 1px solid #ffffff;
    border-radius: 10px;
    color: #ffffff;
    font-size: 2rem;

    &:disabled {
      color: #5e5e64;
    }
  }
`;

export const StyledApp = styled.div`
  h1 {
    margin-bottom: 2rem;
  }
`;

export const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Cards = styled.div`
  display: grid;
  align-items: center;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`;
