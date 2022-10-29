import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 * {
    margin: 10;
    padding: 20;
    box-sizing: border-box;
 }

 body {
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
    font-family: Arial, Helvetica, sans-serif
 }
`;
export default GlobalStyle;
