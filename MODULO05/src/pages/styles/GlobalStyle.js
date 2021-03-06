import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    min-height: 100%;
    background: #71c;
  }

  body, input, button{
    color: #222;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smmothing: antialiased !important;
  }

  button{
    cursor: pointer;
  }
`
