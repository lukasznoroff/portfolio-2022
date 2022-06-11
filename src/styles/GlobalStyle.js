import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #f5f3ed;
    font-family: 'Montserrat', sans-serif;
  }
  
  p {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #202020;
  }
  
  li {
    list-style-type: none;
    text-transform: uppercase;
  }
  
  h1 {
    font-size: 5vw;
    @media (max-width: 800px) {
     font-size: 50px;
      line-height: 1;

    }
  }
`;



export default GlobalStyle;